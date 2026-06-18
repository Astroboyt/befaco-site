const IG_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`

const ARROW_SVG = `<svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/></svg>`

export const IG_PHOTOS = [
  { src: '/src/assets/modules/bandit.png',      alt: 'Bandit' },
  { src: '/src/assets/modules/oneiroi-hero.png', alt: 'Oneiroi' },
  { src: '/src/assets/modules/morphader.png',    alt: 'Morphader' },
  { src: '/src/assets/modules/burst.png',        alt: 'Burst' },
  { src: '/src/assets/modules/joystick.png',     alt: 'Joystick' },
  { src: '/src/assets/modules/chopping-kinky.png', alt: 'Chopping Kinky' },
  { src: '/src/assets/modules/vcmc.png',         alt: 'VCMC' },
  { src: '/src/assets/modules/oneiroi-card.png', alt: 'Oneiroi' },
]

export function renderInstagram(handle = '@befacosynth', href = 'https://instagram.com/befacosynth') {
  const photos = IG_PHOTOS.map(p => `
    <a href="${href}" target="_blank" rel="noopener" class="ig-photo">
      <img src="${p.src}" alt="${p.alt}" />
      <div class="ig-photo-overlay">${IG_SVG}</div>
    </a>`
  ).join('')

  return `
    <section id="instagram" class="border-b border-b-border">

      <div class="ig-header">
        <span class="ig-icon">${IG_SVG}</span>
        <span class="ig-handle">${handle}</span>
        <a href="${href}" target="_blank" rel="noopener" class="ig-follow">
          Follow ${ARROW_SVG}
        </a>
      </div>

      <div class="ig-strip">
        ${photos}
      </div>

    </section>`
}
