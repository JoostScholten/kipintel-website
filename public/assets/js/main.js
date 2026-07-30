(function () {
  'use strict';

  const header      = document.getElementById('header');
  const hamburger   = document.getElementById('hamburger');
  const navOverlay  = document.getElementById('nav-overlay');
  const navLinks    = document.querySelectorAll('.nav__link');
  const sections    = document.querySelectorAll('section[id]');

  // Header scroll shadow
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
    updateActiveLink();
  }

  // Highlight active nav link based on scroll position
  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 80;
      if (window.scrollY >= top) current = section.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }

  // Mobile nav toggle
  function toggleNav(open) {
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    navOverlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('open');
    toggleNav(!isOpen);
  });

  // Close mobile nav when an overlay link is clicked
  document.querySelectorAll('.nav-overlay__link').forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
  });

  // Smooth-scroll offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY
                     - parseInt(getComputedStyle(document.documentElement)
                         .getPropertyValue('--header-h'));
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
