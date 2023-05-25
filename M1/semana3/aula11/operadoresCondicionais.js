// == : igualdade
console.log('2 == 5: ' + (2 == 5))

// >= : maior ou igual
console.log('maoir ou igual')
console.log('2 >= 5: ' + (2 >= 5))
console.log('5 >= 5: ' + (5 >= 5))
console.log('6 >= 5: ' + (6 >= 5))

// <= : menor ou igual
console.log('Menor ou igual')
console.log('2 <= 5: ' + (2 <= 5))
console.log('5 <= 5: ' + (5 <= 5))
console.log('6 <= 5: ' + (6 <= 5))

// > :maior que
console.log('Maior que')
console.log('2 > 5: ' + (2 > 5))
console.log('9 > 5: ' + (9 > 5))
console.log('5 > 5: ' + (5 > 5))

// < : menor que
console.log('Menor que')
console.log('2 < 5: ' + (2 < 5))
console.log('9 < 5: ' + (9 < 5))
console.log('5 < 5: ' + (5 < 5))

// === : extritamente igual (valor e tipo)
console.log('Exemplo igual')
console.log(50 == '50')

console.log('Exemplo extritamente')
console.log(50 === '50')

// != : diferente

console.log('Exemplo diferente')
console.log(50 != '50') //false

// !== : extritamente diferente (valor e tipo)

console.log('Exemplo extritamente diferente')
console.log(50 !== '50') //true

var facilitadorSoft = 'Esli'
var facilitadorTech = 'Inara'

var qtdDeAlunosDaTurma = 50
var qtdDeAlunosPresentes = 39

var numeroNumber = 50
var numeroString = '50'

//São 9h se tiver mais que 90% da turma presente, libero a pergunta do dia, se não, espero doi minutos e dou um esporro pelo atraso

if (qtdDeAlunosPresentes >= 45) {
  console.log('que a sorte esteja ao seu favor!')
} else {
  console.log('Espero 2 minutos')
  console.log('Esporro neles')
}
