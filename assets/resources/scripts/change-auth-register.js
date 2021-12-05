const toEnter = document.querySelector('.to-enter')
const toRegister = document.querySelector('.to-register')

const selectorEnter = document.querySelector('.selector-enter')
const selectorLogin = document.querySelector('.selector-login')

function selector() {
  selectorEnter.classList.toggle('touch-ripple-root')
  selectorLogin.classList.toggle('touch-ripple-root')
}

function auth() {
  const auth = document.querySelector('.auth');
  const login = document.querySelector('.register');

  let contains = auth.classList.contains('display-none');

  if (contains) {
    auth.classList.remove('display-none')
    auth.classList.add('display-inital')

    login.classList.remove('display-inital')
    login.classList.add('display-none')

    toEnter.disabled = true;
    toRegister.disabled = false;

    selector()

  }

}

function register() {
  const auth = document.querySelector('.auth');
  const login = document.querySelector('.register');

  const contains = login.classList.contains('display-none');

  if (contains) {
    login.classList.remove('display-none')
    login.classList.add('display-inital')

    auth.classList.remove('display-inital')
    auth.classList.add('display-none')

    toEnter.disabled = false;
    toRegister.disabled = true;
    selector()
  }


}

toEnter.addEventListener('click', auth)
toRegister.addEventListener('click', register)