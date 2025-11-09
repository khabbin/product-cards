//3 задание с температурами в городе
const cityTemperature = (x, y) => {
  console.log(`Сейчас в городе ${x} температура  — ${y} градусов по Цельсию`)
}
cityTemperature('Москва', '0')
// 4 задание скорость звука(скорость звука в сухом воздухе при 20 °C = 343 м / с)
const SOUND_SPEED = 343;
const speedCheck = (speed) => {
  if (speed > SOUND_SPEED) {
    console.log("Сверхзвуковая скорость")
  } else if (speed === SOUND_SPEED) {
    console.log("Скорость звука")
  } else {
    console.log("Дозвуковая скорость")
  }
}
speedCheck(343)
// задание 5 Продукс с ценой
let productName = 'moisturizing mousse';
let productPrice = 2750;
const sufficientBalance = (balance) => {
  if (balance >=  productPrice) {
    console.log(`${productName} приобретён.`)
  } else{
    console.log(`Вам не хватает ${productPrice - balance} $ пополните баланс`)
  }
}
sufficientBalance(2500)
//6.Создать 1 функцию и именовать её по своему усмотрению
const sayHi = () => {
  console.log('hi')
}
//7. Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению
let number1 = 1000;
let number2 = 23;
let string1 = 'abc'