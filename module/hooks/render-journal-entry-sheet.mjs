import { BRPIDEditor } from '../brpid/brpid-editor.mjs'

export default function (application, element, context, options) {

  BRPIDEditor.addBRPIDSheetHeaderButton(application, element)

  if ((application.document.getFlag('brp', 'css-adventure-entry') ?? false)) {
    if (!element.classList.contains('css-adventure-entry')) {
      element.classList.add('css-adventure-entry')
    }
    //Force to use themed-light
    if (!element.classList.contains('theme-light')) {
      element.classList.add('themed','theme-light')
    }


    if ((application.document.getFlag('brp', 'fixed-adventure-heading') ?? false) && !element.classList.contains('fixed-adventure-heading')) {
      element.classList.add('fixed-adventure-heading')
      //Force to use themed-light
      if (!element.classList.contains('theme-light')) {
        element.classList.add('themed','theme-light')
      }      

      if (typeof application.document.pages?.contents?.[0]?.id === 'string') {
        const subheading = application.document.pages.get(application.document.pages.contents[0].id)?.flags?.brp?.['fixed-adventure-subheading'] ?? ''
        if (subheading !== '') {
          element.classList.add('fixed-adventure-subheading')
          const short = subheading.trim().length === 0
          const div = document.createElement('div')
          div.classList.add('adventure-heading-section', 'flexrow-pen')
          div.innerHTML = '<div class="bookmark' + (short ? ' short' : '') + '"><img src="systems/brp/assets' + (short ? 'bookmarks.webp' : 'bookmark.webp') + '"></div><div class="adventure-heading"><div class="heading">' + application.title + '</div>' + (short ? '' : '<div class="subheading">' + subheading + '</div>') + '</div>'
          element.querySelector('article.journal-entry-page')?.before(div)
        }
      }
    }
  }

}
