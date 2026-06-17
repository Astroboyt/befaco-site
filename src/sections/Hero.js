const ARROW_SVG = `<svg width="16" height="16" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5"/></svg>`

export function renderHero({
  name    = 'ONEIROI',
  tagline = 'A complete synth voice in a single module. Experimental, self-contained. Built for textures, drones, and evolving soundscapes.',
  imgSrc  = '/src/assets/modules/oneiroi-hero.png',
} = {}) {
  return `
    <section id="hero" class="relative overflow-hidden border-b border-b-border" style="min-height:100vh;">

      <!-- Giant gradient text — behind everything -->
      <div class="absolute inset-0 overflow-hidden select-none pointer-events-none">
        <span id="hero-bg-text" style="
          position: absolute;
          left: 0;
          top: 3.5rem;
          font-family: var(--font-sans);
          font-size: 100px;
          font-weight: 600;
          white-space: nowrap;
          letter-spacing: -0.06em;
          line-height: 1;
          background: linear-gradient(to bottom, #423b3b 0%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        ">${name}</span>
      </div>

      <!-- Module image -->
      <div class="absolute inset-0 flex items-center justify-center" style="margin-top: var(--nav-h); padding-bottom: 10rem;">
        <img
          src="${imgSrc}"
          alt="${name}"
          style="
            width: 1206px;
            height: 716px;
            object-fit: contain;
            mix-blend-mode: screen;
            pointer-events: none;
            user-select: none;
          "
        />
      </div>

      <!-- Bottom info row: name | tagline | {EXPLORE} -->
      <div class="absolute left-0 right-0" style="bottom: calc(9rem - 58px); padding: 0 3rem 0 clamp(3rem, 25vw, 28rem);">
        <div style="display:flex; align-items:center; gap: 3.625rem;">

          <p style="
            font-family: var(--font-sans);
            font-size: 3rem;
            font-weight: 400;
            color: #fff;
            letter-spacing: -0.02em;
            line-height: 1;
            white-space: nowrap;
            flex-shrink: 0;
          ">${name}</p>

          <p style="
            font-family: var(--font-sans);
            font-size: 1.125rem;
            line-height: 1.55;
            color: #f5f5f5;
            max-width: 26ch;
            flex-shrink: 0;
            text-align: center;
          ">${tagline}</p>

          <a id="hero-explore" href="/modules.html" style="
            font-family: var(--font-mono);
            font-size: 2rem;
            color: var(--white);
            text-decoration: none;
            line-height: 1;
            white-space: nowrap;
            flex-shrink: 0;
            display: inline-block;
          ">{EXPLORE}</a>

        </div>
      </div>

      <!-- Write to Us — absolute bottom-right corner -->
      <a href="mailto:hello@befaco.org" style="
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        font-family: var(--font-sans);
        font-size: 1.25rem;
        color: #9d9393;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.4rem;
      ">Write to Us ${ARROW_SVG}</a>

    </section>`
}
