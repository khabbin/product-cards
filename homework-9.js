import { Form } from './Form.js'
import { Modal } from './Modal.js'
let user = undefined 
const subscribeForm = document.querySelector('#subscribe-form')
subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let dataEmail = new Form('subscribe-form')
  console.log(('validation:', userInfoElement.isValid()))
  dataEmail.resetForm()
  console.log(dataEmail.getFormData())
  alert('Вы подписались')
})

const userForm = document.querySelector('.user-form')
userForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let userInfoElement =  new Form('user-form-id')
  console.log('validation:', userInfoElement.isValid())
  user = userInfoElement.getFormData()
  userInfoElement.resetForm()
  if (user['password'] === user['repeat-password']) {
    user.CreatedOn = new Date()
    alert('регистрация пройдена')
    console.log(user)
  } else {
    alert('регистрация не пройдена')
  }
})

// Переписал логику 9 задания
let currentUser = undefined
const authenticationBtn = document.querySelector('#authentication');
const closeBtn = document.querySelector('.modal-close');
const modalBox = new Modal('modal-window')

authenticationBtn.addEventListener('click', () => {
  
  modalBox.openModal()
  console.log('isModalOpen:', modalBox.isModalOpen())
})

closeBtn.addEventListener('click', () => {
  modalBox.closeModal()
  console.log('isModalOpen:', modalBox.isModalOpen())
})

const authenticationForm = document.querySelector('#authentication-form')
authenticationForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let currentUserElement = new Form('authentication-form')
  console.log('validation:', userInfoElement.isValid())
  currentUser = currentUserElement.getFormData()
  currentUserElement.resetForm()
  if ((user['password'] === currentUser['password'] && user['login'] === currentUser['login'])) {
    currentUser = {...user, lastLogin: new Date()}
    console.log(currentUser)
    alert('Успешная авторизация')
    modalBox.closeModal()
    console.log('isModalOpen:', modalBox.isModalOpen())
  } else {
    alert('Пароль или логин не совпадает')
  }
})
