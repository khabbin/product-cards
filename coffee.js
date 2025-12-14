import { Drink } from './drink.js'
export class Coffee extends Drink {
  constructor(name, size, price, bean, milk, sugar) {
    super(name, size, price)
    this.bean = bean
    this.milk = milk
    this.sugar = sugar
  }
  
  getInfo(){
    return {
      ...this.getInfo(),
      bean: this.bean,
      milk: this.milk
    }
  }
  
  #makeDrink() {
    console.log(`перемалываем зерна типа ${this.bean}`)
    if (this.milk !== 'без молока') {
      console.log(`добавляю молоко типа: ${this.milk}`)
    }
    console.log(`Делаю кофе ${this.sugar ? 'с сахаром' : 'без сахара'}`)
  }
  
  make() {
    this.#makeDrink()
  }
}
