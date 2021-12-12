/* emailAuth.onblur = function () {
  if (this.value.trim() == "") {
    createElementSpanEmail();
  } else {
    clearSpanEmail();
  }
}
 */
$(document).ready(function () {

  const email = document.getElementById('email')
  
  let createElementSpanEmail = () => {
    $('.required-email')
    .append("<span> Solicitante: E-mail: não pode ficar em branco</span>").
    addClass('error')
  }

  let clearSpanEmail = () => {
    $('.required-email')
    .removeClass('error')
    .html('');
  }

  $(email).on('blur', function () {
    if (this.value.trim() == '') {
      createElementSpanEmail();

      console.log('Email vazil');
    } else {
      clearSpanEmail();
      console.log('Email não vazil');
    }


  })

})