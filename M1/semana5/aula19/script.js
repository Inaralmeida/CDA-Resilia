//Entrada = Item buscado
//saida = Posição do pote do item

//array = criar gavetas e potes
//function
//if/else
//for - para passar em todas as gavetas

//1- criar a gaveta com os potes que tem os itens *
//2- Perguntar qual é o item a ser buscado *
//3- criar uma função pra encontar o item *
//4- olhar os potes da gaveta*
//5- verificar se o item existe no pote
//  6 - se sim: retornar a posição do pote
//  7 - se não: retornar que o item não existe

var gaveta = [
  ['Presilha', 'Elastico', 'Escova'], //0
  ['Lapis', 'borracha'], //1
]

var item = prompt('Qual o item que você procura?')

function encontrarItem() {
  for (var i = 0; i < gaveta.length; i++) {
    var pote = gaveta[i]
    var temOitem = false
    if (pote.indexOf(item) !== -1) {
      alert(`Item encontrado no pote ${i}`)
      temOitem = true
      break
    }
  }
  //temOitem == false
  if (!temOitem) {
    alert('Item não encontrado')
  }
}

encontrarItem(item)
