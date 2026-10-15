// script.js - beginner-friendly JS for mobile nav and contact mailto

// Toggle mobile navigation
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('#nav ul');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
  });
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handling: open user's email client using mailto (no backend required)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // TODO: Replace this with your professional email address
  const myEmail = 'you@example.com';

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
  const mailto = `mailto:${myEmail}?subject=${subject}&body=${body}`;

  // Opens the user's default mail client
  window.location.href = mailto;
});

// Smooth scroll fallback for older browsers (links use native smooth behavior via CSS)
// This adds a small offset for the sticky header when clicking anchor links
const headerHeight = document.querySelector('.site-header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  });
});
