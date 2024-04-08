// ______________Задание 1________________//

// const users = [
//     {
//         username: 'David',
//         status: 'online',
//         lastActivity: 10
//     },
//     {
//         username: 'Lucy',
//         status: 'offline',
//         lastActivity: 22
//     },
//     {
//         username: 'Bob',
//         status: 'online',
//         lastActivity: 104
//     }
// ]
// let onlineUsers = users.filter(user => user.status === 'online')
// let onlineUserNames = onlineUsers.map(user => user.username).join(', ')
// alert(`Сейчас в онлайн следующие пользователи: ${onlineUserNames}`)


// ______________Задание 2________________//

// function giveTalonsInOrder(patients, orders) {
//     const sortedPatients = orders.map(orderId => {
//         const patient = patients.find(patient => patient.id === orderId)
//         return patient
//     })
//     return sortedPatients
// }

// const ordersArr = [4, 2, 1, 3]
// const people = [
//     { id: 1, name: "Максим" },
//     { id: 2, name: "Николай" },
//     { id: 3, name: "Ангелина" },
//     { id: 4, name: "Виталий" }
// ]
// const result = giveTalonsInOrder(people, ordersArr)
// alert('result', result)


// ______________Задание 3________________//

// function handleObject(obj, key, action) {
//     if (action === 'get') {
//         return obj[key]
//     }
//     else if (action === 'add') {
//         obj[key] = ''
//         return obj
//     }
//     else if (action === 'delete') {
//         delete obj[key]
//         return obj
//     }
//     else {
//         return obj
//     }
// }
// let student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript'
// }
// let result = handleObject(student, 'programmingLanguage', 'delete')
// console.log('result', result)


// ______________Задание 4________________//

// function giveJobToStudent(student, jobName) {
//     const updatedStudent = { ...student }
//     updatedStudent.job = jobName
//     alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${jobName}`)
//     return updatedStudent
// }

// const student = {
//     fullName: "Максим",
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React']
// }
// const updatedStudent = giveJobToStudent(student, 'веб-разработчик')
// console.log(updatedStudent)


// ______________Задание 5________________//

// const groceries = {
//     "Orange Juice": {
//         price: 1.5,
//         discount: 10
//     },
//     "Chocolate": {
//         price: 2,
//         discount: 0
//     }
// }

// function getTotalPriceOfShoppingBag(shoppingBag) {
//     let total = 0
//     shoppingBag.forEach(item => {
//         const product = item.product
//         const quantity = item.quantity
//         const price = groceries[product].price
//         const discount = groceries[product].discount
//         const totalPriceForProduct = price * quantity * (1 - discount / 100)
//         total += totalPriceForProduct
//     })
//     return total.toFixed(2)
// }

// const shoppingBag = [
//     { product: 'Chocolate', quantity: 3 },
//     { product: 'Orange Juice', quantity: 23 },
// ]

// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
// console.log('totalPrice', totalPrice)


// ______________Задание 6________________//

// function getRandomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// function startGame(heroPlayer, enemyPlayer) {
//     while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
//         const random = getRandomNumberInRange(0, 1)
//         if (random === 0) {
//             heroPlayer.heatEnemy(enemyPlayer)
//         } else {
//             enemyPlayer.heatHero(heroPlayer)
//         }
//     }

//     let winner
//     let loser

//     if (heroPlayer.health > 0) {
//         winner = heroPlayer
//         loser = enemyPlayer
//     } else {
//         winner = enemyPlayer
//         loser = heroPlayer
//     }
//     alert(`${winner.name} победил! У него осталось ${winner.health} здоровья.`)
// }
// const hero = {
//     name: 'Batman',
//     health: 100,
//     heatEnemy: function(enemy) {
//         enemy.health -= 10
//     }
// }

// const enemy = {
//     name: 'Joker',
//     health: 100,
//     heatHero: function(hero) {
//         hero.health -= 10
//     }
// }
// startGame(hero, enemy)


// ______________Задание 7________________//

// function getKiller(suspectInfo, deadPeople) {
//     for (let suspect in suspectInfo) {
//         if (deadPeople.every(deadPerson => suspectInfo[suspect].includes(deadPerson))) {
//             return suspect
//         }
//     }
//     return "Преступник не найден"
// }

// // Пример использования функции
// const killer = getKiller(
//     {
//         'James': ['Jacob', 'Bill', 'Lucas'],
//         'Johnny': ['David', 'Kyle', 'Lucas'],
//         'Peter': ['Lucy', 'Kyle'],
//     },
//     ['Lucas', 'Bill']
// )
// console.log(`Убийца ${killer}`)


// ______________Задание 8________________//

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
function getWinner(applicants, winnerObject) {
    const keys = Object.keys(applicants)
    const randomIndex = getRandomNumberInRange(0, keys.length)
    const randomKey = keys[randomIndex]
    const winner = applicants[randomKey]
    return { ...winnerObject, ...winner}
}
const todaysWinner = {
    prize: '10 000$'
}
const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25
    },
    '201': {
        name: 'Светлана',
        age: 20
    },
    '304': {
        name: 'Екатерина',
        age: 35
    }
}

const resultWinner = getWinner(winnerApplicants, todaysWinner)
console.log('resultWinner', resultWinner)