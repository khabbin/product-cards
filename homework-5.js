//3 задание с температурами в городе
const displayCityTemperature = (temperature, city) => {
  console.log(`Сейчас в городе ${temperature} температура  — ${city} градусов по Цельсию`)
}
displayCityTemperature('Москва', '0')
// 4 задание скорость звука(скорость звука в сухом воздухе при 20 °C = 343 м / с)
const SOUND_SPEED = 343;
const checkSpeed = speed => {
  if (speed > SOUND_SPEED) {
    console.log("Сверхзвуковая скорость")
  } else if (speed === SOUND_SPEED) {
    console.log("Скорость звука")
  } else {
    console.log("Дозвуковая скорость")
  }
}
checkSpeed(343)
// задание 5 Продукс с ценой
let productName = 'moisturizing mousse';
let productPrice = 2750;
const purchaseProduct = (balance) => {
  if (balance >= productPrice) {
    console.log(`${productName} приобретён.`)
  } else{
    console.log(`Вам не хватает ${productPrice - balance} $ пополните баланс`)
  }
}
purchaseProduct (2500)
//6.Создать 1 функцию и именовать её по своему усмотрению
const sayHi = () => {
  console.log('hi')
}
//7. Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению
let objectsCount = 0;
let carSpeed = 100;
let cityName = 'Moscow'