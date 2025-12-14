/*3.Создать структуру на ваш выбор, как было показано в лекции
(имеется ввиду - с машинами/бьюти-продуктами).
Придумайте свою структуру и реализуйте наследуемость классов*/
class Mouse {
  constructor(brand, model) {
    this.brand = brand
    this.model = model
  }
  connected() {
    console.log(`${this.brand} ${this.model} connected`)
  }
}

class WirelessMouse extends Mouse {
  constructor(brand, model, charge) {
    super(brand, model)
    this.charge = charge
  }
  connected() {
    super.connected();
    console.log(`current charge - ${this.charge}`)
  }
}

const razer = new Mouse('Razer', 'DeathAdder V3')
const logitech = new WirelessMouse('Logitech', 'G PRO X SUPERLIGHT 2', '100')
