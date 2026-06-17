export function renderVCMC({
  title   = 'THE BEFACO VCMC',
  body    = 'Befaco started in 2012 with a simple idea — make electronic instruments that players can open up, understand, and change. Every module is designed in-house, documented for builders, and released open-source.',
  imgSrc  = '/src/assets/modules/vcmc.png',
  ctaLabel = 'Discover VCMC',
  ctaHref  = '/modules.html',
} = {}) {
  return `
    <section id="vcmc" class="grid grid-cols-1 md:grid-cols-2 border-b border-b-border" style="min-height:50vh;background:#FFFFFF;">

      <div class="reveal flex flex-col justify-between p-10 md:p-16 border-r border-b-border">
        <div>
          <p class="type-label" style="color:#555;margin-bottom:2rem;">FEATURED SYSTEM</p>
          <h2 class="type-display-lg" style="color:#000;margin-bottom:1.5rem;">${title}</h2>
          <p class="type-body" style="max-width:36ch;color:#504949;">${body}</p>
        </div>
        <a href="${ctaHref}" class="btn-cta" style="align-self:flex-start;margin-top:2.5rem;color:#000;border-color:#000;">${ctaLabel}</a>
      </div>

      <div class="reveal relative flex items-center justify-center p-8 md:p-16" style="min-height:28rem;">
        <img src="${imgSrc}" alt="VCMC" style="width:min(480px,90%);object-fit:contain;" />
        <div class="compass absolute bottom-6 right-6" style="border-color:#000;color:#000;">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L9.5 6.5L14 8L9.5 9.5L8 14L6.5 9.5L2 8L6.5 6.5L8 2Z" stroke="currentColor" stroke-width="1" fill="none"/>
          </svg>
        </div>
      </div>

    </section>`
}
