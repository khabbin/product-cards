import { commentsData } from "./comments.js"

//задание 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbersArray = numbers.filter(number => number > 5);

//задание 3 
const furnitures = ['стул', 'стол', 'шкаф', 'диван', 'холодильник'];
 
//задание 4
const reverseArray = array => {
  const arrayCopy = [...array]
  return arrayCopy.reverse()
}
//задание 7
const filteredByEmeil = commentsData.filter(userData => userData.email.includes('.com'))

//задание8
const idFilter = commentsData.map(user =>
  ({...user, postId: user.id <= 5 ? 2 : 1})
)

//задание 9
const commentsIdAndEmeilArray = commentsData.map((user) => ({id: user.id, emeil: user.email}))

//задание 10 
const isInvalidPropertyCommentsArray = commentsData.map(user => ({...user, isInvalid: user.body.length>=180}));

//задание 11
const commentsEmeils = commentsData.reduce((accumulator, user) => {
  accumulator.push(user.email);
  return accumulator
}, [])

//11 задание через map
const emailAddressesArray = commentsData.map(comment => comment.email);


//задание 12 методами join и toString
const emeilAddressesStringJoinMethod = emailAddressesArray.join();
const emeilAddressesStringToStringMethod = emailAddressesArray.toString();
