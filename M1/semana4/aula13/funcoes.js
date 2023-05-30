//soma
function somarDoisNumeros(numeroUm, numeroDois) {
  var resultado = numeroUm + numeroDois
  return resultado
}
var somaUm = somarDoisNumeros(5, 5)
var somaDois = somarDoisNumeros(8, 9)

console.log(somaUm + somaDois)
//subtração

//maiorQueMil
function maiorQueMil(numero) {
  if (numero >= 1000) {
    return numero + ' é maior que mil'
  } else {
    return numero + ' é menor que mil'
  }
}

console.log(maiorQueMil(586))
console.log(maiorQueMil(1001))

//bomDia
function bomDia() {
  return 'Bom dia'
}

console.log(bomDia())
//boaTarde
function boaTarde() {
  return 'to com fome'
}
console.log(boaTarde())
//saudação
function saudacao(nome, horas) {
  if (horas >= 12) {
    return nome + ' ' + boaTarde()
  } else {
    return nome + ' ' + bomDia()
  }
}

console.log(saudacao('Lucio', 11.1))
console.log(saudacao('Lucio', 12.2))
