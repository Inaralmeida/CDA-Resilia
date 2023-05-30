//Receber uma string do usuario

var frase = prompt('Digita uma string ae')

//Perguntar qual letra o usuario gostaria de remover

var letraPraRemover = prompt('Qual letra cê quer remover?')

//Perguntar qual o caractere especial o usuario prefere (& % $ # @ ! * -)

var caractereEspecial = prompt('Qual caractere vc mais gosta? & % $ # @ ! * -')

//Analise de string
//Mostrar na tela usando funções
//quantidade de caracteres
//a palavra com letras maiusculas
//a palavra com letras minusculas
//Sem a letra que o usuario quer remover
//Letra quer remover substituida por *
//Primeira letra
//ultima letra
//letra central

function mostrarNaTela(titulo, frase) {
  document.write(`
    <p><span>${titulo}: </span> ${frase}</p>
  `)
}

function qtdDeCaractere(frase) {
  return `A string ${frase} tem ${frase.length} caracteres`
}

console.log(qtdDeCaractere('Salve salve'))

var qtdCaracteres = qtdDeCaractere(frase)
mostrarNaTela('Quantidade de caracteres', qtdCaracteres)

var semOCaracterEscolhido = frase.replaceAll(letraPraRemover, '')

qtdCaracteres = qtdDeCaractere(semOCaracterEscolhido)
mostrarNaTela('Quantidade de caracteres', qtdCaracteres)
