// ______________Задание 1________________//

// //function expression
// let GetName1 = function(name){
//     alert(`Имя равно ${name}`)
// }
// GetName1(2)

// //function declaration
// function GetName2(name){
//     alert(`Имя равно ${name}`)
// }
// GetName2(5)

// //стрелочная функция
// let GetName3 = (name) => alert(`Имя равно ${name}`)
// GetName3(23213)



// ______________Задание 2________________//

// function getSumOfNumbers(number, type = 'odd'){
//     let SumNum = 0
//         if (type === "odd"){}
//             for (let i = 0; i <= number; i++){
//                 if (i % 2 == 1){
//                     SumNum += i
//                     return SumNum
//                 }
//             }
//         if (type === "even"){
//             for (let i = 0; i <= number; i++){
//                 if (i % 2 == 0){
//                     SumNum += i
//                     return SumNum
//                 }
//             }
//         }
//         if (type === ""){
//             for (let i = 0; i <= number; i++){
//                 SumNum += i
//                 return SumNum
//             }
//         }
// }
// alert(getSumOfNumbers(10, "odd"))
// alert(getSumOfNumbers(10, "even"))
// alert(getSumOfNumbers(10, ""))


// ______________Задание 3________________//


// function getDivisorsCount(number = 1){
//     let divisors = 0
//     if (number < 0 || (number % 1 === 0) === false){
//         alert("number дложно быть целым числом и больше нуля!")
//     }
// else {
//     for (let index = 1; index <= number; index++) {
//       if (number % index === 0) {
//         divisors++
//       }
//     }
//   }

//   return divisors
// }


// alert(getDivisorsCount(12))




// ______________Задание 4________________//


function checkQuestionAnswer(question, correctAnswer) {
    correctAnswer = correctAnswer.toLowerCase()
    let a = prompt(question).toLowerCase()
    if(correctAnswer === a){
        alert("Верно!")
    }
    else{
        alert("Неверно!")
    }
    console.log(a, correctAnswerc)
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')


/* console.error() */