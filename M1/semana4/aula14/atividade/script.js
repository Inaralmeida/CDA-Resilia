//receber um email
//verificar se tem @

function validaEmail(email) {
  var indexArroba = email.indexOf('@')
  if (indexArroba > -1) {
    return true
  } else {
    return false
  }
}

function exibeResultadoValidacao(validacao) {
  if (validacao) {
    document.write(`<h2>Email Validado</h2>`)
  } else {
    document.write(`<h2>Email fornecido invalido</h2>`)
  }
}

function validacaoDeEmail() {
  var email = prompt('Digite seu email')

  var validacao = validaEmail(email)

  exibeResultadoValidacao(validacao)
}

validacaoDeEmail()
