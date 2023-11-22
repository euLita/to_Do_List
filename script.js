
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
    myListItems.push(input.value)
    input.value = ''    /* will clean the input */

    showTasks()

    /*console.log(myListItems);*/
}

function showTasks() {
    let newLi = ''

    /*['comprar café', 'estudar programação']......*/
    myListItems.forEach((task) => {
        newLi = newLi + `

         <li class="task">
            <img src="./img/check_vintage.png" alt="check-task">
            <p>${task}</p>
            <img src="./img/trash_vintage.png" alt="trash-task">
         </li>

        `
    })

    listComplete.innerHTML = newLi


}

button.addEventListener('click', addNewTask)