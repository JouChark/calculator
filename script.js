let button = document.querySelectorAll('button.button')
let display = document.getElementById('display');
let clearText = document.getElementById('clear');
let decimal = document.getElementById('decimal')
let operator = '';
let lastNumber = '';
let firstNumber;
let secondNumber;

    // Get values
button.forEach((button) => {
    button.addEventListener('click', () => {
        displayNumbers(button.value)
    })
})

document.addEventListener('keydown', function(event) {
    if (event.key >= 0 || event.key <= 9 || event.key === '.' || event.key === '=' ||
        event.key === '+' ||  event.key === '-' || event.key === '*' || event.key === '/' ||
        event.key === '%' || event.key === 'Backspace' || event.key === 'Escape') {
            displayNumbers(event.key)
        }
    if (event.key === 'Enter') {
        displayNumbers('=')
    }
})

    // Display numbers and call operation functions
function displayNumbers(value) {
    clearText.textContent = 'C'
        if (value === '+' || value === '-' || 
            value === '/' || value === '*') {
            if (operator.length === 0) {
                operator = value
                firstNumber = Number(lastNumber)
                lastNumber = ''
            } else {
                operate(operator)
                operator = value
                lastNumber = ''
            }
        } else if (value === '%') {
            lastNumber /= 100
            display.placeholder = lastNumber;
        } else if (value === '=') {
            if (operator.length !== 0 && lastNumber.length !== 0) {
                operate(operator)
                operator = ''
                lastNumber = firstNumber
            } 
        } else if (value === 'Escape') {
            clear()
        } else if (value === 'Backspace') {
            lastNumber = lastNumber.slice(0, - 1)
            display.placeholder = lastNumber
        } else if (value === '.') {
            if (lastNumber.split('.').length > 1) {
                decimal.setAttribute('disabled', 'disabled')
            }
            if (lastNumber.split('.').length === 1) {
                decimal.removeAttribute('disabled')
                lastNumber += value;
                display.placeholder = lastNumber;
            }
        } else if (lastNumber.length < 7) {
            lastNumber += value;
            display.placeholder = lastNumber;
            if (lastNumber[0] === '0') {
                lastNumber = 0
                lastNumber = ''
            }
        }
}

    // Make calculations
function operate(value) {
    secondNumber = Number(lastNumber)
    if (value == '+') {
        add(firstNumber, secondNumber);
    }
    if (value == '-') {
        subtract(firstNumber, secondNumber);
    }
    if (value == '*') {
        multiply(firstNumber, secondNumber);
    }
    if (value == '/') {
        divide(firstNumber, secondNumber);
    }
}

function add(x, y) {
    let result = +(x + y).toFixed(3)
    display.placeholder = result
    firstNumber = result
}

function subtract(x, y) {
    let result = +(x - y).toFixed(3)
    display.placeholder = result
    firstNumber = result
}

function multiply(x, y) {
    let result = +(x * y).toFixed(3)
    display.placeholder = result
    firstNumber = result
}

function divide(x, y) {
    if (y === 0) {
        display.placeholder = 'ERROR'
    } else {
        let result = +(x / y).toFixed(3)
        display.placeholder = result
        firstNumber = result 
    }
}

    // Reset calculator
function clear() {
    operator = '';
    lastNumber = '';
    firstNumber;
    secondNumber;
    display.placeholder = ''
    clearText.textContent = 'AC'
    decimal.removeAttribute('disabled')
}
