import { renderModuleCard } from '../components/ModuleCard.js'

const ARROW_SVG = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/></svg>`
const CHEVRON   = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M2 3.5l3 3 3-3"/></svg>`

const FILTERS = [
  { key: 'all',        label: 'All' },
  { key: 'generator',  label: 'Generator' },
  { key: 'processor',  label: 'Processor' },
  { key: 'modulation', label: 'Modulation' },
  { key: 'interface',  label: 'Interface' },
  { key: 'utilities',  label: 'Utilities' },
  { key: 'si',         label: 'SI' },
]

const STATUS_FILTERS = [
  { key: 'all',        label: 'ALL' },
  { key: 'new',        label: 'NEW' },
  { key: 'popular',    label: 'POPULAR' },
  { key: 'hot',        label: 'HOT' },
  { key: 'legacy',     label: 'LEGACY' },
  { key: 'bestseller', label: 'BESTSELLER' },
]

export function borderClasses(index) {
  const col = index % 3
  const row = Math.floor(index / 3)
  let cls = ''
  if (col < 2) cls += 'border-r '
  if (row > 0) cls += 'border-t '
  return cls.trim()
}

export function renderModuleGrid(modules) {
  const tabs = FILTERS.map((f, i) => {
    const sep = i > 0 ? '<span class="select-none" style="color:#666;">|</span>' : ''
    return `${sep}<button class="filter-tab${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`
  }).join('')

  const dropdownItems = STATUS_FILTERS.map(f =>
    `<button class="status-option${f.key === 'all' ? ' active' : ''}" data-status="${f.key}">${f.label}</button>`
  ).join('')

  const cards = modules.map((m, i) => renderModuleCard(m, borderClasses(i))).join('')

  return `
    <section id="modules" class="border-b border-b-border">

      <div class="filter-bar border-b border-b-border" style="scrollbar-width:none;">
        <div class="filter-tabs">
          ${tabs}
        </div>
        <div class="filter-dropdown-wrap">
          <button class="filter-dropdown-btn" id="filter-dropdown-btn" aria-expanded="false">
            <span id="filter-dropdown-label">FILTER</span>
            ${CHEVRON}
          </button>
          <div class="filter-dropdown-panel" id="filter-dropdown-panel">
            ${dropdownItems}
          </div>
        </div>
      </div>

      <div id="modules-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        ${cards}
      </div>

      <div id="view-all-section" class="flex items-center justify-center gap-4 px-8 py-5 border-t border-b-border">
        <a id="view-all-btn" href="/modules.html" class="btn-cta" style="font-size: 18pt; display: inline-flex; align-items: center; gap: 0.5rem;">
          <span class="btn-text">VIEW ALL MODULES</span>
          ${ARROW_SVG}
        </a>
      </div>

    </section>`
}
