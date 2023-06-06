function dizerOla() {
  document.write(`<h1>Salve</h1>`)
}

function validaEmail() {
  while (true) {
    entradaUser = prompt(`Escolha:
                  1 - para ônibus
                  2 - para metrô
                  `)
    if (entradaUser == 1 || entradaUser == 2) {
      alert('Boa escolha')
      break
    }
    alert('Opção invalida, tente novamente')
  }
}
