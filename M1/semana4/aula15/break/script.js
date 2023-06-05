function validaEmail() {
  var email = prompt('Digite seu email')
  while (true) {
    if (email.indexOf('@') > -1) {
      alert('Email Valido')
      break
    }
    alert('Email invalido, tente novamente')
    email = prompt('Digite seu email')
  }
}

validaEmail()
