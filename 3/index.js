let num = 12
console.log(Number(num), Boolean(num), String(num))

let bool = true
console.log(Number(bool), Boolean(bool), String(bool))

let str = 'asd'
console.log(Number(str), Boolean(str), String(str))

let null1 = null
console.log(Number(null1), Boolean(null1), String(null1))

let q
console.log(Number(q), Boolean(q), String(q))

let smb = Symbol("dfgdf")
console.log(Boolean(smb), Boolean(smb))

let bnum = 2n
console.log(Number(bnum), Boolean(bnum), String(bnum))

let d = {
    sd: 34,
    c: 45
}
console.log(Number(d), Boolean(d), String(d))