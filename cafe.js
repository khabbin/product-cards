import { Drink } from './drink.js'
import { Tea } from './tea.js'
import { Coffee } from './coffee.js'
import { Lemonade } from './lemonade.js'
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
    return drink.make(), drink.presentDrink()
  }
}

