const PLUS_SVG = `<svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`

const TABS = [
  {
    label: 'FEATURES',
    content: `4-channel voltage-controlled crossfader with independent CV inputs per channel. Each channel has a dedicated level knob and can be individually gated or muted. The internal routing allows complex signal morphing without additional utilities in the chain.`,
  },
  {
    label: 'SPECS',
    content: `Width: 8HP<br>Depth: 40mm<br>Height: 128.5mm<br><br>Power: +12V 60mA / -12V 30mA<br>CV Input range: ±5V<br>Audio I/O: ±8V pp`,
  },
  {
    label: 'RESOURCES',
    content: `<a href="#" class="accordion-link">Download Build Guide ↗</a><a href="#" class="accordion-link">View Schematic ↗</a><a href="#" class="accordion-link">GitHub Repository ↗</a>`,
  },
  {
    label: 'INTERNAL MODULATION',
    content: `An internal triangle LFO is normalled to all four CV inputs when nothing is patched. LFO rate and depth are controllable via front panel. Patch any channel CV to override internal modulation on that channel independently.`,
  },
]

const BREADCRUMBS = 'All / Generator / Processor / Modulation / Interface / Utilities / 1U'

export function renderProductHero(product) {
  const accordionItems = TABS.map((t, i) => `
    <div class="accordion-item">
      <button class="accordion-trigger" aria-expanded="${i === 0 ? 'true' : 'false'}" data-idx="${i}">
        <span>${t.label}</span>
        ${PLUS_SVG}
      </button>
      <div class="accordion-body${i === 0 ? ' is-open' : ''}">
        <div class="accordion-body-inner">${t.content}</div>
      </div>
    </div>`).join('')

  const lifestyleImg = product.lifestyleImgSrc
    ? `<img src="${product.lifestyleImgSrc}" alt="${product.name} in use" />`
    : ''

  return `
    <section id="product" style="padding-top:var(--nav-h);">

      <div class="product-breadcrumb border-b border-b-border">
        <a href="/modules.html" class="product-breadcrumb-link">${BREADCRUMBS}</a>
      </div>

      <div class="product-hero-inner border-b border-b-border">
        <div class="product-hero-left">
          <span class="product-ghost-name" aria-hidden="true">${product.name}</span>
          <img src="${product.imgSrc}" alt="${product.name}" class="product-module-img reveal" />
        </div>
        <div class="product-hero-right">
          <div class="product-info">
            <h1 class="product-name">${product.name}</h1>
            <div class="product-desc">${product.descFull}</div>
          </div>
          <div class="product-actions">
            <div class="product-actions-row">
              <button class="btn-rect btn-rect-cart">Add to Cart</button>
              <button class="btn-rect btn-rect-qty" aria-label="Quantity">1</button>
            </div>
            <button class="btn-rect btn-rect-diy">Buy DIY</button>
          </div>
        </div>
      </div>

      <div class="product-split">
        <div class="product-tabs-col">${accordionItems}</div>
        <div class="product-photo-col">${lifestyleImg}</div>
      </div>

    </section>`
}
