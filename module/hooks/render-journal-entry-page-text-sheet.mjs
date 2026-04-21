export default function (application, html, data) {
  if ((application.document.parent.getFlag('brp', 'css-adventure-entry') ?? false)) {
    if (!html.classList.contains('css-adventure-entry')) {
      html.classList.add('css-adventure-entry')
    }
    const toggles = html.querySelectorAll('section.tmi-toggleable p.toggle')
    for (const toggle of toggles) {
      toggle.onclick = (event) => {
        const el = event.currentTarget
        const section = el.closest('section.tmi-toggleable')?.querySelector('div.toggle')
        if (!section) return
        if (section.style.display !== 'none') {
          el.textContent = 'Reveal'
          section.style.display = 'none'
        } else {
          el.textContent = 'Hide'
          section.style.display = ''
        }
      }
    }
  }
}
