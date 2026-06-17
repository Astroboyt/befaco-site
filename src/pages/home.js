import { NAV_HTML, FOOTER_HTML } from '../components/layout.js'
import { renderHero } from '../sections/Hero.js'
import { renderModuleGrid } from '../sections/ModuleGrid.js'
import { renderBrandStrip } from '../sections/BrandStrip.js'
import { renderVCMC } from '../sections/VCMC.js'
import { renderCommunity } from '../sections/Community.js'
import { modules, pillars } from '../data/modules.js'
import { initNav, initCrosshair, initHero, initScrollReveal, initFilterTabs, initPageTransitions } from '../main.js'
import gsap from 'gsap'

// ── Inject layout shell
document.getElementById('layout-root').innerHTML = NAV_HTML
document.getElementById('footer-root').innerHTML = FOOTER_HTML

// ── Render page sections
document.getElementById('page-root').innerHTML = [
  renderHero(),
  renderModuleGrid(modules.slice(0, 9)),
  renderBrandStrip(pillars),
  renderVCMC(),
  renderCommunity(),
].join('')

// ── Boot interactions
initNav()
initCrosshair()
initHero()
initScrollReveal()
initFilterTabs()
initPageTransitions()

// ── Hero bg text — fit to screen width
const heroBgText = document.getElementById('hero-bg-text')
if (heroBgText) {
  const fitBgText = () => {
    heroBgText.style.fontSize = '100px'
    const ratio = window.innerWidth / heroBgText.offsetWidth
    heroBgText.style.fontSize = (100 * ratio) + 'px'
  }
  fitBgText()
  window.addEventListener('resize', fitBgText)
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]!*#$%'

function scramble(el, target, duration = 500) {
  clearInterval(el._scrambleTimer)
  const totalFrames = Math.round(duration / 30)
  let frame = 0
  el._scrambleTimer = setInterval(() => {
    const progress = frame / totalFrames
    el.textContent = target
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '
        if (i < Math.floor(progress * target.length)) return char
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      })
      .join('')
    frame++
    if (frame > totalFrames) {
      clearInterval(el._scrambleTimer)
      el.textContent = target
    }
  }, 30)
}

// ── Hero explore button — scramble text on hover
const exploreBtn = document.getElementById('hero-explore')
if (exploreBtn) {
  const ORIGINAL = '{EXPLORE}'

  exploreBtn.addEventListener('mouseenter', () => {
    gsap.to(exploreBtn, { color: '#A11616', duration: 0.2, ease: 'power2.out' })
    scramble(exploreBtn, ORIGINAL, 500)
  })
  exploreBtn.addEventListener('mouseleave', () => {
    gsap.to(exploreBtn, { color: '#F0F0F0', duration: 0.3, ease: 'power2.out' })
    scramble(exploreBtn, ORIGINAL, 300)
  })
}

// ── Scramble all other CTA buttons on hover
document.querySelectorAll('.btn-cta').forEach(btn => {
  if (btn.id === 'hero-explore') return
  const textEl = btn.querySelector('.btn-text') || btn
  const original = textEl.textContent
  const isViewAll = btn.id === 'view-all-btn'
  
  btn.addEventListener('mouseenter', () => {
    if (!isViewAll) {
      gsap.to(btn, { color: '#A11616', duration: 0.2, ease: 'power2.out' })
    }
    scramble(textEl, original, 500)
  })
  btn.addEventListener('mouseleave', () => {
    if (!isViewAll) {
      gsap.to(btn, { color: '#F0F0F0', duration: 0.3, ease: 'power2.out' })
    }
    scramble(textEl, original, 300)
  })
})

// ── View all modules section background transition
const viewAllBtn = document.getElementById('view-all-btn')
const viewAllSection = document.getElementById('view-all-section')
if (viewAllBtn && viewAllSection) {
  viewAllBtn.addEventListener('mouseenter', () => {
    gsap.to(viewAllSection, { backgroundColor: '#A11616', duration: 0.3, ease: 'power2.out' })
  })
  viewAllBtn.addEventListener('mouseleave', () => {
    gsap.to(viewAllSection, { backgroundColor: 'transparent', duration: 0.4, ease: 'power2.out' })
  })
}
