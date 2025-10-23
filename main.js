const googleUrl = 'https://google.com'
//задание 2
const productCard = document.querySelector('.card-container');
const productCards = document.querySelectorAll('.card-container');
const changeCardColorButton = document.querySelector('#change-card-color-button');
changeCardColorButton.addEventListener('click', () => {
  productCard.style.backgroundColor = 'red';
})
//задание 3
const changeAllCardsColorBtn = document.querySelector('#change-all-cards-color-button');
changeAllCardsColorBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = 'blue');
})
//задание 4
const openGooglePageBtn = document.querySelector('#open-google-btn');
openGooglePageBtn.addEventListener('click', () => {
  window.open(googleUrl);
})
//задание 5 alert
function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на "https://google.com"?')
  
  if (answer === true) {
    window.open(googleUrl)
  } else {
    return;
  }
}

const openGoogleAnswerBtn = document.querySelector('#open-google-answer')
openGoogleAnswerBtn.addEventListener('click', openGoogle)
//задание 5 консоль лог
const outputLogBtn = document.querySelector('#output-console-log-btn')
outputLogBtn.addEventListener('click',() => openConsoleLog('privet'))
function openConsoleLog(message) {
  console.log(message)
}
//задание 7
const task7Btn1 = document.querySelector('#task-7');
const task7Btn = document.querySelector('#task-7');
task7Btn.addEventListener('click', () => {
  task7Btn1.classList.add('red-color-bg')
  task7Btn1.classList.toggle('green-color-bg');
})
//задание 6
const productHeading = document.querySelector('.product-heading')
productHeading.addEventListener('mouseover', () => {
  console.log(productHeading.textContent)
})