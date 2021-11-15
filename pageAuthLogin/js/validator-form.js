const validateDate = {
  onSubmit: document.querySelector('#toSend'),
  inputEnter: document.querySelector('input#register'),
  name: document.querySelector('input#text-name'),
  email: document.querySelector('input#email'),
  password: document.querySelector('input#password'),


  createElement(){

  },


  getValues() {
    return {
      name: validateDate.name.value,
      email: validateDate.email.value,
      password: validateDate.password.value,
    }

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
      throw new Error("Por favor , preencha todos os campos")
    }
  },

  checkForm(event) {
    event.preventDefault();

    try {
      validateDate.validateFields();

    } catch (err) {
      alert(err.message)
    }
    //console.log(event)
  },

  submit() {
    validateDate.onSubmit.addEventListener('submit', validateDate.checkForm)
  }

}

validateDate.submit();