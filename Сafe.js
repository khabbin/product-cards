import { Drink } from './Drink.js'
import { Tea } from './Tea.js'
import { Coffee } from './Coffee.js'
import { Lemonade } from './Lemonade.js'

export class Cafe {
  constructor(name, address) {
    this.name = name,
    this.address = address
  }
  
  getInfo() {
    return {
      name: this.name,
      address : this.address
    }
  }
  
  orderProduct(drink) {
    drink.make();
    drink.presentDrink()
  }
}

