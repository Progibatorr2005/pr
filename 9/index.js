// ______________Задание 1________________//

// function addZero(number) {
//     return number < 10 ? "0" + number : String(number)
// }

// function getDateFormat(date, separator = '.') {
//     const day = addZero(date.getDate());
//     const month = addZero(date.getMonth() + 1)
//     const year = date.getFullYear()

//     return `${day}${separator}${month}${separator}${year}`
// }

// console.log(getDateFormat(new Date())) // 06.04.2022
// console.log(getDateFormat(new Date(), '-')) // 06-04-2022


// ______________Задание 2________________//

// function convertMsToDays(milliseconds) {
//     const millisecondsInDay = 1000 * 60 * 60 * 24
//     return Math.round(milliseconds / millisecondsInDay)
// }
// function getDaysBeforeBirthday(nextBirthdayDate) {
//     const currentDate = new Date()
//     const currentYear = currentDate.getFullYear()
    
//     nextBirthdayDate.setFullYear(currentYear)
    а
//     if (nextBirthdayDate.getTime() < currentDate.getTime()) {
//         nextBirthdayDate.setFullYear(currentYear + 1)
//     }
    
//     const difference = nextBirthdayDate.getTime() - currentDate.getTime()
//     return convertMsToDays(difference)
// }

// const nextBirthdayDate = new Date('2024-06-26')
// const daysBeforeBirthday = getDaysBeforeBirthday(nextBirthdayDate)
// console.log(`До вашего дня рождения осталось ${daysBeforeBirthday} дней.`)


// ______________Задание 3________________//

// function addDays(date, days = 1) {
//     const newTimestamp = date.getTime() + (days * 24 * 60 * 60 * 1000)
//     return new Date(newTimestamp)
// }


// const currentDate = new Date()
// const newDate = addDays(currentDate, 5)
// console.log(newDate)


// ______________Задание 4________________//

function allowVisa(people) {
    const currentDate = new Date()
    return people.filter(person => {а
        const [day, month, year] = person.passportExpiration.split('.')
        const expirationDate = new Date(`${year}-${month}-${day}`)
        return expirationDate > currentDate && !person.criminalRecord
    })
}

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '2023-06-19',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '2021-06-04',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '2022-07-31',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '2021-12-31',
    },
]

const result = allowVisa(peopleWithVisa)
console.log('result', result)