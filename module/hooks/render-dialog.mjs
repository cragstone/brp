export function listen() {
  Hooks.on('renderDialog', (dialog, html) => {
    const root = html instanceof HTMLElement ? html : html[0]
    if (!root) return
    const form = root.querySelector('form')
    if (!form || form.id !== 'document-create') return
    const entityCreateSelectTag = form.querySelector("[name='type']")
    if (!entityCreateSelectTag) return
    const entitySortedList = Array.from(entityCreateSelectTag.children)
    for (const entityOption of entitySortedList) {
      const key = entityOption.textContent
      if (game.i18n.has(`BRP.${key}`)) {
        entityOption.textContent = game.i18n.localize(`BRP.${key}`)
      }
    }
    entitySortedList.sort((first, second) =>
      first.innerText.localeCompare(second.innerText)
    )
    entityCreateSelectTag.innerHTML = ''
    for (const option of entitySortedList) {
      entityCreateSelectTag.appendChild(option)
    }
  })
}
