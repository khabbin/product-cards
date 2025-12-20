import { Drink } from './Drink.js'

export class Lemonade extends Drink {
  constructor(name, size, price, sugar, lemon) {
    super(name, size, price)
    this.sugar = sugar
    this.lemon = lemon
  }
  getInfo(){
    return {
      ...super.getInfo(),
      sugar: this.sugar,
      lemon: this.lemon
    }
  }
  
  #makeDrink() {
    console.log(`Выжимаем сок из ${this.lemon} лимонов, смешиваем с ${this.sugar} сахара, перемешиваем и охлаждаем`)
  }
  make(){
    this.#makeDrink();
  }
}


