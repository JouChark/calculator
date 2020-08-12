let button = document.querySelectorAll('button.button')
let p = document.getElementById('display');
let operator;
let lastNumber = '';
let firstNumber;

button.forEach((button) => {
    button.addEventListener('click', () => {
        operate(button.value)
    })
})

function operate(value) {
    if (value == '+' || value == '-' || value == '/' || value == '*'){
            operator = value
            firstNumber = Number(lastNumber)
            number = ''
    } else if (button.value == '=') {
        if (value == '+') {
            add(firstNumber, lastNumber);
        }
        if (value == '-') {
            subtract(firstNumber, lastNumber);
        }
        if (value == '*') {
            multiply(firstNumber, lastNumber);
        }
        if (value == '/') {
            divide(firstNumber, lastNumber);
        }
    } else {
        lastNumber += Number(value)
        p.textContent = number
    }
}

function add(x, y) {
    let result = x + y
    firstNumber = result
    operator = ''
    p.textContent = result
}

function subtract(x, y) {
    let result = x - y
    firstNumber = result
    operator = ''
    p.textContent = result
}

function multiply(x, y) {
    let result = x * y
    firstNumber = result
    operator = ''
    p.textContent = result
}

function divide(x, y) {
    let result = x / y
    firstNumber = result
    operator = ''
    p.textContent = result
}