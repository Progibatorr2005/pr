// ______________Задание 1________________//


// const student = {
//     stack: ['HTML'],
//     level: 1,
//     improveLevel() {
//       this.level++; // Увеличиваем уровень студента на 1
//       if (this.level === 2) {
//         this.stack.push('CSS')
//       } else if (this.level === 3) {
//         this.stack.push('JavaScript')
//       } else if (this.level === 4) {
//         this.stack.push('React')
//       } else if (this.level === 5) {
//         this.stack.push('NodeJS')
//       } else if (this.level > 5) {
//         alert('Студент выучил все технологии!')
//       }
//       return this
//     }
//   }

//   student.improveLevel().improveLevel().improveLevel().improveLevel().improveLevel()
//   console.log(student.stack)



// ______________Задание 2________________//

//   const dog = {
//     name: 'Чарли',
//     type: 'Собака',
//     makeSound() {
//       return 'Гав-Гав'
//     }
//   }
  
//   const bird = {
//     name: 'Петя',
//     type: 'Воробей',
//     makeSound() {
//       return 'Чик-чирик'
//     }
//   };
  
//   function makeDomestic(isDomestic) {
//     console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//     return {
//       ...this,
//       isDomestic
//     };
//   }
  
//   // Используем метод bind с объектом dog
//   const domesticDog = makeDomestic.bind(dog, true)()
//   console.log(domesticDog)
  
//   // Используем метод call с объектом bird
//   const domesticBird1 = makeDomestic.call(bird, true)
//   console.log(domesticBird1)
  
//   // Используем метод apply с объектом bird
//   const domesticBird2 = makeDomestic.apply(bird, [true])
//   console.log(domesticBird2)
  
// ______________Задание 3________________//

const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: function() {
      console.log(`${this.fullName} сейчас с мячом и начинает атаку!`)
    },
    scoreGoal: function(sound) {
      console.log(`${this.fullName} забил гол! Вот это да`)
      this.celebrate(sound)
    },
    celebrate: function(sound) {
      console.log(sound)
    },
    goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`)
    }
  }
  
  const attack = footballer.attack.bind(footballer)
  const score = footballer.scoreGoal
  const substitute = footballer.goToSubstitution
  
  attack()
  score.call(footballer, 'Сиииии')
  substitute.apply(footballer, ['Paulo Dibala'])