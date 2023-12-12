
/*alert("very goood!")*/

const input = document.querySelector('.input-task')
const button = document.querySelector('.button-add-task')
const listComplete = document.querySelector('.list-tasks')

/*
function getValueInput() {
    console.log(input.value)
}*/

let myListItems = []

function addNewTask() {
    myListItems.push({
        task: input.value,
        completed: false
    })

    input.value = ''    /* will clean the input */

    showTasks()

    /*console.log(myListItems);*/
}

function showTasks() {
    let newLi = ''

    /*['comprar café', 'estudar programação']......*/
    myListItems.forEach((item, index) => {
        newLi = newLi + `

         <li class="task ${item.completed && "done"}">
            <img src="./img/check_vintage.png" alt="check-task" onclick="completeTask(${index})">
            <p>${item.task}</p>
            <img src="./img/trash_vintage.png" alt="trash-task" onclick="deleteItem(${index})">
         </li>

        `
    })

    listComplete.innerHTML = newLi

    localStorage.setItem ('tasks', JSON.stringify(myListItems)) /*turns everything into string*/

}

function completeTask (index) {
    console.log('posição', index)
    myListItems[index].completed = !myListItems[index].completed
    showTasks()
}

function deleteItem (index) {
    myListItems.splice(index, 1)
    console.log('posição', index)
    showTasks()
}

function reloadTasks () {
    const localStorageTasks = localStorage.getItem('tasks')

    if (localStorageTasks) {
        myListItems = JSON.parse(localStorageTasks) /*transform back to object*/ 
    }
    console.log('tasks here', localStorageTasks)

    showTasks()
}

reloadTasks()
button.addEventListener('click', addNewTask)