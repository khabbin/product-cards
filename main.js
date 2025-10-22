const googleUrl = 'https://google.com'

const pcard = document.querySelector('.card-container');
const productCards = document.querySelectorAll('.card-container');
const changeCardColorButton = document.querySelector('#change-card-color-button');
changeCardColorButton.addEventListener('click', () => {
  pcard.style.backgroundColor = 'red';
})

const ChangeAllCardsColorBtn = document.querySelector('#change-all-cards-color-button');
ChangeAllCardsColorBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = 'blue');
})

const openGooglePageBtn = document.querySelector('#open-google-btn');
openGooglePageBtn.addEventListener('click', () => {
  window.open(googleUrl);
})

function openGoogle() {
  const answer = confirm('открыть?')
  if (answer === true) {
    window.open(googleUrl)
  } else {
    return;
  }
}
const openGoogleAnswerBtn = document.querySelector('#open-google-answer')
openGoogleAnswerBtn.addEventListener('click', openGoogle)

const outputLogBtn = document.querySelector('#output-console-log-btn')
outputLogBtn.addEventListener('click',() => openConsoleLog('privet'))
function openConsoleLog(massage) {
  console.log(massage)
}

const task7Btn = document.querySelector('#task-7');
task7Btn.addEventListener('click', () => {
  pcard.classList.add('blue-color')
  pcard.classList.toggle('green-color');
})

const mouseFocusListener = document.querySelector('.product-heading')
mouseFocusListener.addEventListener('mouseover', () => {
  console.log(mouseFocusListener.textContent)
})