/* TastyTreat: accessible navigation and static-site enquiry preparation. */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    const setMenuOpen = (open) => {
      toggle.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    };

    toggle.addEventListener('click', () => {
      setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!toggle.contains(event.target) && !menu.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });

  const form = document.querySelector('.contact-form');
  if (!form) return;

  const message = form.querySelector('#message');
  const status = form.querySelector('#form-status');
  const manualEnquiry = form.querySelector('#manual-enquiry');
  const manualText = form.querySelector('#manual-enquiry-text');
  const context = document.querySelector('#enquiry-context');
  const params = new URLSearchParams(window.location.search);
  const desserts = new Set([
    'Chocolate Cake', 'Strawberry Cheesecake', 'Strawberry Ice Cream',
    'Chocolate Brownies', 'Fruit Tart'
  ]);
  const plans = new Set(['Basic', 'Premium', 'Deluxe']);
  const dessert = params.get('dessert');
  const plan = params.get('plan');

  if (desserts.has(dessert)) {
    message.value = `Hello, I would like to enquire about ${dessert}. Please let me know the availability, price and ordering details.`;
    context.textContent = `Enquiry about: ${dessert}`;
    context.hidden = false;
  } else if (plans.has(plan)) {
    message.value = `Hello, I would like to enquire about the ${plan} membership plan. Please let me know how to join.`;
    context.textContent = `Membership enquiry: ${plan}`;
    context.hidden = false;
  }

  // Fallback for browsers where the Clipboard API is unavailable (e.g. HTTP).
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // Continue to the legacy copy fallback.
      }
    }
    const helper = document.createElement('textarea');
    helper.value = text;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.left = '-9999px';
    document.body.appendChild(helper);
    helper.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
    helper.remove();
    return copied;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const body = message.value.trim();
    if (!name || !email || !body) {
      status.textContent = 'Please complete all fields before copying your enquiry.';
      return;
    }

    const enquiry = `TastyTreat enquiry\nName: ${name}\nEmail: ${email}\n\n${body}`;
    const copied = await copyText(enquiry);
    manualEnquiry.hidden = copied;
    if (copied) {
      manualText.value = '';
      status.textContent = 'Enquiry copied! Nothing was sent. Paste it into an email or message to the business.';
    } else {
      manualText.value = enquiry;
      status.textContent = 'Automatic copying is blocked. Select and copy your complete enquiry below. Nothing was sent.';
      manualText.focus();
      manualText.select();
    }
  });
});
