// ── Zone data ─────────────────────────────────────────
export const ZONES = {
  'cv-inputs': {
    title: 'CV INPUTS',
    desc: 'Voltage control input per channel. Accepts ±5V. Each input directly modulates its channel\'s level in the morph matrix. Leave unpatched to use the manual fader position.',
  },
  'audio-in': {
    title: 'AUDIO INPUTS',
    desc: 'Stereo audio input per channel (IN A + IN B). Accepts audio-rate signals up to ±8V peak-to-peak. Normalled to mono when only one side is patched.',
  },
  'level-knobs': {
    title: 'LEVEL KNOBS × 4',
    desc: 'Sets the amplitude of each channel in the morph matrix. Fully clockwise = unity gain. Fully counter-clockwise = silence. Works in tandem with CV inputs and the A→B crossfade.',
  },
  'toggles': {
    title: 'ROUTE SWITCHES',
    desc: 'Assigns each channel to signal path A or path B. Hard-switching mid-morph creates rhythmic cuts. Combine with Fader Lag to soften the transition.',
  },
  'fader-lag': {
    title: 'FADER LAG',
    desc: 'Slew limiter on crossfade movement. At minimum: transitions are instantaneous. At maximum: even fast CV steps morph gradually — ideal for smooth live performance fades.',
  },
  'audio-out': {
    title: 'AUDIO OUTPUT',
    desc: 'Final mixed stereo output after crossfade processing. AUDIO jack carries the full mix; B jack carries the B-bus only, useful for parallel FX chains.',
  },
  'morph': {
    title: 'A → B MORPH',
    desc: 'Master crossfade position across all four channels simultaneously. The dot shows current blend between signal paths A and B. Fully left = A only, fully right = B only.',
  },
}

// ── SVG primitives ────────────────────────────────────

function jack(cx, cy, r = 4.5) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" class="dj-jack"/><circle cx="${cx}" cy="${cy}" r="${r * 0.38}" class="dj-hole"/>`
}

function knob(cx, cy, r = 9) {
  const a = (-135 * Math.PI) / 180
  const tx = +(cx + r * 0.55 * Math.cos(a)).toFixed(2)
  const ty = +(cy + r * 0.55 * Math.sin(a)).toFixed(2)
  return `<circle cx="${cx}" cy="${cy}" r="${r}" class="dj-knob"/><circle cx="${cx}" cy="${cy}" r="${r * 0.3}" class="dj-knob-inner"/><line x1="${cx}" y1="${cy}" x2="${tx}" y2="${ty}" class="dj-tick"/>`
}

function toggle(cx, cy) {
  return `<rect x="${cx - 3}" y="${cy - 7.5}" width="6" height="15" rx="3" class="dj-toggle"/><circle cx="${cx}" cy="${cy - 3}" r="2.5" class="dj-thumb"/>`
}

function led(cx, cy) {
  return `<circle cx="${cx}" cy="${cy}" r="1.8" class="dj-led"/>`
}

function hr(y, minor = false) {
  return `<line x1="0" y1="${y}" x2="80" y2="${y}" class="${minor ? 'dj-rule-m' : 'dj-rule'}"/>`
}

