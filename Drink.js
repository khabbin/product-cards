export class Drink {
  #temperature
  constructor(name, size, price) {
    this.name = name
    this.size = size
    this.price = price
    this.#temperature = undefined
  }
  
  getInfo() {
    return {
      name: this.name,
      size: this.size,
      price: this.price
    }
  }
  
  getTemperature() {
    return this.#temperature
  }
  
  #setTemperature(newTemperature) {
    this.#temperature = newTemperature
  }
  
  #makeDrink() {
    console.log(`Готовим ${this.name}, размера ${this.size}`)
  }
  
  make() {
    this.#makeDrink();
  }
  
  presentDrink() {
    console.log('Напиток готов!')
    return {
      name: this.name,
      size: this.size,
      price: this.price,
    }
  }
}
