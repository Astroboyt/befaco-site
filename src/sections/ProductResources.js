const ARROW_SVG = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/></svg>`

const DOC_GRAPHIC = `<svg viewBox="0 0 100 120" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.35" width="60">
  <rect x="1" y="1" width="98" height="118"/>
  <rect x="15" y="10" width="55" height="16"/>
  <line x1="15" y1="40" x2="85" y2="40"/>
  <line x1="15" y1="56" x2="85" y2="56"/>
  <line x1="15" y1="72" x2="85" y2="72"/>
  <line x1="15" y1="88" x2="55" y2="88"/>
</svg>`

const CIRCLE_GRAPHIC = `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.35" width="80">
  <circle cx="50" cy="50" r="48"/>
  <circle cx="50" cy="50" r="32"/>
  <circle cx="50" cy="50" r="14"/>
  <line x1="50" y1="2" x2="50" y2="98"/>
  <line x1="2" y1="50" x2="98" y2="50"/>
  <line x1="15" y1="15" x2="85" y2="85"/>
  <line x1="85" y1="15" x2="15" y2="85"/>
</svg>`

const VCV_GRAPHIC = `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.35" width="80">
  <rect x="2" y="2" width="96" height="96"/>
  <rect x="10" y="10" width="32" height="32" rx="16"/>
  <rect x="58" y="10" width="32" height="32" rx="16"/>
  <rect x="10" y="58" width="32" height="32" rx="16"/>
  <rect x="58" y="58" width="32" height="32" rx="16"/>
  <line x1="42" y1="26" x2="58" y2="26"/>
  <line x1="42" y1="74" x2="58" y2="74"/>
  <line x1="26" y1="42" x2="26" y2="58"/>
  <line x1="74" y1="42" x2="74" y2="58"/>
</svg>`

const RESOURCES = [
  { title: 'USER GUIDE',        graphic: DOC_GRAPHIC,    linkLabel: 'Download PDF',    linkHref: '#' },
  { title: 'HOW DOES IT WORK?', graphic: CIRCLE_GRAPHIC, linkLabel: 'Youtube Playlist', linkHref: '#' },
  { title: 'VCV RACK PLUGIN',   graphic: VCV_GRAPHIC,    linkLabel: 'Get Plugin',      linkHref: '#' },
]

export function renderProductResources() {
  const cards = RESOURCES.map(r => `
    <div class="resource-card">
      <p class="resource-card-title">${r.title}</p>
      <div class="resource-card-box">${r.graphic}</div>
      <a href="${r.linkHref}" class="resource-card-link">
        ${r.linkLabel}
        ${ARROW_SVG}
      </a>
    </div>`).join('')

  return `<section class="product-resources">${cards}</section>`
}
