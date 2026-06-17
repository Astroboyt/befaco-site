import { NAV_HTML, FOOTER_HTML } from '../components/layout.js'
import { renderModuleCatalog } from '../sections/ModuleCatalog.js'
import { modules } from '../data/modules.js'
import { initNav, initHero, initScrollReveal, initFilterTabs, initPageTransitions } from '../main.js'
import gsap from 'gsap'

document.getElementById('layout-root').innerHTML = NAV_HTML
document.getElementById('footer-root').innerHTML = FOOTER_HTML

document.getElementById('page-root').innerHTML = renderModuleCatalog(modules)

initNav()
initHero()
initScrollReveal()
initFilterTabs()
initPageTransitions()

// Scramble hover on all CTA buttons
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]!*#$%'

function scramble(el, target, duration = 500) {
  clearInterval(el._scrambleTimer)
  const totalFrames = Math.round(duration / 30)
  let frame = 0
  el._scrambleTimer = setInterval(() => {
    const progress = frame / totalFrames
    el.textContent = target.split('').map((char, i) => {
      if (char === ' ') return ' '
      if (i < Math.floor(progress * target.length)) return char
      return CHARS[Math.floor(Math.random() * CHARS.length)]
    }).join('')
    frame++
    if (frame > totalFrames) { clearInterval(el._scrambleTimer); el.textContent = target }
  }, 30)
}

document.querySelectorAll('.btn-cta').forEach(btn => {
  const textEl = btn.querySelector('.btn-text') || btn
  const original = textEl.textContent
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, { color: '#A11616', duration: 0.2, ease: 'power2.out' })
    scramble(textEl, original, 500)
  })
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { color: '#F0F0F0', duration: 0.3, ease: 'power2.out' })
    scramble(textEl, original, 300)
  })
})
