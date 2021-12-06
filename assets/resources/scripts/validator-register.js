"use strict";

import {
  createElementSpanName as spanName,
  createElementSpanEmail as spanEmail,
  createElementSpanPassword as spanPassword,
  clearSpanEmail,
  clearSpanName,
  clearSpanPassword
} from "./create-requerids-register.js";

const validateDate = {

  onSubmit: document.getElementById('toSend'),
  register: document.querySelector('.confirm-register'),
  inputEnter: document.getElementById('confirm-register'),

  name: document.querySelector('input#name-login'),
  email: document.querySelector('input#email-login'),
  password: document.querySelector('input#password-login'),

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
    window.location.href = "../../../views/transactions.html"
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
    } else {
      validateDate.removeDisabled();
    }

  },

  updateFields() {
    setInterval(() => {
      validateFieldsOnFocusAndBlur.validateFields()
    }, 100);

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

    if (name.trim() === "") {
      spanName();
      validateDate.addDisabled();
    } else {
      clearSpanName();
      validateFieldsOnFocusAndBlur.validateFields()
    }
  },

  validateEmail() {
    const {
      email
    } = validateFieldsOnFocusAndBlur.getEmail();

    validateFieldsOnFocusAndBlur.updateFields()
   
    if (email.trim() === "") {
      spanEmail();
      validateDate.addDisabled();
    } else {
      clearSpanEmail();
      validateFieldsOnFocusAndBlur.validateFields()
    }
  },

  validatePassword() {
    const {
      password
    } = validateFieldsOnFocusAndBlur.getPassword();

    validateFieldsOnFocusAndBlur.updateFields()     
    if (password.trim() === "") {
      spanPassword();
      validateDate.addDisabled();
    } else {
      clearSpanPassword();
      validateFieldsOnFocusAndBlur.validateFields()
    }
  },


  exec() {

    validateDate.name.addEventListener('focus', () => {
      clearSpanName()
    })
    validateDate.email.addEventListener('focus', () => {
      clearSpanEmail()
    })
    validateDate.password.addEventListener('focus', () => {
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