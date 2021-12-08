"use strict";

import {
  createElementSpanName as spanName,
  createElementSpanEmail as spanEmail,
  createElementSpanEmailValid as spanEmailValid,
  createElementSpanPassword as spanPassword,
  clearSpanEmail,
  clearSpanName,
  clearSpanPassword
} from "./create-requerids-register.js";

import {
  checkedInput
} from './checked-input.js'

const onSubmit = document.getElementById('toSend')
const register = document.querySelector('.confirm-register')
const inputEnter = document.getElementById('confirm-register')

const name = document.querySelector('input#name-login')
const email = document.querySelector('input#email-login')
const password = document.querySelector('input#password-login')

const validateDate = {

  onSubmit,
  register,
  inputEnter,
  name,
  email,
  password,

  getValues() {
    return {
      name: validateDate.name.value.trim(),
      email: validateDate.email.value.trim(),
      password: validateDate.password.value.trim(),
    }

  },

  createElementCaseEmpty() {
    const {
      name,
      email,
      password
    } = validateDate.getValues();

    if (name.trim() === "")
      spanName()
    if (email.trim() === "")
      spanEmail()

    if (password.trim() === "")
      spanPassword()
  },

  addDisabled() {
    validateDate.register.classList.add('disabled');
  },

  removeDisabled() {
    validateDate.register.classList.remove('disabled');
  },

  redirect() {
    alert('Cadrastro feito com sucesso')
    //window.location.href = '../../views/transactions.html'//Local Host
    window.location.href = "/views/transactions.html"//gitPage
  },

  validateFields() {
    const {
      name,
      email,
      password
    } = validateDate.getValues();

    if (name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "") {
      validateDate.addDisabled();
      validateDate.createElementCaseEmpty();
      throw new Error('Por favor , preencha todos os campos')
    } else {
      validateDate.removeDisabled();
      validateDate.redirect();
    }

  },

  checkForm(event) {
    event.preventDefault();

    try {
      /* Limpar messagens de avisos */
      clearSpanName()
      clearSpanEmail()
      clearSpanPassword()
      /* Validação dos campos  */
      validateDate.validateFields();
      /* Verificar se vai se manter conectado ou não */
      checkedInput();
    } catch (err) {
      alert(err.message)
    }
    //console.log(event)
  },

  validateEnter(e) {
    let key = e.which || e.keyCode;
    if (key === 13) {
      validateFields()
    }
  },

  submit() {

    validateDate.onSubmit.addEventListener('submit', validateDate.checkForm)
    validateDate.inputEnter.addEventListener('keyup', validateDate.validateEnter)
  }

}

const validateFieldsOnFocusAndBlur = {

  validateFields() {
    const {
      name,
      email,
      password
    } = validateDate.getValues();

    if (name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "") {
      validateDate.addDisabled();
    }
  },

  updateFields() {
    setInterval(() => {
      validateFieldsOnFocusAndBlur.validateFields()
    }, 10);

  },

  getName() {
    return {
      name: validateDate.name.value.trim()
    }
  },

  getEmail() {
    return {
      email: validateDate.email.value.trim()
    }
  },

  getPassword() {
    return {
      password: validateDate.password.value.trim()
    }
  },

  validateName() {
    const {
      name
    } = validateFieldsOnFocusAndBlur.getName();

    validateFieldsOnFocusAndBlur.updateFields()

    if (name == '') {
      spanName();
      validateDate.addDisabled();
    } else {
      clearSpanName();
      validateDate.removeDisabled();
    }
  },

  emailValid(email) {
    let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email) // retorna true
  },

  validateEmail() {
    const {
      email
    } = validateFieldsOnFocusAndBlur.getEmail();

    validateFieldsOnFocusAndBlur.updateFields()

    if (email === '') {
      spanEmail();
      validateDate.addDisabled();
    } else if (!validateFieldsOnFocusAndBlur.emailValid(email)) {
      spanEmailValid();
    } else {
      clearSpanEmail();
      validateDate.removeDisabled();
    }
  },

  validatePassword() {
    const {
      password
    } = validateFieldsOnFocusAndBlur.getPassword();

    let reg = /^[a-zA-Z0-9!@#$%^&*]{6,32}$/;

    validateFieldsOnFocusAndBlur.updateFields()

    if (password === '') {
      spanPassword();
      validateDate.addDisabled();
    } else if (!reg.test(password)) { //false
      alert('A senha deve conter pelo menos um número e um caractere especial')
      spanPassword();
    } else {
      clearSpanPassword();
      validateDate.removeDisabled();
      console.log(password)
    }

  },


  exec() {

    validateDate.name.addEventListener('focus', () => {
      validateFieldsOnFocusAndBlur.updateFields()
      clearSpanName()
    })

    validateDate.email.addEventListener('focus', () => {
      validateFieldsOnFocusAndBlur.updateFields()
      clearSpanEmail()
    })

    validateDate.password.addEventListener('focus', () => {
      validateFieldsOnFocusAndBlur.updateFields()
      clearSpanPassword()
    })

    validateDate.name.addEventListener('blur',
      validateFieldsOnFocusAndBlur.validateName)

    validateDate.email.addEventListener('blur',
      validateFieldsOnFocusAndBlur.validateEmail)

    validateDate.password.addEventListener('blur',
      validateFieldsOnFocusAndBlur.validatePassword)

  }

}

validateDate.submit();

(function main() {
  validateFieldsOnFocusAndBlur.exec();
})();