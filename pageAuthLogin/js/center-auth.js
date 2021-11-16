setInterval(window.onload = () => {
  authLogin();
}, 10);

function authLogin() {
  content = document.querySelector(".auth-login")

  content.classList.toggle("s12", window.innerWidth <= 1024)
  // console.log("estou aqui")

  content.classList.toggle("s6", window.innerWidth >= 1024)

}