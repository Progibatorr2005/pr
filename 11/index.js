// ______________Задание 1________________//


// // //innerHTML
// document.body.innerHTML = `
//     <form class="create-user-form">
//         <label>
//             Имя
//             <input type="text" name="userName" placeholder="Введите ваше имя">
//         </label>
//         <label>
//             Пароль
//             <input type="password" name="password" placeholder="Придумайте Пароль">
//         </label>
//         <button type="submit">Подтвердить</button>
//     </form>
// `


// document.createElement
// const form = document.createElement('form')
// form.classList.add('create-user-form')
// const label1 = document.createElement('label')
// label1.textContent = 'Имя'
// const input1 = document.createElement('input')
// input1.setAttribute('type', 'text')
// input1.setAttribute('name', 'userName')
// input1.setAttribute('placeholder', 'Введите ваше имя')
// label1.appendChild(input1)
// const label2 = document.createElement('label')
// label2.textContent = 'Пароль'
// const input2 = document.createElement('input')
// input2.setAttribute('type', 'password')
// input2.setAttribute('name', 'password')
// input2.setAttribute('placeholder', 'Придумайте пароль')
// label2.appendChild(input2)
// const button = document.createElement('button')
// button.setAttribute('type', 'submit')
// button.textContent = 'Подтвердить'
// form.appendChild(label1)
// form.appendChild(label2)
// form.appendChild(button)
// document.body.appendChild(form)

// ______________Задание 2________________//


document.addEventListener('DOMContentLoaded', function() {
  const tasks = [
    {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
    },
    {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
    },
    {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
    },
  ]

  function createTaskElement(task) {
    const taskItem = document.createElement('div')
    taskItem.classList.add('task-item')
    taskItem.setAttribute('data-task-id', task.id)

    const mainContainer = document.createElement('div')
    mainContainer.classList.add('task-item__main-container')

    const mainContent = document.createElement('div')
    mainContent.classList.add('task-item__main-content')

    const taskText = document.createElement('span')
    taskText.classList.add('task-item__text')
    taskText.textContent = task.text

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('task-item__delete-button', 'default-button', 'delete-button')
    deleteButton.setAttribute('data-delete-task-id', task.id)
    deleteButton.textContent = 'Удалить'

    deleteButton.addEventListener('click', function() {
      const taskId = task.id
      const taskIndex = tasks.findIndex(task => task.id === taskId)
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1)
        renderTasks()
      }
    })

    mainContent.appendChild(taskText)
    mainContent.appendChild(deleteButton)

    mainContainer.appendChild(mainContent)

    taskItem.appendChild(mainContainer)

    return taskItem
  }

  const tasksList = document.querySelector('.tasks-list')

  function renderTasks() {
    tasksList.innerHTML = ''
    tasks.forEach(task => {
      const taskElement = createTaskElement(task)
      tasksList.appendChild(taskElement)
    })
  }

  renderTasks()

  const createTaskForm = document.getElementById('createTaskForm')
  const errorMessageBlock = document.querySelector('.error-message-block')

  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const taskTextInput = document.getElementById('taskText')
    const taskText = taskTextInput.value.trim()

    if (taskText === '') {
      errorMessageBlock.textContent = 'Название задачи не должно быть пустым'
    } else {
      errorMessageBlock.textContent = ''
      const newTask = {
        id: Date.now().toString(),
        completed: false,
        text: taskText,
      }

      tasks.push(newTask)
      renderTasks()

      taskTextInput.value = ''
    }
  })
})







function toggleTheme() {
    const body = document.body
    const taskItems = document.querySelectorAll('.task-item')
    const buttons = document.querySelectorAll('button')

    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme')
      taskItems.forEach(item => {
        item.style.color = 'initial'
      })
      buttons.forEach(button => {
        button.style.border = 'none'
      })
    } else {
      body.classList.add('dark-theme')
      taskItems.forEach(item => {
        item.style.color = '#FFFFFF'
      })
      buttons.forEach(button => {
        button.style.border = '1px solid #FFFFFF'
      })
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      toggleTheme()
    }
  })