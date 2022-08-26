const displayOperation = document.querySelector(".display__operation");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const displayResult = document.querySelector(".display__result")

operators[0].value = "+";
operators[1].value = "-";
operators[2].value = "X";
operators[3].value = "/";

let operator = "";
let operands = []; 
let value = 0;

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (operator, num1, num2) => {
    if (operator === "+"){
        return add(num1,num2);
    }

    else if (operator === "-"){
        return subtract(num1,num2);
    }

    else if (operator === "X"){
        return multiply(num1,num2);
    }

    else if (operator === "/"){
        return divide(num1,num2);
    }
}

displayResult.innerHTML = 0;

numbers[0].value = 1;
numbers[1].value = 2;
numbers[2].value = 3;
numbers[3].value = 4;
numbers[4].value = 5;
numbers[5].value = 6;
numbers[6].value = 7;
numbers[7].value = 8;
numbers[8].value = 9;
numbers[9].value = 0;

let arrayValue = [];

//NUMBERS
numbers.forEach(element => {
    element.addEventListener("click", () => {
        arrayValue.push(element.value);
        let valueNumber = parseInt(arrayValue.join(""));
        displayOperation.value = valueNumber;
        value = displayOperation.value;
        console.log(value);
        console.log(operands);
        refreshDisplay(element.value);
        
    })
});

//OPERATORS
operators.forEach((element) => {
    element.addEventListener("click", () =>{
        pushValues(value);
        refreshDisplay(element.value);
        value = 0;
        arrayValue = [];
        let a = operate(operator, operands[0], operands[1]);
        refreshResult(a);
        operator = element.value;
    })
})

//EQUAL SIGN
equal.addEventListener("click", (element) => {
    pushValues(value);
    value = 0;
    let result = operate(operator, operands[0], operands[1]);
    refreshResult(result);

})

function pushValues(value){
    if(value){
        operands.push(value);
    }
    console.log(operands);
}

function refreshDisplay(value){
    displayOperation.innerHTML += value;

}

function refreshResult(value){
    if(operands[1]){
        displayResult.innerHTML = value;
        operands[0] = value;
        operands.pop();
    }
    
    
    console.log(operands);
}

function addOperator(){

}


/* function recieveNumber(el){ 
    arrayValue.push(el);
    let valueNumber = arrayValue.join("");
    displayOperation.innerHTML = valueNumber;
}
 */

