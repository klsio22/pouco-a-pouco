"use strict";

const requeridName = document.getElementById('requerid-name')
const requeridEmail = document.getElementById('requerid-email')
const requeridPassword = document.getElementById('requerid-password')

function createElementSpanName() {
  let spanName = document.createElement('span');
  spanName.innerHTML = 'Nome obrigatório';
  requeridName.appendChild(spanName);
}

const createElementSpanEmail = function () {
  let spanEmail = document.createElement('span');
  spanEmail.innerHTML = 'Email obrigatório';
  requeridEmail.appendChild(spanEmail);
}

const createElementSpanEmailValid = function () {
  let spanEmail = document.createElement('span');
  spanEmail.innerHTML = 'Email Inválido';
  requeridEmail.appendChild(spanEmail);
}

const createElementSpanPassword = () => {
  let spanPassword = document.createElement('span');
  spanPassword.innerHTML = 'Senha obrigatória';
  requeridPassword.appendChild(spanPassword);
}

const clearSpanName = () => {
  requeridName.innerHTML = '';
}

const clearSpanEmail = () => {
  requeridEmail.innerHTML = '';
}

const clearSpanPassword = () => {
  requeridPassword.innerHTML = '';
}

export {
  createElementSpanName,
  createElementSpanEmail,
  createElementSpanPassword,
  clearSpanName,
  clearSpanEmail,
  clearSpanPassword,
  createElementSpanEmailValid
}