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
      name: validateDate.name.value,
      email: validateDate.email.value,
      password: validateDate.password.value,
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
    window.location.href = "../PageTrasactions/index.html"
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
      console.log('carregou enter o valor digitado foi: ' + this.value);
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

  activeFocos() {
    clearSpanName()
    clearSpanEmail()
    clearSpanPassword()
  },

  activeblur() {
    clearSpanName()
    clearSpanEmail()
    clearSpanPassword()

    validateDate.createElementCaseEmpty()

    validateFieldsOnFocusAndBlur.validateFields();
  },

  exec() {

    validateDate.name.addEventListener('focus', validateFieldsOnFocusAndBlur.activeFocos)
    validateDate.email.addEventListener('focus', validateFieldsOnFocusAndBlur.activeFocos)
    validateDate.password.addEventListener('focus', validateFieldsOnFocusAndBlur.activeFocos)

    validateDate.name.addEventListener('blur', validateFieldsOnFocusAndBlur.activeblur)
    validateDate.email.addEventListener('blur', validateFieldsOnFocusAndBlur.activeblur)
    validateDate.password.addEventListener('blur', validateFieldsOnFocusAndBlur.activeblur)

  }

}

validateDate.submit();
(function main() {
  validateFieldsOnFocusAndBlur.exec();
})();