function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function notANumberOrIsEmpty(number) {
  return isNaN(number) || number == 0
}

export { IMC, notANumberOrIsEmpty }