function hit(x, y, w, h) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="dj-hit"/>`
}

// ── Render ────────────────────────────────────────────

function buildSVG() {
  return `<svg class="module-diagram" viewBox="0 0 80 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

  <rect x=".5" y=".5" width="79" height="259" class="dj-panel"/>

  <!-- Header -->
  <polygon points="7,5 13,10 7,15" class="dj-chevron"/>
  <polygon points="73,5 67,10 73,15" class="dj-chevron"/>
  <text x="40" y="12" class="dj-title">MORPHADER</text>
  ${hr(18)}

  <!-- CV INPUTS ──────────────────────── -->
  <g class="diag-zone" data-zone="cv-inputs">
    ${hit(0, 18, 80, 32)}
    ${jack(12, 33, 4)} ${jack(29, 33, 4)} ${jack(51, 33, 4)} ${jack(68, 33, 4)}
    <text x="12" y="44" class="dj-lbl">CV 1</text>
    <text x="29" y="44" class="dj-lbl">CV 2</text>
    <text x="51" y="44" class="dj-lbl">CV 3</text>
    <text x="68" y="44" class="dj-lbl">CV 4</text>
  </g>
  ${hr(50)}

  <!-- AUDIO IN per channel ───────────── -->
  <g class="diag-zone" data-zone="audio-in">
    ${hit(0, 50, 22, 120)}
    ${jack(11, 65)} ${jack(11, 95)} ${jack(11, 125)} ${jack(11, 155)}
    <text x="11" y="76"  class="dj-lbl">IN</text>
    <text x="11" y="106" class="dj-lbl">IN</text>
    <text x="11" y="136" class="dj-lbl">IN</text>
    <text x="11" y="166" class="dj-lbl">IN</text>
  </g>

  <!-- LEVEL KNOBS ────────────────────── -->
  <g class="diag-zone" data-zone="level-knobs">
    ${hit(22, 50, 28, 120)}
    <text x="27" y="59" class="dj-ch">1</text> ${knob(38, 68)}
    <text x="27" y="89" class="dj-ch">2</text> ${knob(38, 98)}
    <text x="27" y="119" class="dj-ch">3</text> ${knob(38, 128)}
    <text x="27" y="149" class="dj-ch">4</text> ${knob(38, 158)}
  </g>

  <!-- LED indicators (decorative) -->
  ${led(54, 68)} ${led(54, 98)} ${led(54, 128)} ${led(54, 158)}

  <!-- ROUTE SWITCHES ─────────────────── -->
  <g class="diag-zone" data-zone="toggles">
    ${hit(58, 50, 22, 96)}
    ${toggle(69, 68)} ${toggle(69, 98)} ${toggle(69, 128)}
    ${knob(69, 158, 7)}
  </g>

  <!-- channel dividers -->
  ${hr(80, true)} ${hr(110, true)} ${hr(140, true)}
  ${hr(172)}

  <!-- FADER LAG ──────────────────────── -->
  <g class="diag-zone" data-zone="fader-lag">
    ${hit(0, 172, 80, 44)}
    <text x="40" y="184" class="dj-lbl">FADER LAG</text>
    ${knob(40, 202, 11)}
  </g>
  ${hr(216)}

  <!-- AUDIO OUTPUT (right jacks) ──────── -->
  <g class="diag-zone" data-zone="audio-out">
    ${hit(52, 216, 28, 34)}
    ${jack(62, 232, 7)} ${jack(74, 232, 7)}
    <text x="62" y="245" class="dj-lbl">AUD</text>
    <text x="74" y="245" class="dj-lbl">B</text>
  </g>

  <!-- AUDIO IN (bottom large jacks) ───── -->
  <g class="diag-zone" data-zone="audio-in">
    ${hit(0, 216, 52, 34)}
    ${jack(8, 232, 7)} ${jack(22, 232, 7)} ${jack(36, 232, 7)} ${jack(50, 232, 7)}
    <text x="8"  y="245" class="dj-lbl">IN A</text>
    <text x="22" y="245" class="dj-lbl">IN B</text>
    <text x="36" y="245" class="dj-lbl">2</text>
    <text x="50" y="245" class="dj-lbl">3</text>
  </g>
  ${hr(250)}

  <!-- A→B MORPH ──────────────────────── -->
  <g class="diag-zone" data-zone="morph">
    ${hit(0, 250, 80, 10)}
    <text x="5"  y="258" class="dj-lbl">A</text>
    <line x1="10" y1="255" x2="70" y2="255" class="dj-xfade"/>
    <circle cx="26" cy="255" r="2.5" class="dj-xfade-pos"/>
    <text x="75" y="258" class="dj-lbl">B</text>
  </g>

</svg>`
}

export function renderDiagramPanel() {
  return `
<div class="diag-panel">
  ${buildSVG()}
  <div class="diag-overlay" id="diag-overlay">
    <p class="diag-overlay-title"></p>
    <p class="diag-overlay-desc"></p>
  </div>
  <p class="diag-hint-static">HOVER TO EXPLORE</p>
</div>`
}

// ── Interaction ───────────────────────────────────────

export function initModuleDiagram() {
  const overlay = document.getElementById('diag-overlay')
  if (!overlay) return
  const titleEl = overlay.querySelector('.diag-overlay-title')
  const descEl  = overlay.querySelector('.diag-overlay-desc')

  document.querySelectorAll('.diag-zone[data-zone]').forEach(zone => {
    zone.addEventListener('mouseenter', () => {
      const data = ZONES[zone.dataset.zone]
      if (!data) return
      titleEl.textContent = data.title
      descEl.textContent  = data.desc
      overlay.classList.add('is-active')
    })
    zone.addEventListener('mouseleave', () => {
      overlay.classList.remove('is-active')
    })
  })
}
