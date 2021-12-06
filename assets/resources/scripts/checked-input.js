export const checkedInput = () => {

  const connected = document.getElementsByName('connected')
  let isChecked = false;

  connected.forEach((element) => {
    if (element.checked) {
      console.log('Quer manter conectado')
      isChecked = true;
    }
  })

  if (!isChecked) {
    console.log('Não quer manter-se conctado')
    return false;
  }
}