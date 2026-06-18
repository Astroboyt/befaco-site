import { NEWS_ITEMS } from './News.js'

const ARROW_SVG = `<svg width="16" height="16" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5"/></svg>`
const NEWS_ARROW = `<svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/></svg>`

const CELLS = [
  { label: 'WORKSHOPS',    href: '/community.html' },
  { label: 'OPEN SOURCE',  href: '/community.html' },
  { label: 'DIY KITS',     href: '/community.html' },
  { label: 'ABOUT US',     href: '/community.html' },
  { label: 'MODULAR MEETS',href: '/community.html' },
  { label: 'VCV RACK',     href: '/community.html' },
  { label: 'BUILDERS',     href: '/community.html' },
  { label: 'EVENTS',       href: '/community.html' },
]

export function renderCommunity() {
  const cells = CELLS.map(({ label, href }) => `
    <a href="${href}" class="community-cell">
      <span class="community-cell-label">${label}</span>
      <span class="community-cell-arrow">${ARROW_SVG}</span>
    </a>`
  ).join('')

  const newsItems = NEWS_ITEMS.map((item, i) => `
    <a href="${item.href}" class="news-row${i === 0 ? ' news-row--first' : ''}">
      <span class="news-row-title">${item.title}</span>
      <span class="news-row-arrow">${NEWS_ARROW}</span>
    </a>`
  ).join('')

  return `
    <section id="community" class="border-b border-b-border">

      <div class="community-inner border-b border-b-border">

        <div class="community-left">
          <img src="/src/assets/logos/globe.svg" alt="" class="community-globe" />
          <p class="community-heading">COMMUNITY</p>
          <p class="community-body">Befaco started in 2012 with a simple idea — make electronic instruments that players can open up, understand, and change. Every module is designed in-house, documented for builders, and released open-source.</p>
          <a href="/community.html" class="community-cta">{SEE MORE}</a>
        </div>

        <div class="community-news">
          <p class="news-heading">Latest <span class="news-heading-accent">NEWS</span></p>
          <div class="news-list">
            ${newsItems}
          </div>
        </div>

      </div>

      <div class="community-grid">
        ${cells}
      </div>

    </section>`
}
