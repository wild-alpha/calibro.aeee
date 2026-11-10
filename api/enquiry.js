// POST /api/enquiry: the contact form on /contact and /ar/contact.
// The browser sends JSON (site.js): the fields, the time the form was open, and up to 3 MB of files as base64
// (Vercel's request limit is 4.5 MB; base64 adds a third). The function checks the input, drops bots quietly,
// and emails the enquiry, with the files attached, to the studio through Calibro's own mailbox (SMTP).
//
// Environment variables (Vercel > Project > Settings > Environment Variables):
//   SMTP_USER    the sending mailbox, e.g. website@calibro.ae (a Google Workspace user or alias with 2-step verification)
//   SMTP_PASS    an app password for that mailbox
//   SMTP_HOST    optional, default smtp.gmail.com
//   SMTP_PORT    optional, default 465
//   ENQUIRY_TO   optional, default info@calibro.ae (comma-separated for several addresses)
'use strict';

const MAX_FILES_BYTES = 3 * 1024 * 1024;
const MAX_FILES = 10;
const ALLOWED = /\.(pdf|dwg|dxf|xlsx|xls|zip|jpe?g|png)$/i;
const EMAIL = /^[^\s@<>()",;]+@[^\s@<>()",;]+\.[a-z]{2,}$/i;
const LIMITS = { name: 120, company: 160, email: 200, phone: 60, role: 80, project: 200, message: 6000 };

const one = (v, max) => String(v == null ? '' : v).replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
const text = (v, max) => String(v == null ? '' : v).replace(/\r\n?/g, '\n').trim().slice(0, max);

function check(body) {
  if (!body || typeof body !== 'object') return { status: 400, error: 'bad request' };
  // bots: the hidden field filled in, or the form sent within three seconds of opening
  if (one(body.website, 200) !== '' || Number(body.elapsed) < 3000) return { status: 200, silent: true };
  const f = {
    name: one(body.name, LIMITS.name), company: one(body.company, LIMITS.company), email: one(body.email, LIMITS.email),
    phone: one(body.phone, LIMITS.phone), role: one(body.role, LIMITS.role), project: one(body.project, LIMITS.project),
    message: text(body.message, LIMITS.message), lang: body.lang === 'ar-AE' ? 'ar' : 'en',
  };
  if (!f.name) return { status: 422, error: 'name' };
  if (!EMAIL.test(f.email)) return { status: 422, error: 'email' };
  const files = Array.isArray(body.files) ? body.files : [];
  if (files.length > MAX_FILES) return { status: 413, error: 'too many files' };
  let total = 0;
  const attachments = [];
  for (const file of files) {
    const name = one(file && file.name, 180).replace(/[\\/]/g, '_');
    if (!ALLOWED.test(name)) return { status: 415, error: 'file type' };
    const content = Buffer.from(String(file.data || ''), 'base64');
    total += content.length;
    if (total > MAX_FILES_BYTES) return { status: 413, error: 'files too large' };
    attachments.push({ filename: name, content });
  }
  return { status: 200, fields: f, attachments };
}

function message(f, attachments, to, from) {
  const rows = [
    ['Name', f.name], ['Company or practice', f.company], ['Email', f.email], ['Phone or WhatsApp', f.phone],
    ['Role', f.role], ['Project and location', f.project], ['Page language', f.lang === 'ar' ? 'Arabic' : 'English'],
  ].filter(([, v]) => v);
  const lines = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const files = attachments.length ? attachments.map(a => `- ${a.filename} (${Math.ceil(a.content.length / 1024)} KB)`).join('\n') : 'none';
  return {
    from: `"Calibro website" <${from}>`,
    to,
    replyTo: `"${f.name.replace(/"/g, '')}" <${f.email}>`,
    subject: `Website enquiry: ${f.name}${f.company ? ' (' + f.company + ')' : ''}`,
    text: `${lines}\n\nWhat they need:\n${f.message || '(no message)'}\n\nFiles attached:\n${files}\n\nReply to this email to answer ${f.name} directly.`,
    attachments,
  };
}

async function send(mail) {
  if (module.exports.transport) return module.exports.transport.sendMail(mail); // tests
  const nodemailer = require('nodemailer');
  const port = Number(process.env.SMTP_PORT || 465);
  const t = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com', port, secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return t.sendMail(mail);
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = null; } }
  const r = check(body);
  if (r.status !== 200) return res.status(r.status).json({ ok: false, error: r.error });
  if (r.silent) return res.status(200).json({ ok: true });
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    if (!module.exports.transport) {
      console.error('enquiry: SMTP_USER / SMTP_PASS are not set');
      return res.status(500).json({ ok: false, error: 'mail not configured' });
    }
  }
  const to = process.env.ENQUIRY_TO || 'info@calibro.ae';
  const from = process.env.SMTP_USER || 'website@calibro.ae';
  try {
    await send(message(r.fields, r.attachments, to, from));
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('enquiry: sending failed', err && err.message);
    return res.status(502).json({ ok: false, error: 'send failed' });
  }
}

module.exports = handler;
module.exports.check = check;
module.exports.message = message;
module.exports.transport = null;
