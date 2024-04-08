console.log(+'50') //неявное
console.log(Number('50'))

console.log(Number('100')) //явное

console.log('' + 1) //неявное
console.log(String(1))

console.log(String(1)) //явное

console.log(Boolean(0)) //явное

console.log(+'001') //неявное
console.log(Number('001'))

console.log(1 + '') //неявное
console.log(String('1'))

console.log(Boolean(1)) //явное

console.log(String(1)) //явное

console.log(Number('Hello World')) //явное



console.log(String(console.log))
console.log(Number(console.log))
console.log(Boolean(console.log))

console.log(String({name: 'Maxim'}))
console.log(Number({name: 'Maxim'}))
console.log(Boolean({name: 'Maxim'}))

console.log(String(Symbol('key')))
// console.log(Number(Symbol('key')))
console.log(Boolean(Symbol('key')))

console.log(String(''))
console.log(Number(''))
console.log(Boolean(''))

console.log(String(0))
console.log(Number(0))
console.log(Boolean(0))

console.log(String(-10))
console.log(Number(-10))
console.log(Boolean(-10))

console.log(String('-105'))
console.log(Number('-105'))
console.log(Boolean('-105'))



console.log(Number(' 1 2 3 4 5'))
// NaN
console.log(Number('1234 5'))
// NaN
console.log(Number('12345'))
// 12345
console.log(String(false))
// false
console.log(Boolean(00000000))
// false
console.log(Boolean(0.0000001))
// true 
console.log(String(undefined))
// underfined
console.log(Number('100f'))
// 
console.log(Number('100'))
// 100
console.log(Number('00000001'))
// 1