import { NAV_HTML, FOOTER_HTML } from '../components/layout.js'
import { renderProductHero } from '../sections/ProductHero.js'
import { renderProductResources } from '../sections/ProductResources.js'
import { renderModuleCard } from '../components/ModuleCard.js'
import { modules } from '../data/modules.js'
import { initNav, initHero, initScrollReveal, initPageTransitions } from '../main.js'

const morphader = {
  name: 'MORPHADER',
  imgSrc: '/src/assets/modules/morphader.png',
  lifestyleImgSrc: null,
  descFull: `4-channel Voltage Controlled Crossfader with independent CV inputs per channel. Morph between four signal sources with voltage-controlled precision. Each channel includes:<br>
– Level control<br>
– CV modulation input<br>
– Signal indicator LED.<br>
— — — — — — —<br>
Dimensions 8HP – 40×128.5mm`,
}

const related = modules.filter(m => !m.id.startsWith('morphader')).slice(0, 3)
const relatedCards = related.map((m, i) => renderModuleCard(m, i < 2 ? 'border-r' : '')).join('')

document.getElementById('layout-root').innerHTML = NAV_HTML
document.getElementById('footer-root').innerHTML = FOOTER_HTML
document.getElementById('page-root').innerHTML = `
  ${renderProductHero(morphader)}
  ${renderProductResources()}
  <div class="product-related-head">RELATED MODULES</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-b border-b-border">${relatedCards}</div>
`

initNav()
initHero()
initScrollReveal()
initPageTransitions()

document.querySelectorAll('.accordion-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true'
    btn.setAttribute('aria-expanded', String(!isOpen))
    btn.nextElementSibling.classList.toggle('is-open', !isOpen)
  })
})
