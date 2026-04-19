// shared.js — injects nav + footer into every page
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html',       label: 'Home' },
    { href: 'about.html',       label: 'About' },
    { href: 'opportunity.html', label: 'Opportunity' },
    { href: 'faq.html',         label: 'FAQ' },
    { href: 'book.html',        label: 'Book a Call' },
    { href: 'apply.html',       label: 'Apply Now', cta: true },
  ];

  const navHTML = `
  <nav id="main-nav">
    <a href="index.html" class="nav-logo">
      <svg width="26" height="30" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fg2" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stop-color="#fff4e0"/>
            <stop offset="35%" stop-color="#ffb347"/>
            <stop offset="70%" stop-color="#ff6a00"/>
            <stop offset="100%" stop-color="#cc2200" stop-opacity="0.7"/>
          </radialGradient>
        </defs>
        <path d="M14 2C14 2,20 9,18.5 15C21.5 11,22 6,20 2C24 8,24.5 16,21 21C24 17,23.5 10,21.5 6C25 13,24.5 22,21 27C19 30,17 32,14 32C11 32,9 30,7 27C3.5 22,3 13,6.5 6C4.5 10,4 17,7 21C3.5 16,4 8,8 2C6 6,6.5 11,9.5 15C8 9,14 2,14 2Z" fill="url(#fg2)"/>
        <ellipse cx="14" cy="25" rx="4" ry="4.5" fill="#fff8f0" opacity="0.45"/>
      </svg>
      <span class="nav-logo-wrap">
        <span class="nav-logo-text">OMNIA</span>
        <span class="nav-logo-parent">by Ignite</span>
      </span>
    </a>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      ${navLinks.map(l => `
        <li>
          <a href="${l.href}"
             class="${l.cta ? 'nav-cta' : 'nav-link'}${currentPage === l.href ? ' active' : ''}">
            ${l.label}
          </a>
        </li>`).join('')}
    </ul>
  </nav>`;

  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">
          <svg width="22" height="25" viewBox="0 0 28 32" fill="none">
            <defs>
              <radialGradient id="fg3" cx="50%" cy="80%" r="60%">
                <stop offset="0%" stop-color="#fff4e0"/>
                <stop offset="35%" stop-color="#ffb347"/>
                <stop offset="70%" stop-color="#ff6a00"/>
                <stop offset="100%" stop-color="#cc2200" stop-opacity="0.7"/>
              </radialGradient>
            </defs>
            <path d="M14 2C14 2,20 9,18.5 15C21.5 11,22 6,20 2C24 8,24.5 16,21 21C24 17,23.5 10,21.5 6C25 13,24.5 22,21 27C19 30,17 32,14 32C11 32,9 30,7 27C3.5 22,3 13,6.5 6C4.5 10,4 17,7 21C3.5 16,4 8,8 2C6 6,6.5 11,9.5 15C8 9,14 2,14 2Z" fill="url(#fg3)"/>
          </svg>
          <span class="nav-logo-wrap">
            <span class="nav-logo-text">OMNIA</span>
            <span class="nav-logo-parent">by Ignite</span>
          </span>
        </a>
        <p class="footer-tagline">Build a 6-figure insurance business<br/>on your terms.</p>
      </div>
      <div class="footer-links-group">
        <div class="footer-col">
          <div class="footer-col-title">Company</div>
          <a href="index.html">Home</a>
          <a href="about.html">About Omnia</a>
          <a href="opportunity.html">The Opportunity</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Get Started</div>
          <a href="book.html">Book a Call</a>
          <a href="apply.html">Apply Now</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 Omnia — An Ignite Brand. All rights reserved.</span>
      <span>Independent contractor opportunity. Results may vary.</span>
    </div>
  </footer>`;

  // Insert nav at top of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  // Insert footer at bottom of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Mobile hamburger toggle
  document.getElementById('nav-hamburger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('open');
    this.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link, .nav-cta').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav-links').classList.remove('open');
      document.getElementById('nav-hamburger').classList.remove('open');
    });
  });
})();
