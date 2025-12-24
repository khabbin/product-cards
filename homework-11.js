import { Cafe } from './Cafe.js'
import { Tea } from './Tea.js'
import { Coffee } from './Coffee.js'
import { Lemonade } from './Lemonade.js'

const greenTea = new Tea('Би Ло Чунь', 'M', '240', 'зеленый', 80)
const lemonadik = new Lemonade('lemonade', 'S', '200', '200г', '2')
const latte = new Coffee('Латте', 'M', '200', 'арабика', 'овсяное', true)
const myCafe = new Cafe('Восточка', '​Улица Монтажников, 34/1')
console.log(myCafe.getInfo())
console.log(myCafe.orderProduct(latte))