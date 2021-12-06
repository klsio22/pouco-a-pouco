"use strict";

const requeridName = document.getElementById('requerid-name')
const requeridEmail = document.getElementById('requerid-email')
const requeridPassword = document.getElementById('requerid-password')
export function createElementSpanName() {
  
  let spanName = document.createElement('span');
  spanName.innerHTML = 'Nome obrigatório';
  requeridName.appendChild(spanName);
}

export let createElementSpanEmail = function() {
  let spanEmail = document.createElement('span');
  spanEmail.innerHTML = 'Email obrigatório';
  requeridEmail.appendChild(spanEmail);

}

export let createElementSpanPassword = () => {
  let spanPassword = document.createElement('span');
  spanPassword.innerHTML = 'Senha obrigatória';
  requeridPassword.appendChild(spanPassword);
}

export let clearSpanName = () => {
  requeridName.innerHTML = '';
}

export let clearSpanEmail = () => {
  requeridEmail.innerHTML = '';
}

export let clearSpanPassword = () => {
  requeridPassword.innerHTML = '';
}
