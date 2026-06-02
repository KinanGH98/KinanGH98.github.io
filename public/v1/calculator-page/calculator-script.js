class Calculator
{
    constructor(previousOperandText, currentOperandText)
    {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear()
    {
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = undefined;
    }

    delete()
    {
        this.currentOperand = this.currentOperand.slice(0, -1);
        if (this.currentOperand === '') this.currentOperand = '0';
    }

    appendNumber(number)
    {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') this.currentOperand = '';
        this.currentOperand += number.toString();
    }

    chooseOperation(operation)
    {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') this.compute();
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
    }

    compute()
    {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation)
        {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay()
    {
        this.currentOperandText.innerHTML = this.currentOperand;
        this.previousOperandText.innerHTML = this.previousOperand;

        if (this.operation != null)
            this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;
    }
}

const numberBtns = Array.from(document.querySelectorAll("[data-number]"));
const operationBtns = Array.from(document.querySelectorAll("[data-operation]"));
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const clearBtn = document.querySelector("[data-clear]");
const previousOperandTxt = document.querySelector("[data-previous-operand]");
const currentOperandTxt = document.querySelector("[data-current-operand]");

let calculator = new Calculator(previousOperandTxt, currentOperandTxt);

numberBtns.forEach(button =>
    button.addEventListener('click', () =>
    {

        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    }));

operationBtns.forEach(button => button.addEventListener('click', () =>
{
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
}));

equalsBtn.addEventListener('click', () =>
{
    calculator.compute();
    calculator.updateDisplay();
});

clearBtn.addEventListener('click', () =>
{
    calculator.clear();
    calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () =>
{
    calculator.delete();
    calculator.updateDisplay();
});

// Keyboard shortcuts.
document.addEventListener('keydown', (e) =>
{
    switch (e.key)
    {
        case 'Enter':
        case'=':
            equalsBtn.click();
            e.preventDefault();
            break;
        case 'Backspace':
            deleteBtn.click();
            break;
        case 'Delete':
            clearBtn.click();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            for (let i = 0; i < numberBtns.length; i++)
            {
                if (numberBtns[i].innerText === e.key)
                {
                    numberBtns[i].click();
                    break;
                }
            }
            break;
        case '+':
        case '-':
            operationBtns.find(b => b.innerText === e.key).click();
            break;
        case '*':
            operationBtns.find(b => b.innerText === '×').click();
            break;
        case '/':
            operationBtns.find(b => b.innerText === '÷').click();
            break;
    }
});