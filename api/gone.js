// 410 Gone for a project that was removed from the site on purpose (third-party photographs).
// Search engines drop a 410 faster than a 404. vercel.json rewrites the old URL here.
module.exports = (req, res) => {
  res.statusCode = 410;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.end('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>Page removed | Calibro</title><p style="font:16px/1.5 Arial,sans-serif;margin:15vh 8vw">This page has been removed. ' +
    '<a href="/projects">See Calibro\'s projects</a>.</p></html>');
};
