
//Elements

const prevDisplay = document.querySelector(".input-upper");
const display = document.querySelector(".input");

//Variables
let numberOne = 0, numberTwo = 0;
let operator;
let operatorSelected = false;
let result = 0;


//EventListeners

document.querySelectorAll(".item").forEach(item => {
    if (Number(item.value) <= 9 || Number(item.value) >= 0 || item.value === ".") {
        item.addEventListener("click", () => DisplayUpdate(item.value));
    } else if (item.value === "C") {
        item.addEventListener("click", DisplayClear);
    } else if (item.value === "AC") {
        item.addEventListener("click", AbsoluteClear);
    } else if (item.value === "=") {
        item.addEventListener("click", () => {
            if (!operator) {
                Calculate("none");
            } else {
                Calculate(operator);
            }
        });
    } else {
        item.addEventListener("click", function () {
            if (!operatorSelected) {
                this.classList.add("selected");

                operator = item.value;

                operatorSelected = true;

                numberOne = Number(display.textContent);
                console.log(numberOne);

                DisplayClear();

            } else if (operatorSelected) {

                numberTwo = Number(display.textContent);
                console.log(NumberTwo);

                operatorSelected = false;

                Calculate(operator);

                numberOne = result;

                numberTwo = 0;

                ResetOperations();
            }
        });
    }
})


function DisplayUpdate(value) {
    display.textContent += value;
}

function DisplayClear() {
    display.textContent = "";
}

function AbsoluteClear() {
    result = 0;
    numberOne = 0;
    numberTwo = 0;
    operator = "";
    operatorSelected = false;
    display.textContent = "";
    ResetOperations();
}

function Calculate(operator) {
    switch (operator) {
        case "+":
            result = add(numberOne, numberTwo);
            DisplayUpdate(result);
            break;
        case "-":
            result = subtr(numberOne, numberTwo);
            break;
        case "*":
            result = multiply(numberOne, numberTwo);
            DisplayUpdate(result);
            break;
        case "/":
            result = divide(numberOne, numberTwo)
            DisplayUpdate(result);
            break;
        case "none":
            DisplayUpdate(display.value);
            break;
    }
}

function ResetOperations() {
    document.querySelectorAll(".oper").forEach(operator => {
        operator.classList.remove("selected");
    })
}

const add = (num1, num2) => num1 + num2;
const subtr = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;