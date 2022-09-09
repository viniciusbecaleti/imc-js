export const ErrorAlert = {
  element: document.querySelector('[data-alert]'),
  show() {
    this.element.classList.remove('hide')
    this.element.classList.add('show')

    const time = setTimeout(() => {
      this.hide()
    }, 3000)
  },
  hide() {
    this.element.classList.remove('show')
    this.element.classList.add('hide')
  }
}