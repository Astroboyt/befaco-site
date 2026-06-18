const ARROW_SVG = `<svg width="28" height="28" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.2"/></svg>`

export function renderModuleCard({ name, category, badge, description, ctaStyle, ctaLabel, ctaHref, tag, imgSrc }, borderClasses = '') {
  const img = imgSrc
    ? `<img src="${imgSrc}" alt="${name}" style="width:100%;height:100%;object-fit:contain;object-position:center;" />`
    : ''

  const badgePill = badge
    ? `<span class="module-badge">${badge}</span>`
    : ''

  const newBadge = tag === 'new'
    ? `<div class="module-new-badge">
        <img src="/src/assets/logos/star-new.svg" alt="" aria-hidden="true" />
        <span>NEW</span>
      </div>`
    : ''

  const cta = `<a href="${ctaHref}" class="btn-cta" style="align-self:flex-start;">${ctaLabel}</a>`

  return `
    <article class="module-card reveal ${borderClasses}" data-category="${category}" data-tag="${tag ?? ''}">
      <div class="module-card-img">
        ${img}
        ${badgePill}
        ${newBadge}
      </div>
      <div class="module-card-body">
        <h3 class="type-display-sm">${name}</h3>
        <p class="type-body">${description}</p>
        ${cta}
      </div>
    </article>`
}
