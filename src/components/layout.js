export const NAV_HTML = `
<div id="page-overlay"></div>

<nav id="site-nav">
  <a href="/index.html" class="nav-logo">
    <img src="/src/assets/logos/befaco-nav.svg" alt="Befaco" style="width:259px;height:46px;display:block;" />
  </a>
  <div class="nav-links">
    <a href="/modules.html"   class="nav-link" data-page="modules">Modules</a>
    <a href="/power.html"     class="nav-link" data-page="power">Power</a>
    <a href="/resources.html" class="nav-link" data-page="resources">Resources</a>
    <a href="/community.html" class="nav-link" data-page="community">Community</a>
    <a href="/shop.html"      class="nav-link nav-shop" data-page="shop">Shop</a>
  </div>
</nav>
`

export const FOOTER_HTML = `
<footer class="border-t border-b-border">

  <div class="footer-main">

    <div class="footer-address">
      <img src="/src/assets/logos/befaco-nav.svg" alt="Befaco" style="width:259px;height:46px;display:block;" />
      <p class="footer-city">CALLE DE PERU 98</p>
    </div>

    <div class="footer-nav">
      <div class="footer-col">
        <p class="footer-col-head">MODULES</p>
        <ul class="footer-links">
          <li><a href="/modules.html">POWER</a></li>
          <li><a href="/modules.html">ACCESSORIES</a></li>
          <li><a href="/modules.html">DIY KITS</a></li>
          <li><a href="/modules.html">DEALERS</a></li>
          <li><a href="/modules.html">LICENSING</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <p class="footer-col-head">COMMUNITY</p>
        <ul class="footer-links">
          <li><a href="/community.html">WORKSHOPS</a></li>
          <li><a href="/community.html">ABOUT US</a></li>
          <li><a href="/community.html">DIY KITS</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-logos">
      <img src="/src/assets/logos/befaco-logo.png" alt="Ajuntament de Barcelona" style="height:103px;object-fit:contain;" />
      <img src="/src/assets/logos/hangar-logo.png" alt="Hangar.org" style="height:72px;object-fit:contain;" />
    </div>

  </div>

  <div class="footer-bottom">
    <p class="footer-bottom-left">CALLE DE PERU 98</p>
    <p class="footer-bottom-right">Barcelona</p>
  </div>

</footer>
`

export const ARROW_SVG = `
<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/>
</svg>
`

export function setActiveNav(page) {
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === page) link.classList.add('active')
  })
}
