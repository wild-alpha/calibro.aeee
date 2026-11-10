# Calibro website: launch on Vercel and connect calibro.ae

For the developer. This folder is the complete new calibro.ae: 33 pages (English and Arabic), their images and film, one small function for the contact form, and the Vercel configuration. There is no build step and no framework: Vercel serves the files in `public/` as they are, which is the fastest form a site can take for Google and for AI search engines.

## What is in the folder

| Path | What it is |
|---|---|
| `public/` | The website. Every page is plain HTML with its SEO and structured data already in it. |
| `public/assets/` | One stylesheet, one script (both with a content hash in the name, cached for a year), the Arabic fonts. |
| `public/img/`, `public/video/` | Only the images and films the pages use. |
| `public/sitemap.xml`, `robots.txt`, `llms.txt` | For Google, Bing and AI engines. |
| `api/enquiry.js` | The contact form: emails each enquiry, with up to 3 MB of attachments, to the studio. |
| `api/gone.js` | Answers "410 Gone" for one removed project URL. |
| `vercel.json` | Clean URLs (no `.html`, no trailing slash), redirects from the old site, security and cache headers. |
| `package.json` | One dependency for the form function: `nodemailer`. |

## Step 1: before uploading, three checks with the owner

1. **The font licence.** The brand font, TWK Lausanne, is licensed by Weltkern to Calibro Furniture Trading FZE, and webfont use is allowed only on domains registered in Calibro's Weltkern order. Confirm with the owner that `calibro.ae` is registered there. The font files are **not** in this folder, on purpose.
2. **The open facts.** The owner has seen the items listed at the end of this guide.
3. **Access.** You need the owner's Vercel team (or yours, with the owner's agreement), and access to the DNS of `calibro.ae` (the registrar, or Cloudflare, wherever the DNS is managed today).

## Step 2: add the font files

Copy these four files from Calibro's own TWK Lausanne download (the `web` folder of the Weltkern package) into `public/assets/fonts/`, with exactly these names, then delete `public/assets/fonts/ADD-LAUSANNE-HERE.txt`:

```
TWKLausanne-300.woff2
TWKLausanne-400.woff2
TWKLausanne-500.woff2
TWKLausanne-300Italic.woff2
```

If you keep the project in Git, keep the repository **private**. The `.gitignore` already keeps the Lausanne files out of Git, so upload with the Vercel CLI (step 3, option B), or remove that line from `.gitignore` only if the repository is private and the licence allows it.

## Step 3: create the Vercel project

**Option A, from Git (recommended for later updates).**
1. Put this folder in a new **private** repository (GitHub, GitLab or Bitbucket).
2. Vercel → Add New → Project → import the repository.
3. Settings on the import screen:
   - Framework Preset: **Other**
   - Root Directory: the folder that contains `vercel.json`
   - Build Command: leave **empty** (override it to empty if Vercel fills one in)
   - Output Directory: **public**
   - Install Command: default (`npm install`, for the form function only)
4. Do not deploy yet: add the environment variables first (step 4).

**Option B, from this computer with the Vercel CLI.**

```bash
npm i -g vercel
```

```bash
vercel login
```

```bash
vercel link
```

```bash
vercel deploy
```

Run them inside this folder. `vercel deploy` makes a preview; `vercel deploy --prod` publishes it to production once the checks in step 5 pass.

## Step 4: environment variables for the contact form

Vercel → Project → Settings → Environment Variables (Production and Preview):

| Name | Value |
|---|---|
| `SMTP_USER` | The mailbox that sends the enquiries, for example `website@calibro.ae`: a Google Workspace user or alias. |
| `SMTP_PASS` | An **app password** for that mailbox (Google Account → Security → 2-Step Verification → App passwords). Not the normal password. |
| `ENQUIRY_TO` | `info@calibro.ae` (several addresses: comma-separated). |
| `SMTP_HOST` | Optional. Default `smtp.gmail.com`. |
| `SMTP_PORT` | Optional. Default `465`. |

The form sends each enquiry by email to `ENQUIRY_TO`, with the client's address as Reply-To, so the studio answers by pressing Reply. Files go as attachments, up to 3 MB in total: Vercel functions accept at most 4.5 MB per request. The form tells clients to email or WhatsApp larger drawing sets. Spam protection is built in: a hidden field that bots fill, a minimum time on the page, a file-type list and size limits. There is no third-party CAPTCHA.

