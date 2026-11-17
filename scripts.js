const button = document.querySelector('form');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');

button.addEventListener('submit', e => {
  e.preventDefault();
  password.classList.remove('invalid');
  confirm.classList.remove('invalid');
  if (password.value === '' && confirm.value === '') {
    password.classList.add('invalid');
    confirm.classList.add('invalid');
  } else if (password.value !== confirm.value) {
    confirm.classList.add('invalid');
  }
});
