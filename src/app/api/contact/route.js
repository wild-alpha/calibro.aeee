
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 465;
const SMTP_USER = "main@calibro.ae";

const MAIL_FROM = "main@calibro.ae";
const MAIL_TO = "info@calibro.ae";

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 60;
const MAX_MESSAGE = 5000;

function clean(value = "", max = 1000) {
  return String(value ?? "")
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, max);
}

function escapeHtml(value = "") {
  const characters = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  };

  return String(value).replace(
    /[&<>'"]/g,
    (char) => characters[char]
  );
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    let data;

    try {
      data = await req.json();
    } catch {
      return Response.json(
        {
          success: false,
          message: "Invalid form submission.",
        },
        { status: 400 }
      );
    }

    if (
      !data ||
      typeof data !== "object" ||
      Array.isArray(data)
    ) {
      return Response.json(
        {
          success: false,
          message: "Invalid form submission.",
        },
        { status: 400 }
      );
    }

    // Honeypot spam protection
    if (clean(data.website, 200)) {
      return Response.json({ success: true });
    }

    // Sanitize submitted fields
    const name = clean(data.name, MAX_NAME);
    const email = clean(data.email, MAX_EMAIL);
    const phone = clean(data.phone, MAX_PHONE);
    const message = clean(data.message, MAX_MESSAGE);
    const source = clean(data.source, 500);

    // Required field validation
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Please complete the required fields.",
        },
        { status: 400 }
      );
    }

    // Email validation
    if (!isValidEmail(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Google App Password from server environment
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      console.error(
        "CONTACT API: SMTP_PASS is not configured."
      );

      return Response.json(
        {
          success: false,
          message:
            "The enquiry service is temporarily unavailable. Please contact us by WhatsApp or phone.",
        },
        { status: 503 }
      );
    }

    // Google SMTP configuration
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,

      auth: {
        user: SMTP_USER,
        pass: smtpPass,
      },

      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const subject = `New Calibro Website Enquiry - ${name}`;

    // Plain text email
    const text = `
NEW CALIBRO WEBSITE ENQUIRY

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Source: ${source || "Website"}

PROJECT BRIEF

${message}
    `.trim();

    // HTML email template
    const html = `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 650px;
        margin: 0 auto;
        padding: 24px;
        color: #222222;
        line-height: 1.6;
      ">

        <div style="
          background: #702c42;
          color: #ffffff;
          padding: 22px;
        ">
          <h2 style="margin: 0;">
            New Calibro Website Enquiry
          </h2>
        </div>

        <div style="
          background: #f5f6f8;
          padding: 24px;
        ">

          <p>
            <strong>Name:</strong>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Phone:</strong>
            ${escapeHtml(phone || "Not provided")}
          </p>

          <p>
            <strong>Source:</strong>
            ${escapeHtml(source || "Website")}
          </p>

          <h3 style="
            margin-top: 24px;
            color: #702c42;
          ">
            Project Brief
          </h3>

          <div style="
            background: #ffffff;
            padding: 18px;
            border-left: 4px solid #702c42;
            overflow-wrap: anywhere;
          ">
            ${escapeHtml(message).replace(/\n/g, "<br>")}
          </div>

        </div>

        <p style="
          margin-top: 18px;
          font-size: 12px;
          color: #777777;
        ">
          Submitted through the Calibro website contact form.
        </p>

      </div>
    `;

    // Send from primary mailbox to email alias
    await transporter.sendMail({
      from: `"Calibro Website" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
      html,
    });

    return Response.json(
      {
        success: true,
        message: "Your enquiry has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT FORM ERROR:", {
      message: error?.message,
      code: error?.code,
      command: error?.command,
    });

    return Response.json(
      {
        success: false,
        message:
          "Unable to send your enquiry. Please contact us by WhatsApp or phone.",
      },
      { status: 500 }
    );
  }
}
