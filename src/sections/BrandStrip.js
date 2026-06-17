const ARROW_SVG = `<svg width="20" height="20" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/></svg>`

export function renderBrandStrip(pillars = []) {
  const pillarRows = pillars.map((p, i) => {
    const isLast = i === pillars.length - 1
    return `
      <a href="${p.href}" class="reveal flex items-center justify-between px-10 py-6 ${isLast ? '' : 'border-b border-b-border'} group hover:bg-b-dim transition-colors">
        <span style="font-family:var(--font-sans);font-size:2rem;font-weight:600;letter-spacing:-0.02em;">${p.label}</span>
        <span class="text-b-muted group-hover:text-b-white transition-colors">${ARROW_SVG}</span>
      </a>`
  }).join('')

  return `
    <section id="brand-strip" class="grid grid-cols-1 md:grid-cols-2 border-b border-b-border">

      <div class="reveal p-10 md:p-16 border-r border-b-border flex flex-col justify-between gap-10" style="min-height:24rem;">
        <div>
          <img src="/src/assets/logos/befaco-store-logo.png" alt="Befaco Shop" style="height:5rem;object-fit:contain;object-position:left;margin-bottom:0.5rem;" />
          <p class="type-label text-b-muted" style="margin-bottom:2rem;">shopbefaco.org</p>
          <p class="type-body" style="max-width:32ch;">Befaco started in 2012 with a simple idea — make electronic instruments that players can open up, understand, and change. Every module is designed in-house, documented for builders, and released open-source.</p>
        </div>
        <a href="/shop.html" class="btn-cta" style="align-self:flex-start;">{View Shop}</a>
      </div>

      <div class="flex flex-col">
        ${pillarRows}
      </div>

    </section>`
}
