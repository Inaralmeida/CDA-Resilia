function log(nameArray) {
  if (nameArray === 'convidados') {
    console.log(`>Lista de convidados: ${listaDeConvidados}`)
  } else {
    console.log(`>Lista de proibidos: ${listaDeProibidos}`)
  }
}
//Declarar Arrar

//Pode começar com valores
var listaDeConvidados = ['Esli', 'Tati', 'Ana', 'Emerson']
log('convidados')
//Pode começar vazio
var listaDeProibidos = []

//Push: adiciona itens ao final do array
listaDeConvidados.push('Malena')
listaDeConvidados.push('Priscila', 'Juliene')
log('convidados')

//Pop: remove o ultimo elemento e retorna o mesmo
listaDeProibidos = [listaDeConvidados.pop(), listaDeConvidados.pop()]

log('convidados')
log('proibidos')
//Acessando os elementos

console.log(listaDeConvidados[0])
console.log(listaDeConvidados[1])
console.log(listaDeConvidados[2])
console.log(listaDeConvidados[3])

//Array e While

var contador = 0

while (contador < listaDeConvidados.length) {
  console.log(
    `O carro do ovo ta na casa numero ${contador}, que mora ${listaDeConvidados[contador]}`
  )

  contador++
}
