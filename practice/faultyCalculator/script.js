const button = document.querySelector('#button');
const result = document.querySelector('#result');
let num1Element = document.querySelector('#num1');
let num2Element = document.querySelector('#num2');
let operatorElement = document.querySelector('#operators');
let randomid = document.querySelector('#random');
let start = true;

class Calculator {
    constructor(num1, num2, operator) {
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
    }

    add() {
        return `${this.num1} ${this.operator} ${this.num2} = ${this.num1 + this.num2}`;
    }

    sub() {
        return `${this.num1} ${this.operator} ${this.num2} = ${this.num1 - this.num2}`;
    }

    multi() {
        return `${this.num1} ${this.operator} ${this.num2} = ${this.num1 * this.num2}`;
    }

    divide() {
        let result = this.num1 / this.num2;
        result = result.toFixed(2); // Round to two decimal places
        return `${this.num1} ${this.operator} ${this.num2} = ${result}`;
    }
}

function validate(num1, num2, operator) {
    return num1 !== '' && num2 !== '' && operator !== '';
}

button.addEventListener('click', (e) => {
    e.preventDefault();

    // Get values from input fields
    let num1 = parseInt(num1Element.value);
    let num2 = parseInt(num2Element.value);
    let operator = operatorElement.value;

    // Validate inputs
    start = validate(num1Element.value, num2Element.value, operatorElement.value);
    
    if (!start) {
        result.innerHTML = `Please, fill all input`;
        // Reset inputs
        num1Element.value = '';
        num2Element.value = '';
        operatorElement.value = '';
        randomid.innerHTML = ''
    } else {
        let cal = new Calculator(num1, num2, operator);
        let random = Math.floor(Math.random() * 100) + 1;
        randomid.innerHTML = `Random value: ${random}`

        if (random > 11) {
            switch (operator) {
                case '+':
                    result.innerHTML = cal.add();
                    break;
                case '-':
                    result.innerHTML = cal.sub();
                    break;
                case '*':
                    result.innerHTML = cal.multi();
                    break;
                case '/':
                    result.innerHTML = cal.divide();
                    break;
                default:
                    result.innerHTML = `Invalid operator`;
                    break;
            }
        } else {
            switch (operator) {
                case '+':
                    result.innerHTML = cal.sub();
                    break;
                case '-':
                    result.innerHTML = cal.add();
                    break;
                case '*':
                    result.innerHTML = cal.divide();
                    break;
                case '/':
                    result.innerHTML = cal.multi();
                    break;
                default:
                    result.innerHTML = `Invalid operator`;
                    break;
            }
        }

        // Reset inputs
        num1Element.value = '';
        num2Element.value = '';
        operatorElement.value = '';
        // randomid.innerHTML = ''
    }
});
