let question1 = true
let question2 = true
let question3 = false
let q1 = false
let q2 = false
let q3 = false

while(q1 = true){
    let answer1 = confirm("JavaScript появился в 1995 году?")
    if (answer1 == question1){
        q1 = true
        alert(q1)
        alert("Верно")

    }
    else{
        alert("Введите правильный ответ")   
    }
}


while(q2 = true){
    let answer2 = confirm("Спецификация JavaScript называется ECMAScript?")
    if (answer2 === question2){
        q2 = true
        alert("Верно")
    }
    else{
        alert("Введите правильный ответ")
    }
}


while(q3 = true){
    let answer3 = confirm("JavaScript был создан за 1 месяц?")
    if (answer3 === question3){
        q3 = true
        alert("Верно")
    }
    else{
        alert("Введите правильный ответ")
    }
}
