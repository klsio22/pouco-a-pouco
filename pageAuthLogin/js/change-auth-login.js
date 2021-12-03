const enter = document.querySelector('.to-enter')
const register = document.querySelector('.to-register')

const selectorEnter = document.querySelector('.selector-enter')
const selectorLogin = document.querySelector('.selector-login')

function selector(){
  selectorEnter.classList.toggle('touch-ripple-root')
  selectorLogin.classList.toggle('touch-ripple-root')
}

function auth() {
  const auth = document.querySelector('.auth');
  const login = document.querySelector('.login');

  let contains = auth.classList.contains('display-none');

  if (contains) {
    auth.classList.remove('display-none')
    auth.classList.add('display-inital')


    login.classList.remove('display-inital')
    login.classList.add('display-none')

    enter.disabled = true;
    register.disabled = false;

    selector()

  }
  
}

function login() {

  const auth = document.querySelector('.auth');
  const login = document.querySelector('.login');

  const contains = login.classList.contains('display-none');

  if (contains) {
    login.classList.remove('display-none')
    login.classList.add('display-inital')

    auth.classList.remove('display-inital')
    auth.classList.add('display-none')

    enter.disabled = false;
    register.disabled = true;
    
    selector()
    
  }


}

enter.addEventListener('click', auth)
register.addEventListener('click', login)