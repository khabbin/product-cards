//Первый вариант задания 4 хочу оставить чтоб запомнить
// form = document.querySelector('#subscribe-form')
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const emeil = form.querySelector('[name="email"]')
//   const values = {
//     emeil: emeil.value
//   };
//   console.log(values)
// })
//4. К Форме, которая прикреплена в футере - добавить логику:
//email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется
let user = undefined // 6. Сохраняем этот объект в переменную для дальнейшего использования.
// const subscribeForm = document.querySelector('#subscribe-form');
const getFormData = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  return data;
}
const subscribeForm = document.querySelector('#subscribe-form')
subscribeForm.addEventListener('submit', (event) => {
  let dataEmeil = getFormData(event)
  console.log(dataEmeil)
  alert('Вы подписались')
})
//5. Создать форму для регистрации.
const userForm = document.querySelector('.user-form')
userForm.addEventListener('submit', (event) => {
  user = getFormData(event)
  if (user['password'] === user['repeat-password']) {
    user.CreatedOn = new Date()
    alert('регистрация пройдена')
    console.log(user)
  } else {
    alert('регистрация не пройдена')
  }
})

// 7. Создать кнопку "Аутентификация", не стесняемся добавлять стили, практикуем css.
// 8. Создать модальное окно, используя классы "modal, modal-showed
// 9. В открытой модалке у нас будет форма авторизации: логин, пароль, кнопка "Войти"
//10. Создаем глобальную переменную "currentUser"
let currentUser = undefined
const authenticationBtn = document.querySelector('#authentication');
const modalBox = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal-close');

authenticationBtn.addEventListener('click', () => {
  modalBox.style.visibility = 'visible'
})
closeBtn.addEventListener('click', () => {
  modalBox.style.visibility = 'hidden'
})

const authenticationForm = document.querySelector('#authentication-form')
authenticationForm.addEventListener('submit', (event) => {
  currentUser = getFormData(event)
  if ((user['password'] === currentUser['password'] && user['login'] === currentUser['login'])) {
    currentUser = {...user, lastLogin: new Date()}
    console.log(currentUser)
    alert('Успешная авторизация')
    modalBox.style.visibility = 'hidden'
  } else {
    alert('Пароль или логин не совпадают')
  }
})