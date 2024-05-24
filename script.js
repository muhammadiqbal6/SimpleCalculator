let currentInput = '';
let operator = '';
let result = 0;

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = '' + number;
    } else {
        currentInput += number;
    }
    updateScreen();
}

function appendOperator(op) {
    operator = op;
    result = parseFloat(currentInput);
    currentInput = '0';
    updateScreen();
}

function clearScreen() {
    currentInput = '0';
    operator = '';
    result = 0;
    updateScreen();
}

function calculate() {
    switch (operator) {
        case '+':
            result += parseFloat(currentInput);
            break;
        case '-':
            result -= parseFloat(currentInput);
            break;
        case '*':
            result *= parseFloat(currentInput);
            break;
        case '/':
            result /= parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').innerText = currentInput;
}
