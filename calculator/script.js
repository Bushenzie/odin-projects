
//TODO design




//Elements
const display = document.querySelector(".input");

//Variables
let nums = [], iteration = 0, operator, result;
let operatorSelected = false, dotInNum = false;

//EventListeners
document.querySelectorAll(".item").forEach(item => {
    if (Number(item.value) <= 9 || Number(item.value) >= 0) {
        item.addEventListener("click", () => NumbersEvent(item));
    } else if (item.value === ".") {
        item.addEventListener("click", () => DotEvent(item))
    } else if (item.value === "C") {
        item.addEventListener("click", () => DisplayClear());
    } else if (item.value === "AC") {
        item.addEventListener("click", () => AbsoluteClear());
    } else if (item.value === "=") {
        item.addEventListener("click", () => CalculatingEvent());
    } else {
        item.addEventListener("click", () => OperatingEvent(item));
    }
})

//Keyboard Support
document.addEventListener("keydown", (e) => {
    document.querySelectorAll(".item").forEach(item => {
        if (e.key === item.value) {
            if (e.key === ".") {
                DotEvent(item);
            } else if (e.key === "/" || e.key === "*" || e.key === "+" || e.key === "-") {
                OperatingEvent(item);
            } else if (e.key !== "=") {
                NumbersEvent(item);
            }
        } else if (e.key.toLowerCase() === "c") {
            DisplayClear();
        } else if (e.key === "Delete") {
            AbsoluteClear();
        } else if (e.key === "Enter" || e.key === "=") {
            CalculatingEvent();
        }
    })
})




//Events
function NumbersEvent(item) {
    if (result && !operator) {
        AbsoluteClear();
        DisplayUpdate(item.value);
    } else DisplayUpdate(item.value);
}

function DotEvent(item) {
    if (!display.textContent.includes(".")) {
        DisplayUpdate(item.value);
    }
}

function OperatingEvent(item) {
    operator = item.value;
    if (iteration === 0) {
        nums.push(Number(display.textContent));
        iteration++;
    }
    DisplayClear();
}

function CalculatingEvent() {
    if (nums.length === 1 && operator && display.textContent !== "") {
        nums.push(Number(display.textContent));
        Calculate(operator);
    } else {
        Calculate(operator);
    }
}

//Functions
function DisplayUpdate(value) {
    display.textContent += value;
}

function DisplayClear() {
    display.textContent = "";
}

function AbsoluteClear() {
    result = undefined;
    iteration = 0;
    operator = undefined;
    operatorSelected = false;
    display.textContent = "";
    ResetOperations();
    ArrayClear();
}

function Calculate(operator) {
    switch (operator) {
        case "+":
            result = add(nums[0], nums[1]);
            ArrayClear()
            nums.push(result);


            ResetOperations();
            DisplayClear();
            DisplayUpdate(result);
            break;
        case "-":
            result = subtr(nums[0], nums[1]);
            ArrayClear()
            nums.push(result);


            ResetOperations();
            DisplayClear();
            DisplayUpdate(result);
            break;
        case "*":
            result = multiply(nums[0], nums[1]);
            ArrayClear()
            nums.push(result);


            ResetOperations();
            DisplayClear();
            DisplayUpdate(result);
            break;
        case "/":
            result = divide(nums[0], nums[1]);
            ArrayClear()
            nums.push(result);


            ResetOperations();
            DisplayClear();
            DisplayUpdate(result);
            break;
        default:
            display.textContent = display.textContent;
            break;
    }
}

function ArrayClear() {
    nums.splice(0, nums.length);
}

function ResetOperations() {
    document.querySelectorAll(".oper").forEach(operator => {
        operator.classList.remove("selected");
    })
    operator = undefined;
    oneDotPerNum = false;
}

const add = (num1, num2) => num1 + num2;
const subtr = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;