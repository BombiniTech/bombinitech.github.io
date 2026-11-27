# Bombini Technologies | website

A static website with no dependencies or build command. Palette: charcoal, yellow, white and warm neutral backgrounds. The supplied new transparent logo is converted losslessly from the uploaded WebP to PNG. The founder portraits are bundled locally. No founder biographies, proprietary engineering descriptions or drone imagery appear on the page.

## Deploy
1. Extract this ZIP. Upload its CONTENTS to the root of your existing GitHub repository connected to Netlify. Replace matching files and the assets. Do not upload an extra enclosing folder.
2. Remove the obsolete `thank-you.html` from the previous version (optional; it is no longer linked). The website does not use Netlify Forms. You can disable form detection in Netlify if you no longer need it. Leave existing DNS and email records untouched.
3. Commit to the production branch. Netlify will redeploy with the existing `netlify.toml` (publish directory `.`). No domain or DNS changes required.

## Email contact
The address used throughout this version is **hello@bombinitech.com**, exactly as requested. Previous materials used **hello@bombinitech.com**. Confirm that the .co address is intentional and is an active mailbox before publishing. If necessary, replace the address in `index.html` and `script.js`.
The contact form creates an encoded mailto link with the filled-in fields and opens the visitor's registered email application. It does not send automatically or collect/store submissions. The visitor must review and send the email. Visitors without a configured mail client can copy the displayed address and send an email manually. A true direct-send form requires a backend or an external form service; never put SMTP credentials in public JavaScript. Test with a configured email client. The included Netlify configuration only controls static hosting and security headers.

## Media
University of Ottawa, Faculty of Engineering, May 26, 2025: https://www.uottawa.ca/faculty-engineering/news-all/flying-greener-cycling-smarter-student-startups-uottawa-engineering-tackle-sustainable
The media card mentions the first-place Ideas award, but does not reproduce the technical details. The external article itself contains descriptions of Bombini's early propulsion concept. Review the confidentiality implications before publishing the link.

## Photography
The site retains the existing remote Unsplash nature photos. Image downloads were unavailable; the photos are not included locally and their live rendering could not be verified. If the image server is unreachable, the site displays muted landscape-inspired gradient backgrounds rather than a broken image. For self-contained hosting, download the original photos and replace the two remote `url(...)` references in `styles.css` with local asset paths.
- Hero: Jack Charles, https://unsplash.com/photos/an-aerial-view-of-a-forest-with-mountains-in-the-background-H2L-S7xefzs
- Mission: Leon O'Neill, https://unsplash.com/photos/a-mountain-with-a-forest-in-front-of-it-i1WDP2VNF98
- License: https://unsplash.com/license

Netlify may independently display its hosting badge; this website does not attempt to hide it.
