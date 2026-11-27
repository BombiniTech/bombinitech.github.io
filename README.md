# Bombini Technologies — landing page

Static HTML/CSS/JS website, designed for Netlify. No npm or build command required.

## Publish
1. Extract the ZIP. Upload its **contents**, not an extra enclosing directory, to the root of the GitHub repository connected to Netlify. Replace existing `index.html` and other matching files; keep unrelated repository files if needed. Remove an obsolete GitHub Pages `CNAME` file only if no longer using GitHub Pages. Do not modify DNS or delete email records.
2. Commit to the production branch (usually `main`). Netlify will redeploy. Its publish directory should be `.` and build command blank. The `netlify.toml` file sets the directory explicitly.
3. In Netlify, open your project > Forms and enable form detection if disabled. Trigger a new deployment after enabling it. Confirm a form called `contact` appears. Submit a test on the deployed site and confirm the submission appears under Forms. Local HTML preview cannot submit to Netlify.
4. To receive emails, configure form submission notifications in Netlify (Project configuration > Notifications > Form submission notifications; UI labels may vary). Use hello@bombinitech.com. Test delivery. Review your plan's usage limits and form settings.

## Images
The founders' supplied portraits are bundled in `assets/`. Nature images are referenced by remote Unsplash CDN URLs in `styles.css` because the download service was unavailable during preparation. The photos are free under the Unsplash License as listed on their source pages. Remote image loading has not been verified in this environment. The design uses green fallback backgrounds if the CDN is unavailable. For a fully self-contained site, download these original images from their source pages, save them as `assets/forest.jpg` and `assets/mountains.jpg`, and replace the two remote `url(...)` strings in `styles.css` with `url('assets/forest.jpg')` and `url('assets/mountains.jpg')` respectively.
- Hero: Jack Charles, https://unsplash.com/photos/an-aerial-view-of-a-forest-with-mountains-in-the-background-H2L-S7xefzs
- Mission: Leon O'Neill, https://unsplash.com/photos/a-mountain-with-a-forest-in-front-of-it-i1WDP2VNF98
- License: https://unsplash.com/license

## Notes
The copy describes concept-stage objectives rather than verified performance; it does not publish proprietary engineering details. A simple typographic B mark and forest-green/gold palette are temporary design choices, not an official brand asset. Replace with your approved logo if desired. Review the short form privacy notice against actual handling and retention before launch. The page does not alter or remove hosting-provider branding.

Netlify forms documentation: https://docs.netlify.com/manage/forms/setup/
