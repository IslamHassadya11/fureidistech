# FureidisTech Website — Setup Guide

## What's in this folder
- `index.html` — Home page (hero, about, town links, who it's for)
- `what-we-do.html` — Activities page
- `events.html` — Past + upcoming events page
- `join.html` — Join page with a sign-up form
- `assets/style.css` — all styles (light + dark mode)
- `assets/app.js` — language switching (EN/AR/HE), theme toggle, animations, form sending
- `assets/logo_light.png`, `assets/logo_dark.png` — your logo, transparent versions

## 1. Put it online for FREE (pick ONE option)

### Option A — Netlify Drop (easiest, ~2 minutes, no coding)
1. Go to https://app.netlify.com/drop
2. Create a free account (email or Google)
3. Drag this whole folder onto the page
4. Done — you get a live URL like `https://fureidistech.netlify.app`
   (You can rename the subdomain in Site settings → Change site name.)

### Option B — GitHub Pages (most standard)
1. Create a free account at https://github.com
2. Create a new repository named exactly: `fureidistech.github.io` (public)
3. Upload all files from this folder (drag & drop in the browser: "Add file" → "Upload files")
4. Wait 1–2 minutes → your site is live at `https://fureidistech.github.io`

### Option C — Cloudflare Pages
1. Free account at https://pages.cloudflare.com
2. "Create a project" → "Direct upload" → drag this folder
3. Live at `https://fureidistech.pages.dev`

All three are free forever for a site like this (static files, no server).

## 2. Custom domain (optional)
A free subdomain (like fureidistech.netlify.app) costs nothing.
A real domain like `fureidistech.com` or `fureidis.tech` costs about $10–15/year:
- Buy at https://www.cloudflare.com/products/registrar/ or https://www.namecheap.com
- Then in Netlify/GitHub Pages/Cloudflare settings: "Add custom domain" and follow the steps.
- Tip: `.tech` domains often have first-year discounts and fit the brand.
There is no reputable way to get a real top-level domain 100% free — avoid "free domain" offers, they're usually low-quality or expire.

## 3. Make the Join form work (free, ~3 minutes)
The form uses Formspree (free plan: 50 submissions/month, sent to your email).
1. Create a free account at https://formspree.io
2. Click "New form", name it (e.g. "FureidisTech Join"), set the email where submissions should arrive
3. Copy your form ID (looks like `xabcdefg`)
4. Open `join.html` and find this line:
   `action="https://formspree.io/f/YOUR_FORM_ID"`
   Replace `YOUR_FORM_ID` with your real ID.
5. Re-upload the file. Submissions now arrive in your email.

Alternative: if you prefer Google Forms, create one and simply change the Join buttons to link to it.

## 4. Updating content
- All text in all 3 languages lives in ONE place: `assets/app.js` (the big `T = {...}` object).
  Edit the text there; the pages update automatically.
- Event descriptions: keys `ev1_h`, `ev1_p`, `ev2_h`, `ev2_p` (in each language).
- To add event photos: put images in `assets/` and add `<img src="assets/photo.jpg" style="width:100%;border-radius:12px;margin-bottom:16px">` inside an event card in `events.html`.

## 5. Facebook links used
- Page: https://www.facebook.com/FureidisTech
- Messenger: https://m.me/FureidisTech
