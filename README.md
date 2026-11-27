# Bombini Technologies — Mission Control / Editorial Aerospace

Static HTML, CSS and JavaScript. No build command, packages, tracking, form service or backend. Based on the approved visual concept and previous Bombini website. Original supplied logo and portraits are bundled. The site describes development goals, not validated performance; no proprietary engineering details or aircraft images are included.

## Deploy to existing GitHub + Netlify
Extract the ZIP, upload **the contents** (not the enclosing directory) to the root of the current repository, replace matching files and commit to the production branch. Keep the existing Netlify project, domain and GoDaddy settings. `netlify.toml` specifies publish directory `.`. Old unused `thank-you.html` may be deleted. No need to enable Netlify Forms. The hosting provider may display its own badge; this site does not hide it.

## Contact
The form opens a prefilled email addressed to **hello@bombinitech.com** in the visitor's registered email application. The visitor must send it there. The site does not automatically send or store anything. Direct email is also linked. A true automatic email submission would require a server-side service; never put mail credentials in public code.

## Imagery
Primary hero photograph: Jack Charles, Unsplash, https://unsplash.com/photos/an-aerial-view-of-a-forest-with-mountains-in-the-background-H2L-S7xefzs (https://unsplash.com/license). The original external stock photo URL from the prior website is retained in styles.css. External downloading was unavailable, so `assets/terrain-fallback.webp` is a local crop of the nature-only portion of the approved generated concept preview, not a stock photograph or verified location. It provides a visual fallback if the external image fails. Replace it with a licensed local nature photo if desired. Contour and circuit line art is decorative, not real terrain data or technical diagrams. No fabricated university photo is included; the press feature uses an editorial number and the actual article link.

## Media
University of Ottawa, Faculty of Engineering, May 26, 2025. The article is linked directly as requested. The article itself includes early technical details; the site copy does not reproduce them.

## Preview
Open index.html or run `python -m http.server 8000` in this directory, then visit http://localhost:8000. Test the contact form with a configured email application. For external photo loading, test using a normal internet connection.
