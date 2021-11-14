const validateDate = {
  onSubmit: document.querySelector('#toSend'),
  inputEnter: document.querySelector('input#register'),
  checkname: document.querySelector('input#text-name'),

  getValues() {
    return {
      checkname: validateDate.checkname.value,
    }

  },

  validateFields() {
    const {
      checkname,
    } = getValues();

    if (checkname.trim() === "") {
      throw new Error("Por favor , preencha todos os campos")
    }
  },

  checkForm(event) {
    event.preventDefault();

    try {
      this.validateFields();

    } catch (err) {
      alert(err.message)
    }
    console.log(event)
  },

  submit() {
    validateDate.onSubmit.addEventListener('submit', validateDate.checkForm)
  }

}

validateDate.submit();