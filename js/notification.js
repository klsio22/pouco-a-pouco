 setTimeout(() => {
  if (window.confirm("Você deseja receber atualizações e novidades? ")) {
    alert('Obrigado pela atenção!')
  }

  motivacional.promptRText();

}, 3000)

const motivacional = {
  promptRText() {
    let answer = prompt('Como esta sua situação finaceira ?')

    if (answer != null)
      alert('Venha conosco e consiga o seu sucesso financeiro !')

  }

} 