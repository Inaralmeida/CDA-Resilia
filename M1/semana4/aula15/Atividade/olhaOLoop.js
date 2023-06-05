//função listaDecrescente que recebe um numero positivo
function listaDecrescente(numeroP) {
  var resposta = ''

  while (numeroP >= 0) {
    resposta = resposta + `<p>${numeroP}</p>`
    numeroP--
  }
  // document.write(resposta)
}

//função fizz que recebe um numero positivo
function fizz(numero) {
  var controle = 0
  var resposta = ''
  while (controle <= numero) {
    if (controle % 3 === 0) {
      resposta = resposta + '\nfizz'
    } else {
      resposta = resposta + `\n${controle}`
    }

    controle++
  }

  console.log(resposta)
}
