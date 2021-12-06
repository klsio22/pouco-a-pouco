"use strict";

import {
  createElementSpanEmail,
  createElementSpanPassword,
  clearSpanEmail,
  clearSpanPassword
} from "./create-requerids-auth.js";


const emailAuth = document.getElementById('email-auth')
const passwordAuth = document.querySelector('#password-auth')

emailAuth.onblur = function () {
  if (this.value.trim() == "") {
    createElementSpanEmail();
  } else {
    clearSpanEmail();
  }
}

emailAuth.addEventListener('focus', function () {
  clearSpanEmail();
})

passwordAuth.addEventListener('blur', function () {
  if (this.value == '') {
    createElementSpanPassword();
  } else {
    clearSpanPassword();
  }
})

passwordAuth.addEventListener('focus', () => {
  clearSpanPassword();
})

document.forms[0].onsubmit = (event) => {
  clearSpanEmail();
  clearSpanPassword();

  event.preventDefault();


  if (
    emailAuth.value === "" ||
    passwordAuth.value === "") {
    alert('Por favor , preencha todos os campos')
  }

  if (emailAuth.value == '') {
    createElementSpanEmail();
  }

  if (passwordAuth.value == '') {
    createElementSpanPassword();
  }

  if (
    emailAuth.value != "" &&
    passwordAuth.value != "") {
    alert('Tudo ok')
    return true
  }


}