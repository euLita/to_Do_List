
/*alert("very goood!")*/

const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
/*
function getValueInput() {
    console.log(input.value)
}*/

let myListItems = []

function addNewTask () {
    myListItems.push(input.value)

    console.log(myListItems);
}

button.addEventListener('click', addNewTask)