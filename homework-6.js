//задание 3
const personInfo = {
  firstName: 'Мухаммад',
  lastName: 'Хаббин',
  age: 19,
  country: 'Russia',
  city: 'Sibay',
  employment: 'study',
  mail: '123@gmail.com'
}

//задание 4
const carInfo = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  color: 'Silver Metallic',
  transmissionType: 'Automatic',
  maxSpeed: 200
}
carInfo.owner = personInfo;

//задание 5S
const addCarSpeedProperty = () => {
  if (!carInfo.maxSpeed) {
    carInfo.maxSpeed = 180
  }
}
addCarSpeedProperty(carInfo)

//задание 6
const showObjectValue = (object, key) => {
  console.log(`${key}:`, object[key])
}

//задание 7
const products = ['Увлажняющий мусс', 'Увлажняющая маска', 'Гель для умывания', 'Подарочный набор 1', 'Подарочный набор 5']

//задание 8
const literaryBooks = [
  {
    name: '1984',
    autor: 'Джордж Оруэлл',
    year: 1949,
    coverColor: 'Серый',
    genre: 'Антиутопия'
  },
  {
    name: 'Мастер и Маргарита',
    autor: 'Михаил Булгаков',
    year: 1966,
    coverColor: 'Темно-синий',
    genre: 'Роман'
  },
  {
    name: 'Гарри Поттер и философский камень',
    autor: 'Джордж Оруэлл',
    year: 1997,
    coverColor: 'Красный',
    genre: 'Фэнтези'
  }
]
literaryBooks.push( 
  {
    name: 'Убить пересмешника',
    autor: 'Харпер Ли',
    year: 1960,
    coverColor: 'Белый',
    genre: 'Роман'
  }
)

//задание 9
const marvelBooks = [
  {
    name: 'Человек-паук: Синий',
    autor: 'Джеф Лоуб',
    year: 2002 ,
    coverColor: 'Синий ',
    genre: 'Супергероика'
  },
  {
    name: 'Гражданская война',
    autor: 'Марк Миллар',
    year: 2006,
    coverColor: 'Красный',
    genre: 'Супергероика'
  },
  {
    name: 'Дэдпул уничтожает вселенную Марвел',
    autor: 'Каллен Банн',
    year: 2011,
    coverColor: 'Красный',
    genre: 'Супергероика'
  }
]
const combinedBooks = [...literaryBooks, ...marvelBooks]

// задание 10
const booksRarityArray = combinedBooks.map((book) => 
   ({...book, rarity: book.year <= 2000})
)