## Step 5: check the preview before touching the domain

Open the preview URL Vercel gives you and check:

- [ ] Home, a project page, `/ar` and `/contact` open with the Lausanne font. In the browser's Network tab, no font file returns 404.
- [ ] The home film plays, muted, after the page has loaded.
- [ ] Send a test enquiry with a small PDF: it reaches `info@calibro.ae` with the file attached, and the form says "Thank you".
- [ ] `/products` redirects to `/bespoke-furniture`, `/our-factory` to `/production`, and `/projects/emerald-hills` answers 410.
- [ ] `/about/` (with a slash) redirects to `/about`.
- [ ] `/sitemap.xml`, `/robots.txt` and `/llms.txt` open.
- [ ] An unknown address, such as `/xyz`, shows the Calibro 404 page.

## Step 6: connect calibro.ae

1. **If calibro.ae is attached to the old Vercel project today** (the current Next.js site), remove `calibro.ae` and `www.calibro.ae` from the old project first: old project → Settings → Domains → Remove. Keep the old project itself for a few weeks as a fallback; do not delete it.
2. New project → Settings → Domains → add `calibro.ae`, then add `www.calibro.ae` and set it to **redirect to `calibro.ae`** (308). The site's canonical address is `https://calibro.ae`, without `www`.
3. Vercel then shows the exact DNS records for this project. **Use the values the dashboard shows**: Vercel assigns them per project, so do not copy them from another project or from an old guide. Usually:
   - `calibro.ae`: an **A** record, name `@`, value as shown;
   - `www.calibro.ae`: a **CNAME** record, name `www`, value as shown.
4. At the DNS provider, replace only those two records. **Do not touch the MX, TXT (SPF, DKIM, DMARC) or any other records**: they run Calibro's Google Workspace email. Lower the TTL to 300 a few hours before, if possible.
5. Wait until Vercel shows "Valid Configuration" for both, and the HTTPS certificate is issued (automatic, usually minutes).
6. Check `https://calibro.ae`, `http://calibro.ae` and `https://www.calibro.ae`: all must end on `https://calibro.ae/`.

## Step 7: tell Google and Bing (the same day)

1. **Google Search Console** (search.google.com/search-console), signed in with the owner's Google account:
   - Use the existing `calibro.ae` property, or add a **Domain** property and verify it with the TXT record Google shows (it does not affect email).
   - Sitemaps → submit `https://calibro.ae/sitemap.xml`.
   - URL Inspection → Request indexing for: `/`, `/bespoke-furniture`, `/joinery`, `/ffe`, `/projects`, `/projects/il-primo-penthouse`, `/about`, `/contact`, `/ar`.
2. **Bing Webmaster Tools** (bing.com/webmasters): import the site from Search Console and submit the same sitemap. Bing also feeds ChatGPT search and Copilot.
3. For eight weeks, check Search Console → Pages → "Not found (404)" once a week. Any old URL that appears gets a redirect added to `vercel.json`.

## Updating the site later

The pages are generated from sources kept by the owner (`CALIBRO-KB/12-website-digital/site-v4/_build/`). After a change there, run the build and this package is regenerated:

```bash
py -3 -X utf8 -I _build/projects.py && py -3 -X utf8 -I _build/build.py && py -3 -X utf8 -I _build/sitemap.py && py -3 -X utf8 -I _build/qa.py && py -3 -X utf8 -I _build/deploy.py
```

Then copy the new `public/` over the old one (keeping the four Lausanne files) and redeploy. The function, `vercel.json` and the environment variables do not change.

## Not included, waiting for the owner

These do not block the upload technically. They are listed so nothing goes live by accident:

- **The chair photograph section on the home** is left out: the photograph is not Calibro's and there is no licence for it (owner's decision, 9 Nov 2026). Do not use `--with-chair`.
- **Facts the owner may still confirm:** the project areas (m²) of seven projects (Il Primo's 492 m² is confirmed) and the districts shown on the project pages, and the SO/ Uptown designer.
- **Analytics:** none is installed, and the privacy policy says so (no analytics, no cookies). If the owner wants analytics, Vercel Web Analytics needs no cookies; add it only with the privacy policy updated.
- **The Workspace (client portal)** stays on Netlify (`calibroworkspace.netlify.app`), linked from `/workspace`. If `workspace.calibro.ae` is pointed at Netlify later, a CNAME at the DNS provider is enough, and the two links on `/workspace` change.
