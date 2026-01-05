const loadingTextElement = document.getElementById('loading-text')
const errorTextElement = document.getElementById('error-text')
const usersTemplate = document.getElementById('users-template')
const usersList = document.querySelector('.users-list')

const showLoadingText = (boolean) => loadingTextElement.style.visibility = boolean ? 'visible' : 'hidden'
const showErrorText = (boolean) => errorTextElement.style.visibility = boolean ? 'visible' : 'hidden'

const deleteAllUsersBtn = document.getElementById('delete-all-users-btn')
deleteAllUsersBtn.addEventListener('click', () => {
  localStorage.setItem('usersData', JSON.stringify([]));
  displayUsers()
})

const showAllUsersBtn = document.getElementById('show-all-users-btn')
showAllUsersBtn.addEventListener('click', () => {
  loadUsers()
  displayUsers()
})

const deleteUserBtn = document.getElementById('delete-user-btn')
deleteUserBtn.addEventListener('click', () => {
  let deleteId = Number(prompt('Удалить юзера с id:'))
  const cards = JSON.parse(localStorage.getItem('usersData')) || [];
  if (cards.some(card => card.id === deleteId)) {
    const updatedCards = cards.filter(card => card.id !== deleteId);
    localStorage.setItem('usersData', JSON.stringify(updatedCards));
  } else {
    alert('Юзер с таким id не найден')
    throw new Error('Такого id нет');
  }
  displayUsers()
})

const clearStorageBtn = document.getElementById('clear-storage-btn')
clearStorageBtn.addEventListener('click', () => {
    localStorage.clear();
});

const displayUsers = () => {
  usersList.innerHTML = '';
  const users = JSON.parse(localStorage.getItem('usersData'));
  users.forEach((user) => {
    const userCardClone = usersTemplate.content.cloneNode(true);
    userCardClone.querySelector('#user-id').textContent = `ID: ${ user.id }`;
    userCardClone.querySelector('#user-name').textContent = `Name: ${ user.name }`;
    userCardClone.querySelector('#user-surname').textContent = `Surname: ${user.surname}`;
    userCardClone.querySelector('#user-email').textContent = `Email: ${ user.email }`;
    userCardClone.querySelector('#user-age').textContent = `Age: ${ user.age }`;
    usersList.appendChild(userCardClone);
  });
}

async function loadUsers() {
  showLoadingText(true);
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await fetch('./async.json');
  if (!response.ok) {
    showLoadingText(false);
    showErrorText(true);
    throw new Error('Ошибка загрузки данных');
  }

  showLoadingText(false);
  const data = await response.json();
  localStorage.setItem('usersData', JSON.stringify(data));
  displayUsers();
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('usersData') !== null) {
    console.log('ключ есть загрузки не будет')
    displayUsers();
  } else {
    loadUsers();
  }
});




