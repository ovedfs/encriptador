const strInput = document.getElementById('str-input')
const btnEncriptar = document.getElementById('btn-encriptar')
const btnDesencriptar = document.getElementById('btn-desencriptar')
const display = document.getElementById('display')

const codes = [
  ['a', '&'],
  ['e', '#'],
  ['i', '$'],
  ['o', '¿'],
  ['u', '('],
]

const encriptar = str => {
  codes.forEach(code => {
    if(str.includes(code[0])) str = str.replaceAll(code[0], code[1])
  })

  return str
}

const desencriptar = str => {
  codes.forEach(code => {
    if(str.includes(code[1])) str = str.replaceAll(code[1], code[0])
  })

  return str
}

btnEncriptar.addEventListener('click', () => {

  if(strInput.value == '') {
    alert('Debes ingresar un texto para encriptar')
    strInput.focus()
    return
  }

  let str = strInput.value
  let strEncripted = encriptar(str)

  display.innerHTML = `
    <p>Texto encriptado:</p>
    <h2>${strEncripted}</h2>
  `
})

btnDesencriptar.addEventListener('click', () => {

  if(strInput.value == '') {
    alert('Debes ingresar un texto encriptado')
    strInput.focus()
    return
  }

  let strEncripted = strInput.value
  let str = desencriptar(strEncripted)

  display.innerHTML = `
    <p>Texto desencriptado:</p>
    <h2>${str}</h2>
  `
})
