/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===== MOBILE NAV TOGGLE ===== */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observerNav.observe(s));

/* ===== SCROLL REVEAL ===== */
document.querySelectorAll(
  '.info-card, .skill-group, .project-card, .qa-item, .tl-item, .contact-card, .about-text, .about-cards, .resume-section'
).forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${(i % 4) * 80}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== QA ACCORDION ===== */
document.querySelectorAll('.qa-item').forEach(item => {
  const q = item.querySelector('.qa-q');
  q.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.qa-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

/* ===== NAV ACTIVE STYLE ===== */
const style = document.createElement('style');
style.textContent = `.nav-links a.active { background: var(--accent-pale); color: var(--accent); }`;
document.head.appendChild(style);
