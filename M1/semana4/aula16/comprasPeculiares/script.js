/*
 * Receba a quantidade de elementos que deve ser inserida na lista
 * Utilize um array para armazenar os elementos da lista
 * Enquanto a quantidade de elementos na lista não for igual ao fornecido pelo usuario
 * pergunte qual é o proximo elemento
 * valide a entrada
 * Se o elemento fornecido tenha um numero impar de caracteres, adicione a lista
 * Caso contrario alerte o usuario de que o elemento é invalido e solicite um novo
 */

function mostrarItensNaTela(lista) {
  var cont = 0
  document.write('<ul>')
  while (cont < lista.length) {
    document.write(`<li>${lista[cont]}</li>`)
    cont++
  }
  document.write('</ul>')
}

function validacao(item, lista) {
  if (item.length % 2 !== 0) {
    lista.push(item)
    alert(`${item} foi adicionado a lista`)
  } else {
    alert('Elemento invalido')
  }
}

function criarLista() {
  var qtdAlimentos = parseInt(
    prompt('Qual é a quantidade de elementos que vc deseja adicionar a lista')
  )
  var lista = []

  while (lista.length < qtdAlimentos) {
    var item = prompt('Qual item vc deseja adicionar na lista?')
    validacao(item, lista)
  }

  mostrarItensNaTela(lista)
}

criarLista()
