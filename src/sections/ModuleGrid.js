import { renderModuleCard } from '../components/ModuleCard.js'

const ARROW_SVG = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/></svg>`

const FILTERS = [
  { key: 'all',        label: 'All' },
  { key: 'generator',  label: 'Generator' },
  { key: 'processor',  label: 'Processor' },
  { key: 'modulation', label: 'Modulation' },
  { key: 'interface',  label: 'Interface' },
  { key: 'utilities',  label: 'Utilities' },
  { key: 'si',         label: 'SI' },
]

// 3-col grid: right border on cols 0 & 1, top border on rows 1+
function borderClasses(index) {
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

  const cards = modules.map((m, i) => renderModuleCard(m, borderClasses(i))).join('')

  return `
    <section id="modules" class="border-b border-b-border">

      <div class="filter-bar flex items-center justify-center gap-6 md:gap-8 px-6 md:px-8 py-4 border-b border-b-border overflow-x-auto" style="scrollbar-width:none;">
        ${tabs}
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
