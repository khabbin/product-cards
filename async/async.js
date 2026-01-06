const loadingTextElement = document.getElementById('loading-text');
const errorTextElement = document.getElementById('error-text');
const usersTemplate = document.getElementById('users-template');
const usersList = document.querySelector('.users-list');

const getLocalData = () => {
  return JSON.parse(localStorage.getItem('usersData')) || [];
}
const setLoadingVisible = (isVisible) => loadingTextElement.style.visibility = isVisible ? 'visible' : 'hidden';
const setErrorVisible = (isVisible) => errorTextElement.style.visibility = isVisible ? 'visible' : 'hidden';

const deleteAllUsersBtn = document.getElementById('delete-all-users-btn');
deleteAllUsersBtn.addEventListener('click', () => {
  localStorage.removeItem('usersData');
  displayUsers([]);
});

const showAllUsersBtn = document.getElementById('show-all-users-btn');
showAllUsersBtn.addEventListener('click', async () => {
  usersList.innerHTML = '';
  const users = await loadUsers();
  displayUsers(users);
});

const deleteUserBtn = document.getElementById('delete-user-btn');
deleteUserBtn.addEventListener('click', () => {
  let deleteId = Number(prompt('Удалить юзера с id:'));
  const cards = getLocalData();
  const updatedCards = cards.filter(card => card.id !== deleteId);
  if (cards.some(card => card.id === deleteId)) {
    localStorage.setItem('usersData', JSON.stringify(updatedCards));
  } else {
    alert('Юзер с таким id не найден');
    throw new Error('Такого id нет');
  }
  displayUsers(updatedCards);
});

const clearStorageBtn = document.getElementById('clear-storage-btn');
clearStorageBtn.addEventListener('click', () => {
    localStorage.clear();
});

const displayUsers = (users) => {
  usersList.innerHTML = '';
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
  setErrorVisible(false);
  setLoadingVisible(true);
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('./async.json');
    if (!response.ok) {
      throw new Error('Ошибка загрузки');
    }
    const fetchedData = await response.json();
    localStorage.setItem('usersData', JSON.stringify(fetchedData));
    return fetchedData;
  } catch (error) {
    setErrorVisible(true);
    return [];
  } finally {
    setLoadingVisible(false);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const currentUsers = getLocalData();
  if (currentUsers.length > 0) {
    displayUsers(currentUsers);
  } else {
    const loaded = await loadUsers();
    displayUsers(loaded);
  }
});