
//alert("very goood!")

const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

function getValueInput() {
    console.log(input.value)
}

button.addEventListener('click', getValueInput)