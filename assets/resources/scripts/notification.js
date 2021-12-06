"use strict";
 
 setTimeout(() => {
  if (window.confirm("Você deseja receber atualizações e novidades? ")) {
    alert('Obrigado pela atenção!')
  }

  motivacional.promptRText();

}, 5000)

const motivacional = {
  promptRText() {
    let answer = prompt('Como esta sua situação finaceira ?')

    if (answer != null)
      alert('Venha conosco e tenha o seu sucesso financeiro !')
  }

} 