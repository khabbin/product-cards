import { productsInfo } from './product-cards.js';
// задание 3 и 6 
const productsTemplate = document.getElementById('product-template');
const productsList = document.querySelector('.cards-list');
//const cardsCount = prompt("Сколько карт до 5шт. отобразить?:", "");
const displayCardsByCount = () => {
  if (cardsCount > 5) {
    alert('Введите значение от 0 до 5')
  } else {
    productsInfo.slice(0, cardsCount).forEach(card => {
    const cardClone = productsTemplate.content.cloneNode(true);
    cardClone.querySelector('#product-image').src = `/images/${card.img}.png`;
    cardClone.querySelector('.product-name').textContent = card.name;
    cardClone.querySelector('.product-category').textContent = card.category;
    cardClone.querySelector('.product-description').textContent = card.description;
    cardClone.querySelector('.product-price').textContent = `${card.price}` + '\u0024';
    const productCompound = cardClone.querySelector("#product-compound-list");
    card.compound.forEach(element => {
      const li = document.createElement("li");
      li.textContent = element;
      productCompound.appendChild(li);
    });
    productsList.appendChild(cardClone)
  })
}}
//displayCardsByCount()


//4) Используя метод .reduce(), получить строку,
//которая состоит из названий продуктовых карточек, разделенных точкой с запятой
const productNamesString = productsInfo.reduce((acc, card) => {
  return acc + `${card.name};`
},'');
// 5) Используя метод .reduce(), получить массив объектов,
// где ключем является название продукта, а значением - его описание
const productNameAndDescriptionArray = productsInfo.reduce((acc, card) => {
  acc.push({[card.name]: [card.description]})
  return acc
},[]);