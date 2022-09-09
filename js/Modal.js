export const Modal = {
  wrapper: document.querySelector('[data-modal="wrapper"]'),
  closeButton: document.querySelector('[data-modal="close-button"]'),
  imc: document.querySelector('[data-modal="imc"]'),
  open() {
    this.wrapper.classList.add('active')
  },
  close() {
    this.wrapper.classList.remove('active')
  }
}