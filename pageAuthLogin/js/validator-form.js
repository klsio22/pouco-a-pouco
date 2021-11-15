const validateDate = {
  onSubmit: document.getElementById('toSend'),
  register: document.querySelector('.register'),
  inputEnter: document.getElementById('register'),
  name: document.querySelector('input#text-name'),
  email: document.querySelector('input#email'),
  password: document.querySelector('input#password'),

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

  clearElementschilds(){
    validateDate.requeridName.innerHTML= '';
    validateDate.requeridEmail.innerHTML = '';
    validateDate.requeridPassword.innerHTML = '';
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


  desableResgistar() {
    validateDate.register.classList.toggle('disabled');
    console.log("Disabled")
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
     // validateDate.desableResgistar();
      validateDate.createElementCaseEmpty();
      throw new Error('Por favor , preencha todos os campos')
    }

  },

  checkForm(event) {
    event.preventDefault();

    try {
      /* Limpar messagens de avisos */
      validateDate.clearElementschilds();

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

validateDate.submit();