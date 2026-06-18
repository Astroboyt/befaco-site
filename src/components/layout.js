const CHEVRON_SVG = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" aria-hidden="true"><path d="M2 3.5l3 3 3-3"/></svg>`
const SEARCH_SVG  = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="7.5" cy="7.5" r="5"/><line x1="11.5" y1="11.5" x2="16" y2="16"/></svg>`
const CLOSE_SVG   = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/></svg>`

export const NAV_HTML = `
<div id="page-overlay"></div>

<nav id="site-nav">
  <a href="/index.html" class="nav-logo">
    <img src="/src/assets/logos/befaco-nav.svg" alt="Befaco" style="width:259px;height:46px;display:block;" />
  </a>
  <div class="nav-links">

    <!-- SHOP mega menu -->
    <div class="nav-mega-wrap">
      <button class="nav-link nav-mega-btn" aria-expanded="false" id="nav-shop-btn">Shop ${CHEVRON_SVG}</button>
    </div>

    <!-- RESOURCES dropdown -->
    <div class="nav-dropdown-wrap">
      <button class="nav-link nav-dropdown-btn" aria-expanded="false" id="nav-resources-btn">Resources ${CHEVRON_SVG}</button>
      <div class="nav-dropdown-panel" id="nav-resources-panel">
        <a href="#" class="nav-dropdown-item">Articles</a>
        <a href="#" class="nav-dropdown-item">DIY Guide</a>
        <a href="#" class="nav-dropdown-item">Software Center</a>
        <a href="#" class="nav-dropdown-item">Workshops</a>
        <a href="#" class="nav-dropdown-item">Videos</a>
        <a href="#" class="nav-dropdown-item">Legacy</a>
      </div>
    </div>

    <a href="/community.html" class="nav-link" data-page="community">Community</a>

    <button class="nav-search-btn" id="nav-search-btn" aria-label="Search">${SEARCH_SVG}</button>
  </div>
</nav>

<div class="nav-mega-panel" id="nav-shop-panel">
  <div class="nav-mega-col">
    <p class="nav-mega-head">MODULES</p>
    <a href="/modules.html" class="nav-mega-item">All Modules</a>
    <a href="/modules.html" class="nav-mega-item">Generator</a>
    <a href="/modules.html" class="nav-mega-item">Processor</a>
    <a href="/modules.html" class="nav-mega-item">Modulation</a>
    <a href="/modules.html" class="nav-mega-item">Interface</a>
    <a href="/modules.html" class="nav-mega-item">Utilities</a>
    <a href="/modules.html" class="nav-mega-item">SI</a>
  </div>
  <div class="nav-mega-col">
    <p class="nav-mega-head">POWER</p>
    <a href="/power.html" class="nav-mega-item">Cases</a>
    <a href="/power.html" class="nav-mega-item">Power Bus</a>
    <a href="/power.html" class="nav-mega-item">ChikiPower</a>
    <a href="/power.html" class="nav-mega-item">LunchBus</a>
    <a href="/power.html" class="nav-mega-item">Passive Bus</a>
    <a href="/power.html" class="nav-mega-item">Trolley Bus</a>
  </div>
  <div class="nav-mega-col">
    <p class="nav-mega-head">ACCESSORIES</p>
    <a href="#" class="nav-mega-item">Patch Cables</a>
    <a href="#" class="nav-mega-item">Knurlies</a>
    <a href="#" class="nav-mega-item">Bananuts</a>
    <a href="#" class="nav-mega-item">MIDI Cables</a>
    <a href="#" class="nav-mega-item">Squid Cable</a>
    <a href="#" class="nav-mega-item">Star Multiple</a>
  </div>
  <div class="nav-mega-col nav-mega-col--cta">
    <p class="nav-mega-head">MORE</p>
    <a href="/shop.html" class="nav-mega-item">Online Store</a>
    <a href="#"          class="nav-mega-item">VCV Rack</a>
  </div>
</div>

<div class="nav-search-bar" id="nav-search-bar">
  <input class="nav-search-input" id="nav-search-input" type="search" placeholder="Search modules, resources…" autocomplete="off" />
  <button class="nav-search-close" id="nav-search-close" aria-label="Close search">${CLOSE_SVG}</button>
</div>
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
      <div class="footer-col">
        <p class="footer-col-head">COMPANY</p>
        <ul class="footer-links">
          <li><a href="#">DEALERS</a></li>
          <li><a href="#">LICENSING</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">ABOUT US</a></li>
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
