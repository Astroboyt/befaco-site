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

export function renderModuleCatalog(modules) {
  const tabs = FILTERS.map((f, i) => {
    const sep = i > 0 ? '<span class="select-none" style="color:#666;">|</span>' : ''
    return `${sep}<button class="filter-tab${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`
  }).join('')

  const statusTabs = STATUS_FILTERS.map((f, i) =>
    `<button class="status-tab${i === 0 ? ' active' : ''}" data-status="${f.key}">${f.label}</button>`
  ).join('')

  const cards = modules.map((m, i) => renderModuleCard(m, borderClasses(i))).join('')

  return `
    <section id="modules" class="border-b border-b-border" style="padding-top:var(--nav-h);">

      <div class="filter-bar flex items-center justify-center gap-6 md:gap-8 px-6 md:px-8 py-4 border-b border-b-border overflow-x-auto" style="scrollbar-width:none;">
        ${tabs}
      </div>

      <div class="status-bar">
        ${statusTabs}
      </div>

      <div id="modules-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        ${cards}
      </div>

    </section>`
}
