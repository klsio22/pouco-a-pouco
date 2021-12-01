const validateDate = {
  onSubmit: document.getElementById('toSend'),
  register: document.querySelector('.register'),
  inputEnter: document.getElementById('register'),

  name: document.querySelector('input#name-login'),
  email: document.querySelector('input#email-login'),
  password: document.querySelector('input#password-login'),

  requeridName: document.getElementById('requerid-name'),
  requeridEmail: document.getElementById('requerid-email'),
  requeridPassword: document.getElementById('requerid-password'),

  getValues() {
    return {
      name: validateDate.name.value,
      email: validateDate.email.value,
      password: validateDate.password.value,
    }

  },

  createElementSpanName() {
    let spanName = document.createElement('span');
    spanName.innerHTML = 'Nome obrigatório';
    validateDate.requeridName.appendChild(spanName);
  },

  createElementSpanEmail() {
    const spanEmail = document.createElement('span');
    spanEmail.innerHTML = 'Email obrigatório';
    validateDate.requeridEmail.appendChild(spanEmail);

  },

  createElementSpanPassword() {
    const spanPassword = document.createElement('span');
    spanPassword.innerHTML = 'Senha obrigatória';
    validateDate.requeridPassword.appendChild(spanPassword);
  },


  clearElementsChilds() {
    this.requeridName.innerHTML = '';
    this.requeridEmail.innerHTML = '';
    this.requeridPassword.innerHTML = '';
  },


  createElementCaseEmpty() {
    const {
      name,
      email,
      password
    } = validateDate.getValues();

    if (name.trim() === "")
      this.createElementSpanName()

    if (email.trim() === "")
      this.createElementSpanEmail()

    if (password.trim() === "")
      this.createElementSpanPassword()
  },

  addDisabled() {
    validateDate.register.classList.add('disabled');
  },

  removeDisabled() {
    validateDate.register.classList.remove('disabled');
  },

  redirect(){
    window.location.href="../PageTrasactions/index.html"
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
      validateDate.clearElementsChilds();

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

const validateFieldsonFocus = {

  //object.addEventListener("focus", myScript);
  //object.addEventListener("blur", myScript);

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
    validateDate.clearElementsChilds();
  },

  activeblur() {
    validateDate.clearElementsChilds();
    validateDate.createElementCaseEmpty()

    validateFieldsonFocus.validateFields();
  },

  exec() {

    validateDate.name.addEventListener('focus', validateFieldsonFocus.activeFocos)
    validateDate.email.addEventListener('focus', validateFieldsonFocus.activeFocos)
    validateDate.password.addEventListener('focus', validateFieldsonFocus.activeFocos)

    validateDate.name.addEventListener('blur', validateFieldsonFocus.activeblur)
    validateDate.email.addEventListener('blur', validateFieldsonFocus.activeblur)
    validateDate.password.addEventListener('blur', validateFieldsonFocus.activeblur)

  }

}

validateDate.submit();
(function main() {
  validateFieldsonFocus.exec();
})();