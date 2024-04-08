// ______________Задание 1________________//

// let existedUserLogin = "the_best_user"
// let existedUserPassword = "12345678"

// let userLogin = prompt ("Введите логин")
// userLogin = userLogin.trim()
// let userPassword = prompt ("Введите пароль")
// userPassword = userPassword.trim()

// if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
//     alert(`Добро пожаловать ${userLogin}`)
// }
// else{
//     alert("Логин или пароль введены неверно!")
// }


// ______________Задание 2________________//

let task1 = 4
let task2 = 4
let task3 = 1
let task4 = 12
let task5 = 6
let correctAnswer = 0
let incorrectAnswer = 0

// let answer1 = prompt("Сколько будет 2 + 2")
// answer1 = Number(answer1)
// if (answer1 === task1) {
//     alert('Ответ верный')
//     correctAnswer = correctAnswer + 1
// }
// else{
//     alert("Ответ неверный")
//     incorrectAnswer = incorrectAnswer + 1
// }



// let answer2 = prompt("Сколько будет 2 * 2")
// answer2 = Number(answer2)
// if (answer1 === task2) {
//     alert('Ответ верный')
//     correctAnswer = correctAnswer + 1
// }
// else{
//     alert("Ответ неверный")
//     incorrectAnswer = incorrectAnswer + 1
// }



// let answer3 = prompt("У пети было 5 яблок, 3 из них он съел, 1 отдал другу. Сколько яблок у пети осталосб?")
// answer3 = Number(answer3)
// if (answer3 === task3) {
//     alert('Ответ верный')
//     correctAnswer = correctAnswer + 1
// }
// else{
    // alert("Ответ неверный")
    // incorrectAnswer = incorrectAnswer + 1
// }

let answer3 = prompt("У пети было 5 яблок, 3 из них он съел, 1 отдал другу. Сколько яблок у пети осталосб?")
answer3 = Number(answer3)
(answer3 === task3) ? alert('Ответ верный') : alert("Ответ неверный") ?  correctAnswer = correctAnswer + 1 : incorrectAnswer = incorrectAnswer + 1

/* const a = 1 */
/* (a > 10) ? console.log('ura') : console.log('blin') */



// let answer4 = prompt("У маши было 10 конфет, 2 из них она съела, 1 отдала другу. После мама дала маше еще 5 конфет .Сколько яблок у пети осталосб?")
// answer4 = Number(answer4)
// if (answer4 === task4) {
//     alert('Ответ верный')
//     correctAnswer = correctAnswer + 1
// }
// else{
//     alert("Ответ неверный")
//     incorrectAnswer = incorrectAnswer + 1
// }


// let answer5 = prompt("2 + 2 * 2")
// answer5 = Number(answer5)
// if (answer5 === task5) {
//     alert('Ответ верный')
//     correctAnswer = correctAnswer + 1
// }
// else{
//     alert("Ответ неверный")
//     incorrectAnswer = incorrectAnswer + 1
// }

// alert(`Конец теста!!! Правильные ответы: ${correctAnswer}, Неправильные ответы: ${incorrectAnswer} `)


// ______________Задание 4________________//

// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt('Введите имя нового студента!')
//     newStudent = newStudent.trim()
//     if (newStudent) {
//         alert(`Добро пожаловать ${newStudent}`)
//     }
// }


// let i = 0
// while (i < 3){
//     let newStudent = prompt('Введите имя нового студента!')
//     newStudent = newStudent.trim()
//     if (newStudent) {
//         alert(`Добро пожаловать ${newStudent}`)
//     }
//     i++
// }


// let i = 0
// do{
//     let newStudent = prompt('Введите имя нового студента!')
//     newStudent = newStudent.trim()
//     if (newStudent) {
//         alert(`Добро пожаловать ${newStudent}`)
//     }
//     i++
// }
// while (i < 3)

// ______________Задание 5________________//

// let sum = 0
// let i = 0
// while(i < 100){
//     i++
//     sum = sum + i
// }
// alert(sum)


// ______________Задание 6________________//

// let clientName = "Игорь"
// let clientsSpentForAllTime = 110
// let clientSpantToday = 25
// let discount = 0

// if (clientsSpentForAllTime > 100 || clientsSpentForAllTime < 300){
//     discount = 10
// }

// if (clientsSpentForAllTime > 300 || clientsSpentForAllTime < 500){
//     discount = 20
// }

// else{
//     discount = 30
// }

// alert(`Вам предоставленная скидка ${discount}%`)

// clientSpantToday = clientSpantToday - ((clientSpantToday / 100) * discount)
// alert(clientSpantToday)

// clientsSpentForAllTime = clientsSpentForAllTime + clientSpantToday
// alert(`Спасибо ${clientName}! К оплате ${clientSpantToday}. ЗА все время в нашем ресторане вы портатили ${clientsSpentForAllTime}`)


// ______________Задание 7________________//

// let clientName = prompt("Введите имя клиента")
// let clientsSpentForAllTime = prompt("Сколько клиент потратил за все время?")
// clientsSpentForAllTime = Number(clientsSpentForAllTime)
// let clientSpantToday = prompt("Сколько клиент потратил сегодня?")
// clientSpantToday = Number(clientSpantToday)
// let discount = 0

// if (clientsSpentForAllTime || clientSpantToday === typeof Number){
// }
// else{
//     alert("Укажите число")
//     stopProgram()
// }

// if (clientsSpentForAllTime > 100 || clientsSpentForAllTime < 300){
//     discount = 10
// }
// if (clientsSpentForAllTime > 300 || clientsSpentForAllTime < 500){
//     discount = 20
// }
// else{
//     discount = 30
// }

// alert(`Вам предоставленная скидка ${discount}%`)

// clientSpantToday = clientSpantToday - ((clientSpantToday / 100) * discount)
// alert(clientSpantToday)

// clientsSpentForAllTime = clientsSpentForAllTime + clientSpantToday
// alert(`Спасибо ${clientName}! К оплате ${clientSpantToday}. ЗА все время в нашем ресторане вы портатили ${clientsSpentForAllTime}`)


// ______________Задание 8________________//

// let userPassword = prompt("Введите пароль")

// if ((userPassword.includes('0', '1', '2', '3', '4', '5', '6', '7', '8', '9') == true)){
//     alert("Пароль валидный. Добро подаловать в аккаунт!")
//     alert(userPassword.length)
// }
// else{
//     alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.")
// }

// // if ((userPassword.length > 2 && userPassword.length < 19) && (userPassword.toUpperCase() === userPassword) && (userPassword.includes() === userPassword)){
// //     alert("Пароль валидный. Добро подаловать в аккаунт!")
// // }
// // else{
// //     alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.")
// // }