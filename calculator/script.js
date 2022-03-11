
//TODO dot fix
//TODO design
//TODO adding při resultu hází předchozí číslo




//Elements
const display = document.querySelector(".input");

//Variables
let nums = [], iteration = 0, operator, result;
let operatorSelected = false, oneDotPerNum = false;

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
            if (nums.length === 1 && operator && display.textContent !== "") {
                nums.push(Number(display.textContent));
                Calculate(operator);
            } else {
                Calculate(operator);
            }
        });
    } else {
        item.addEventListener("click", () => {
            operator = item.value;
            if (iteration === 0) {
                nums.push(Number(display.textContent));
                iteration++;
            }

            Debug();
            DisplayClear();
        });
    }
})


function Debug() {
    console.log(nums);
}

function DisplayUpdate(value) {
    display.textContent += value;
}

function DisplayClear() {
    display.textContent = "";
}

function AbsoluteClear() {
    result = undefined;
    nums.splice(0, nums.length);
    iteration = 0;
    operator = undefined;
    operatorSelected = false;
    display.textContent = "";
    ResetOperations();
    Debug();
}

function Calculate(operator) {
    Debug();
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