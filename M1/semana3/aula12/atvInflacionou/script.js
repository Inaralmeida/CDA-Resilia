//1 - Perguntar o nome do alimento
var alimento = prompt('Digite o nome do alimento')

//2 - Verificar se o alimento inserido existe na feira (Tomate, laranja, abacaxi e limão)
if (alimento == 'tomate' || alimento == 'laranja' || alimento == 'abacaxi' || alimento == 'limão') {
  //3- se o alimento existir, perguntar o preço da semana anterior
  var valorPassado = prompt('Qual o valor do alimento da semana passada?')

  //4- perguntar tambem o valor do alimento na semana atual
  var valorAtual = prompt('Qual o valor do alimento da semana atual?')

  //5 - É necessario transformar as variaveis valorPassado e valorAtual em numero
  var numberValorAtual = Number(valorAtual)
  var numberValorPassado = Number(valorPassado)

  //6 - verificar o valor da diferença

  //7 - se o valor passado for igual ao preco atual - então o preço não mudou
  if (numberValorPassado == numberValorAtual) {
    alert('Não houve alteração no preço do alimento ' + alimento)
  }

  // 8 - se o valor passado for menor que o preco atual - então o preço aumentou
  else if (numberValorPassado < numberValorAtual) {
    alert('O alimento ' + alimento + ' aumentou em $' + (numberValorAtual - numberValorPassado))
  }

  // 9 - se o valor passado não for menor nem igual ao valor atual -  então o preço caius
  else {
    alert('O alimento ' + alimento + ' diminuiu em $' + (numberValorPassado - numberValorAtual))
  }
} else {
  //3 - Se o alimento não existir - então o alimento não existe na feira
  alert(alimento + ' indisponivel na feira')
}
