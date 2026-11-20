TastyTreat — repaired static website
====================================

Contents
--------
index.html, chocolate_cake.html, strawberry_cheesecake.html,
icecream.html, brownie.html, fruit_tart.html, style.css, script.js,
assets/images/*

Fixes
-----
- Added missing Strawberry Cheesecake page and repaired its broken link.
- Replaced nonfunctional "#" order and membership links with enquiry links.
- Order and plan enquiries now prefill the contact form with the selected item.
- The contact form validates input and COPIES an enquiry instead of pretending
  to send a message. If copying is blocked, the complete enquiry is shown
  for manual selection. It never collects payments or transmits personal data.
- Improved mobile navigation, keyboard access, responsive layout, page
  spacing, focus indicators, image loading and current footer year.
- Ensured product headings and descriptions share one main page landmark.

IMPORTANT: This is a static frontend demo, NOT a live store.
- There is no backend, business contact email, checkout, payment processor,
  user authentication, membership activation or real recipe downloads.
- The form copies an enquiry to the clipboard; it does not send it.
- To accept real orders, messages or subscriptions, connect a trusted
  server-side service and publish a verified contact method. Do not claim
  these actions are operational before integrating them.
- Strawberry Cheesecake pricing and ingredients were not supplied, so its
  page asks visitors to enquire instead of inventing those details.

Run locally
-----------
Open index.html in a browser, or run a static server from this folder:
  python3 -m http.server 8000
Then open http://localhost:8000/

Deploy on Apache (Ubuntu / EC2)
-------------------------------
1. Unzip the package.
2. cd TastyTreat_Fixed_Project
3. sudo cp -a . /var/www/html/
4. Visit your configured site address in a browser.
No Apache restart is needed for static file changes.
Make sure Apache has read access to the files and the site is configured
for your chosen hostname/HTTPS. Back up existing site files before copying.

Tests
-----
Run: python3 tests/test_site.py
This verifies internal links, assets, accessibility hooks and enquiry routes.
