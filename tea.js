import { Drink  } from "./drink.js";
export class Tea extends Drink{
  constructor(name, size, price, type, brewingTemperature) {
    super(name, size, price)
    this.type = type
    this.brewingTemperature = brewingTemperature
  }
  
  getInfo() {
    return {
      ...super.getInfo(),
      type: this.type,
      brewingTemperature: this.brewingTemperature
    }
  }
  
  #makeDrink() {
    console.log(`Завариваем чай типа: ${this.type}, при температуре ${this.brewingTemperature}`)
  }
  
  make(){
    this.#makeDrink();
  }
}



