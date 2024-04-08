// // ______________Задание 1________________//

// const myName = 'Илья'
// const programmingLanguage = 'js'
// const courseCreatorName = 'Никита Михайович'
// const reasonText = 'asdasdasdasasasasd'
// const numberOfMonth = 1

// let myTextInfo = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык 
//     программирования ${programmingLanguage} на курсе по ${programmingLanguage} у 
//     ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. 
//     До этого я изучал(а) ${programmingLanguage} ${numberOfMonth}! месяцев. Я уверен(а), что пройду данный курс до конца`


// // ______________Задание 2________________//

// let result = myTextInfo.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
// console.log(result)
// console.log(result[0], result[264])
// console.log(result.length)

// // // ______________Задание 3________________//

// let userName = prompt('Как вас зовут?')
// userName = userName.toLowerCase()
// userName = userName.replaceAll(' ', '')
// // alert(userName)


// // ______________Задание 4________________//

// let userAge = prompt('Сколько вам лет?')
// userAge = Number(userAge)
// userAge = userAge.replace(' ', '')
// alert(`Вас зовут ${userName} и вам ${userAge} лет`)


// ______________Задание 5________________//

// let userString = prompt('Введите текст для обрезки')
// let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
// let endSliceIndex = prompt('Введите индекс, rjnjhsv нужно закончить обрезку строки')
// startSliceIndex = Number(startSliceIndex)
// endSliceIndex = Number(endSliceIndex)
// alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`)


// ______________Задание 6________________//

// let userText = prompt('Введите текст')
// let wordFromText = prompt('Введите слово из текста')
// let indexOfWord = wordFromText.indexOf(userText)
// userText = userText.slice(0, indexOfWord)
// alert(`Результат: ${userText}`)

true
// ______________Задание 7________________/

let javaScriptDescription = "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
let m = Math.floor(javaScriptDescription.length)
let sliceText = javaScriptDescription.slice(0, (m)/2)
sliceText = sliceText.replaceAll(" ", '')
sliceText = sliceText.replaceAll("а", 'А')
sliceText = sliceText.repeat(3)
let index = sliceText.length / 2
alert(sliceText)
alert(sliceText[index])