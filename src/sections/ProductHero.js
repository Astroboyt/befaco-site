import { renderDiagramPanel } from '../components/ModuleDiagram.js'

const PLUS_SVG = `<svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`

const PREV_SVG = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L5 7l4 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
const NEXT_SVG = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l4 5-4 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`

function renderCarousel(product) {
  const images = product.images ?? [product.imgSrc]
  const slides = images.map(src => `
    <div class="carousel-slide">
      <img src="${src}" alt="${product.name}" class="product-module-img" />
    </div>`).join('')
  const dots = images.map((_, i) => `
    <button class="carousel-dot${i === 0 ? ' is-active' : ''}" data-idx="${i}" aria-label="Image ${i + 1}"></button>`).join('')
  const showControls = images.length > 1

  return `
    <div class="product-carousel">
      <div class="product-carousel-viewport">
        <div class="product-carousel-track">${slides}</div>
      </div>
      ${showControls ? `
      <div class="carousel-controls">
        <button class="carousel-btn" id="carousel-prev" aria-label="Previous">${PREV_SVG}</button>
        <div class="carousel-dots">${dots}</div>
        <button class="carousel-btn" id="carousel-next" aria-label="Next">${NEXT_SVG}</button>
      </div>` : ''}
    </div>`
}

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

function renderBreadcrumbs(crumbs) {
  return crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1
    const item = isLast
      ? `<span class="breadcrumb-current">${c.label}</span>`
      : `<a href="${c.href}" class="breadcrumb-link">${c.label}</a>`
    const sep = i > 0 ? `<span class="breadcrumb-sep">/</span>` : ''
    return sep + item
  }).join('')
}

export function renderProductHero(product) {
  const crumbs = [
    { label: 'All',        href: '/modules.html' },
    { label: product.category ?? 'Modulation', href: '/modules.html' },
    { label: product.name },
  ]

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

  return `
    <section id="product" style="padding-top:var(--nav-h);">

      <nav class="product-breadcrumb border-b border-b-border" aria-label="Breadcrumb">
        ${renderBreadcrumbs(crumbs)}
      </nav>

      <div class="product-hero-inner border-b border-b-border">
        <div class="product-hero-left">
          <span class="product-ghost-name" aria-hidden="true">${product.name}</span>
          ${renderCarousel(product)}
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
        <div class="product-photo-col">${renderDiagramPanel()}</div>
      </div>

    </section>`
}
