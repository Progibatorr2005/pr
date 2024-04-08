// ______________Задание 1________________//

// let peopleWautung = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']


// function giveParcel(peopleArr) {
//     const [person] = peopleArr.splice(0, 1);
//     alert(`${person} получил(а) посылку. В очереди осталось ${peopleArr.length} человек`)
//     leaveQueueWithoutParcel()
//   }
  
//   function leaveQueueWithoutParcel(peopleArr) {
//     const [person] = peopleArr.splice(-1, 1);
//     console.log(`${person} не получил(а) посылку и ушел(ла) из очереди`)
//   }
  
//   for (let index = 0; index < 3; index++) {
//     giveParcel(peopleWaiting)
//   }
  
//   console.log("Обеденный перерыв!!!")
  
//   for (let index = 0; index < peopleWaiting.length; index) {
//     leaveQueueWithoutParcel(peopleWaiting)
//   }


// giveParcel(peopleWautung)



// ______________Задание 2________________//

// function getSumOfSequence(number){
//   let mass = [] 
//   for (let i = 1; i <= number; i++){
//     mass.push(i)
//   }
//   let result = mass[0] + mass[mass.length -1]
//   alert(result)
// }

// getSumOfSequence(5)


// ______________Задание 3-4________________//

// function indexOf(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase() == value.toLowerCase()) {
//       return i
//     }
//   }
// }

// const coffees = ["Latte", "Cuppuchino", "Americano"]
// const prices = [1.5, 0.5, 1, 2]
// let updatedPrices = prices.map((elem) => elem + 0.5)

// const coffeeName = prompt("Введите название кофе: ")
// const coffeeIndex = indexOf(coffees, coffeeName)

// if (typeof coffeeIndex !== "undefined") {
//   alert(
//     `Держите ваш любимый кофе, он стоит на ${coffeeIndex + 1} месте по популярности. Теперь он стоит ${updatedPrices[coffeeIndex]}`
//   )
// } else {
//   alert("К сожалению такого вида кофе нет в наличии.")
// }


// ______________Задание 5________________//

// let clientsMarks = []

// function askClientMark() {
//   let mark = +prompt("Как вы оцениваете нашу кофейню от 1 до 10?")
//   if (mark > 0 && mark < 11) {
//     clientsMarks.push(mark)
//   }
// }

// for (let i = 0; i < 5; i++) {
//   askClientMark()
// }

// alert(`Кофейня получила ${clientsMarks.filter((element) => element > 5).length} положительных отзывов`)
// alert(`Кофейня получила ${clientsMarks.filter((element) => element <= 5).length} отрицательных отзывов`)


// ______________Задание 6________________//

// let numbers = [10, 4, 100, -5, 54, 2]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += Math.pow(numbers[i], 3)
// }
// console.log(sum)


// let numbers = [10, 4, 100, -5, 54, 2]
// let sum = 0
// for (let number of numbers) {
//     sum += Math.pow(number, 3)
// }
// console.log(sum)


// let numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0
// numbers.forEach(function(number) {
//     sum += Math.pow(number, 3)
// });
// console.log(sum)


// let numbers = [10, 4, 100, -5, 54, 2];
// let sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + Math.pow(currentValue, 3)
// }, 0);

// console.log(sum)

