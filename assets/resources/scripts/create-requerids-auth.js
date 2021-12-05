const requeridEmail = document.querySelector('.requerid-email')
const requeridPassword = document.querySelector('.requerid-password')

const createElementSpanEmail = function () {
  let spanEmail = document.createElement('span');
  spanEmail.innerHTML = 'Email obrigatório';
  requeridEmail.appendChild(spanEmail);

}

const createElementSpanPassword = () => {
  let spanPassword = document.createElement('span');
  spanPassword.innerHTML = 'Senha obrigatória';
  requeridPassword.appendChild(spanPassword);
}

const clearSpanEmail = () => {
  requeridEmail.innerHTML = '';
}

const clearSpanPassword = () => {
  requeridPassword.innerHTML = '';
}

export {
  createElementSpanEmail,
  createElementSpanPassword,
  clearSpanEmail,
  clearSpanPassword
}