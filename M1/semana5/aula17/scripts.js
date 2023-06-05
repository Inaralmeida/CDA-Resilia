//Array dentro de array

//sorteio especifico
var sorteio54454 = [12, 32, 45, 60, 42, 7]

//historico de sorteios

var sorteios = [
  [12, 32, 45, 60, 42, 7], //0
  // 0,  1,  2,  3,  4,  5,
  [25, 17, 13, 22, 06, 01], //1
  // 0,  1,  2,  3,  4,  5,
  [16, 18, 15, 38, 23, 29], //2
  // 0,  1,  2,  3,  4,  5,
]

// console.log(sorteios[1])
// console.log(sorteios[1][2])

//Deletar elemento especifico
var feira = ['goiaba', 'maçã', 'couve', 'cenoura']

// for (var i = 0; i < feira.length; i++) {
//   console.log(feira[i])
// }

var gastos = [
  //predio 0
  [
    32, //andar0
    17, //andar1
    28, //andar2
    28, //andar3
    55,
  ], //andar4
  [25, 17, 13], //semana1
]

// for (var i = 0; i < gastos.length; i++) {
//   console.log(`semana ${i}, ${gastos[i]}`)
//   var predio = gastos[i]
//   var totalSemana = 0
//   for(var andar = 0; andar< predio.length; andar++) {
//     totalSemana += predio[andar]
//   }
// }

function somaArr(lista) {
  var tamanhoDaLista = lista.length
  var total = 0

  for (var index = 0; index < tamanhoDaLista; index++) {
    total = total + lista[index]
  }

  console.log('Total', total)
}


var mes = [
  [500, 600, 250, 800, 1200],//semana1
  [250, 600, 250, 800, 500],//semana2
  [250, 300, 250, 100, 120] ,//semana3
  [5, 15, 50, 30, 25]//semana4
]

for(var semana = 0; semana < mes.length; semana++) {
  somaArr(mes[semana])
}