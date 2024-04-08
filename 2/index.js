let num = 123
num = "123"
alert(num)

let str = "hello"
str = 321
alert(str)

let bool = false
bool = null
alert(bool)

let ageOfPerson1 = 18
let ageOfPerson2 = '20'
ageOfPerson2 = ageOfPerson1
console.log(ageOfPerson2, typeof ageOfPerson2)

let nameOfAnimal1 = null
let nameOfAnimal2 = 'Charlie'
nameOfAnimal2 = nameOfAnimal1
console.log(nameOfAnimal2, typeof nameOfAnimal2)

const bestProgrammingLanguage1 = 'JavaScript'
const bestProgrammingLanguage2 = 'Java'
console.log('Переменные const переопределить нельзя', 'bestProgrammingLanguage1 = ', bestProgrammingLanguage1, typeof bestProgrammingLanguage1, 'bestProgrammingLanguage2 = ', bestProgrammingLanguage2, typeof bestProgrammingLanguage2)

let initialValue1
let initialValue2 = 0
initialValue2 = initialValue1
console.log(initialValue2, typeof initialValue2)

// var isJavaScriptProgrammer1 = true
// var isJavaScriptProgrammer2 = false
console.log('var является устаревшим!')

delete isJavaScriptProgrammer1
delete isJavaScriptProgrammer2


let isJavaScriptProgrammer1 = true
let isJavaScriptProgrammer2 = false
isJavaScriptProgrammer2 = isJavaScriptProgrammer1
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)