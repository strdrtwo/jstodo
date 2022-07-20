"use strict"

const field = document.querySelector('.field')
const divlist = document.querySelector('.list')
const button =  document.querySelector('.add') 

function createTask(value) {
    const task = document.createElement('div');
    task.textContent = (new Date()).toLocaleTimeString() + '.  ' + value;
    task.classList.add('task')

    let input = document.createElement('input');
    input.addEventListener('click', completeTask)
    input.classList.add('status')
    input.type = 'checkbox';
    task.append(input)

    return task
}

function completeTask(event){
    const target = event.target;
    // let checkContainer = target.parentElement
    // console.log(checkContainer)
    if (target.checked) {
        target.parentElement.classList.add('succes')
    } else {target.parentElement.classList.remove('succes')}
}

function addTask(){
    if (field.value) {
        const newTask = createTask(field.value)
        divlist.appendChild(newTask)
        field.value = ''
    }
}
button.addEventListener('click', addTask)
