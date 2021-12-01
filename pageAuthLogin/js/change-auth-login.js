const enter = document.querySelector('.to-enter')
const register = document.querySelector('.to-register')


function auth() {
  let auth = document.querySelector('.auth');
  auth.classList.toggle('block');

  enter.disabled = true;
  register.disabled = false;
}



function login() {
  let login = document.querySelector('.login');
  login.classList.toggle('block');


  enter.disabled = false;
  register.disabled = true;

}


enter.addEventListener('click', auth)
register.addEventListener('click', login)