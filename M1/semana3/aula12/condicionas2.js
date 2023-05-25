var saborDaPizza = prompt('Qual sabor vc deseja?')

var diaDaSemana = 'sexta'

if (saborDaPizza == 'marguerita' && (diaDaSemana == 'quinta' || diaDaSemana == 'sabado')) {
  console.log('[PROMO]: Pizza em dobro')
  console.log('Começando a fazer duas pizzas MArguerita')
} else if (saborDaPizza == 'marguerita' && diaDaSemana == 'quinta') {
  console.log('Preparando a pizza Marguerita')
  console.log('[PROMO]: Refrigerante Liberado')
} else if (saborDaPizza == 'marguerita' || saborDaPizza == 'quatro queijos') {
  console.log('Preparando a pizza' + saborDaPizza)
} else if (diaDaSemana == 'quinta' || diaDaSemana == 'sexta') {
  console.log('Frete Gratis')
} else {
  console.log('Desculpa, não sei fazer isso')
}
