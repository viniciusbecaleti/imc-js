import { Modal } from './Modal.js'
import { ErrorAlert } from './ErrorAlert.js'
import { IMC, notANumberOrIsEmpty } from './utils.js'

const submitButton = document.querySelector('[data-form="button"]')
const inputWeight = document.querySelector('[data-form="weight"]')
const inputHeight = document.querySelector('[data-form="height"]')

submitButton.addEventListener('click', (event) => {
  event.preventDefault()

  const weight = +inputWeight.value
  const height = +inputHeight.value

  const showErrorAlert = notANumberOrIsEmpty(weight) || notANumberOrIsEmpty(height)

  if (showErrorAlert) {
    ErrorAlert.show()
    return
  }

  const imc = IMC(weight, height)

  Modal.imc.innerText = imc
  Modal.open()
})

Modal.closeButton.addEventListener('click', () => Modal.close())

window.addEventListener('keydown', event => {
  if (event.key == 'Escape') {
    if (Modal.wrapper.classList.contains('active')) {
      Modal.close()
    }
  }
})