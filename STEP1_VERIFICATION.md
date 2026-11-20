# Step 1 — verification results (19 November 2026)

Status: **static checks passed** (6/6) on modified original website.

These checks confirm six HTML pages, internal links, targets, CSS, scripts, JPEG paths, and enquiry routes. All five JPEGs decode successfully.

**Not verified:** browser navigation/real-world interaction, AWS cloud hosting, Apporto VMs, load testing, security audit, sending email or live ordering. The available Chromium browser blocked all page navigation, including `file://`, `http://127.0.0.1`, and even `data:`. Do not cite any locally rendered preview as proof of AWS deployment.

## Tests

```text
test_all_internal_links_assets_and_fragments (__main__.SiteTests.test_all_internal_links_assets_and_fragments) ... ok
test_css_images (__main__.SiteTests.test_css_images) ... ok
test_enquiry_routes (__main__.SiteTests.test_enquiry_routes) ... ok
test_manual_copy_fallback (__main__.SiteTests.test_manual_copy_fallback) ... ok
test_product_headings_are_in_main (__main__.SiteTests.test_product_headings_are_in_main) ... ok
test_six_pages_exist (__main__.SiteTests.test_six_pages_exist) ... ok

----------------------------------------------------------------------
Ran 6 tests in 0.029s

OK

```

## Image dimensions

- `brownie_f.jpg` — 1280 × 996 px
- `fruit_tart.jpg` — 1059 × 1024 px
- `strawberry_icecream.jpg` — 1571 × 1109 px
- `chocolate_cake.jpg` — 2048 × 1536 px
- `strawberry_cheesecake_f.jpg` — 2048 × 1536 px
