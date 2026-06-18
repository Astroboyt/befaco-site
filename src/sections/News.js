const ARROW_SVG = `<svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/></svg>`

export const NEWS_ITEMS = [
  { title: 'Superbooth 2026 – Z180',          date: '2026-05-28', href: '#' },
  { title: 'IROI – OUT NOW!',                  date: '2026-04-10', href: '#' },
  { title: 'Madrid Workshop 28.03.2026',        date: '2026-03-28', href: '#' },
  { title: 'Modular Dayz Barcelona 01',         date: '2026-03-01', href: '#' },
  { title: 'Modular Day Barcelona 12',          date: '2026-02-12', href: '#' },
  { title: 'Barcelona workshop',                date: '2026-01-20', href: '#' },
  { title: 'Befaco at NAMM 2026',               date: '2026-01-14', href: '#' },
  { title: 'New firmware: Oneiroi v1.4',        date: '2025-12-05', href: '#' },
]

export function renderNews() {
  const items = NEWS_ITEMS.map((item, i) => `
    <a href="${item.href}" class="news-row${i === 0 ? ' news-row--first' : ''}">
      <span class="news-row-title">${item.title}</span>
      <span class="news-row-arrow">${ARROW_SVG}</span>
    </a>`
  ).join('')

  return `
    <section id="latest-news" class="grid grid-cols-1 md:grid-cols-2 border-b border-b-border">

      <div class="news-left border-r border-b-border">
        <p class="news-heading">Latest <span class="news-heading-accent">NEWS</span></p>
        <div class="news-list">
          ${items}
        </div>
      </div>

      <div class="news-photo" style="background-image:url('/src/assets/modules/oneiroi-hero.png');">
        <div class="news-photo-overlay"></div>
      </div>

    </section>`
}
