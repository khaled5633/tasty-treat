# TastyTreat — step-by-step coursework workflow

## Important distinction
Your supplied **CMS22201 Operating Systems & Cloud** coursework brief uses an **ABC Exclusive** digital entertainment case study. It does **not** ask you to build TastyTreat as the primary assignment. TastyTreat can serve as a demonstrable web application for the cloud-deployment requirement, but it does NOT replace the case study, operating system analysis, VM requirements, cloud justification, calculations or report.

## Step 1 — local website package (prepared)
- Original six-page dessert website preserved.
- Five real JPEG images are present and verified as valid image files.
- Internal links, anchors, assets and enquiry query strings pass the bundled static tests.
- The enquiry form prepares/copies text only; it DOES NOT send an email, take orders/payments or store customer information.
- Browser-based verification has not been completed, as the browser available in the working environment blocked page navigation. Validate it on your computer and retain genuine screenshots.

You can open `index.html` locally or run a local web server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/ in your own browser.

## Step 2 — cloud deployment (YOU must do using your account)
Use `docs/AWS_EC2_GUIDE.md`. The provided Ubuntu Nginx script is for an academic **HTTP demo**. Record the actual configuration, VM specifications and test outputs.

## Step 3 — virtual machines
Use Apporto and the operating systems required by your module; preserve genuine screenshots of the VM configuration, Ubuntu terminal and OS version. The assignment brief is inconsistent about the number of VMs: it says "at least two" and then describes "one Ubuntu server and 2 Ubuntu or Kali". Clarify the exact count with the tutor before final submission.

## Step 4 — cloud / OS analysis
Compare OS options using at least 3 criteria, justify your cloud decision, discuss protection/security, process scheduling, memory allocation and relevant cost/scalability trade-offs. Use the ABC Exclusive case study instead of pretending it describes a dessert shop.

## Step 5 — final report and presentation
Use `docs/REPORT_OUTLINE.md` and `docs/EVIDENCE_CAPTURE.md`, adding your own authentic observations, calculations, cloud screenshots, conclusions and properly credited Harvard-style sources. The brief says one PDF or Word report is the Canvas submission artifact. The presentation and this ZIP are additional aids unless your tutor requests them.
