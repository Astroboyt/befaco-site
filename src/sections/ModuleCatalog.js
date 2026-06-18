import { renderModuleCard } from '../components/ModuleCard.js'

const FILTERS = [
  { key: 'all',        label: 'All' },
  { key: 'generator',  label: 'Generator' },
  { key: 'processor',  label: 'Processor' },
  { key: 'modulation', label: 'Modulation' },
  { key: 'interface',  label: 'Interface' },
  { key: 'utilities',  label: 'Utilities' },
  { key: 'si',         label: 'SI' },
]

export const STATUS_FILTERS = [
  { key: 'all',        label: 'ALL' },
  { key: 'new',        label: 'NEW' },
  { key: 'popular',    label: 'POPULAR' },
  { key: 'hot',        label: 'HOT' },
  { key: 'legacy',     label: 'LEGACY' },
  { key: 'bestseller', label: 'BESTSELLER' },
]

const CHEVRON = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M2 3.5l3 3 3-3"/></svg>`

export function borderClasses(index) {
  const col = index % 3
  const row = Math.floor(index / 3)
  let cls = ''
  if (col < 2) cls += 'border-r '
  if (row > 0) cls += 'border-t '
  return cls.trim()
}

export function renderModuleCatalog(modules) {
  const tabs = FILTERS.map((f, i) => {
    const sep = i > 0 ? '<span class="select-none" style="color:#666;">|</span>' : ''
    return `${sep}<button class="filter-tab${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`
  }).join('')

  const dropdownItems = STATUS_FILTERS.map(f =>
    `<button class="status-option${f.key === 'all' ? ' active' : ''}" data-status="${f.key}">${f.label}</button>`
  ).join('')

  const cards = modules.map((m, i) => renderModuleCard(m, borderClasses(i))).join('')

  return `
    <section id="modules" class="border-b border-b-border" style="padding-top:var(--nav-h);">

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

    </section>`
}
