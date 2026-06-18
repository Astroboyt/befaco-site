import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NAV_HTML, FOOTER_HTML, setActiveNav } from './components/layout.js'

gsap.registerPlugin(ScrollTrigger)

// ── Layout injection (used by stub pages)
export function initLayout(activePage = '') {
  const layoutRoot = document.getElementById('layout-root')
  if (layoutRoot) layoutRoot.innerHTML = NAV_HTML

  const footerRoot = document.getElementById('footer-root')
  if (footerRoot) footerRoot.innerHTML = FOOTER_HTML

  if (activePage) setActiveNav(activePage)

  initNav()
  initCrosshair()
  initScrollReveal()
}

// ── Nav scroll behaviour
export function initNav() {
  const nav = document.getElementById('site-nav')
  if (!nav) return

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20)
  }, { passive: true })

  gsap.from(nav, { y: -8, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 })

  // Generic toggle helper
  function initToggle(btnId, panelId) {
    const btn   = document.getElementById(btnId)
    const panel = document.getElementById(panelId)
    if (!btn || !panel) return
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const open = btn.getAttribute('aria-expanded') === 'true'
      // Close all other panels first
      document.querySelectorAll('[data-nav-panel]').forEach(p => p.classList.remove('is-open'))
      document.querySelectorAll('[data-nav-toggle]').forEach(b => b.setAttribute('aria-expanded', 'false'))
      if (!open) {
        btn.setAttribute('aria-expanded', 'true')
        panel.classList.add('is-open')
      }
    })
    btn.setAttribute('data-nav-toggle', '')
    panel.setAttribute('data-nav-panel', '')
    panel.addEventListener('click', e => e.stopPropagation())
  }

  initToggle('nav-shop-btn', 'nav-shop-panel')
  initToggle('nav-resources-btn', 'nav-resources-panel')

  document.addEventListener('click', () => {
    document.querySelectorAll('[data-nav-panel]').forEach(p => p.classList.remove('is-open'))
    document.querySelectorAll('[data-nav-toggle]').forEach(b => b.setAttribute('aria-expanded', 'false'))
  })

  // Search bar
  const searchBtn   = document.getElementById('nav-search-btn')
  const searchBar   = document.getElementById('nav-search-bar')
  const searchInput = document.getElementById('nav-search-input')
  const searchClose = document.getElementById('nav-search-close')
  if (searchBtn && searchBar) {
    searchBtn.addEventListener('click', e => {
      e.stopPropagation()
      searchBar.classList.toggle('is-open')
      if (searchBar.classList.contains('is-open')) searchInput?.focus()
    })
    searchClose?.addEventListener('click', () => searchBar.classList.remove('is-open'))
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') searchBar.classList.remove('is-open')
    })
  }
}

// ── Crosshair cursor
export function initCrosshair() {
  const c = document.getElementById('crosshair')
  if (!c) return

  let mx = window.innerWidth / 2, my = window.innerHeight / 2
  let cx = mx, cy = my
  const LERP = 0.14

  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY })

  function tick() {
    cx += (mx - cx) * LERP
    cy += (my - cy) * LERP
    c.style.left = cx + 'px'
    c.style.top  = cy + 'px'
    requestAnimationFrame(tick)
  }
  tick()

  document.addEventListener('mouseleave', () => gsap.to(c, { opacity: 0, duration: 0.2 }))
  document.addEventListener('mouseenter', () => gsap.to(c, { opacity: 1, duration: 0.2 }))

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(c, { scale: 2, duration: 0.2 }))
    el.addEventListener('mouseleave', () => gsap.to(c, { scale: 1, duration: 0.2 }))
  })
}

// ── Scroll reveal
export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal')
  if (!reveals.length) return

  gsap.set(reveals, { opacity: 0, y: 28 })

  reveals.forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          delay: (i % 3) * 0.08,
        })
      },
      once: true,
    })
  })
}

// ── Hero animations
export function initHero() {
  const bgText  = document.querySelector('.hero-bg-text span')
  const heroImg = document.querySelector('.hero-img')
  const heroInfo = document.querySelector('.hero-info')
  if (!bgText) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.from(bgText,   { opacity: 0, scale: 1.06, duration: 1.4, delay: 0.1 })
    .from(heroImg,  { opacity: 0, y: 24, duration: 0.9 }, '-=1.0')
    .from(heroInfo, { opacity: 0, y: 16, duration: 0.7 }, '-=0.6')

  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: self => {
      if (bgText)  gsap.set(bgText,  { y: self.progress * 80 })
      if (heroImg) gsap.set(heroImg, { y: self.progress * 40 })
    },
  })
}

// ── Filter tabs
export function initFilterTabs() {
  const tabs  = document.querySelectorAll('.filter-tab')
  const cards = document.querySelectorAll('#modules-grid article')
  if (!tabs.length) return

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'))
      tab.classList.add('active')

      const filter = tab.dataset.filter
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter
        gsap.to(card, { opacity: match ? 1 : 0.2, scale: match ? 1 : 0.97, duration: 0.3, ease: 'power2.out' })
      })
    })
  })
}

// ── Page transitions
export function initPageTransitions() {
  const overlay = document.getElementById('page-overlay')
  if (!overlay) return

  gsap.set(overlay, { scaleY: 1, transformOrigin: 'top' })
  gsap.to(overlay, { scaleY: 0, duration: 0.7, ease: 'power3.inOut', delay: 0.05 })

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href')
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#')) return
    link.addEventListener('click', e => {
      e.preventDefault()
      gsap.to(overlay, {
        scaleY: 1,
        transformOrigin: 'bottom',
        duration: 0.45,
        ease: 'power3.inOut',
        onComplete: () => { window.location.href = href },
      })
    })
  })
}
