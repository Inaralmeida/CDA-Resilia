function dirigirEBeber(idade) {
  if (idade >= 18) {
    return 'ja pode dirigir e beber'
  } else {
    return 'Não pode dirigir e nem beber'
  }
}

var resultadoUm = dirigirEBeber(12)
console.log(resultadoUm)

console.log(dirigirEBeber(21))

function previsaoDeRodagem() {
  var qtdLitro = prompt('Qts litros temo no tanque?')
  var kmPorLitro = prompt('Quantos km/l faz o seu carro?')
  var rodagem = qtdLitro * kmPorLitro

  return 'Vc tem ' + rodagem + 'km para achar um posto'
}

console.log(previsaoDeRodagem())
