//     private void Decimal_Clicked(object sender, EventArgs e)
//     {
//         // Since only one button uses the decimal_clicked handler, maybe we don't need all that code
//         //Button button = (Button )sender;
//         //string pressed = button.Text;
//         string pressed = Decimal.Text;
//         //Makes sure only one comma appears
//         if(!currentNumber.Contains(",")) 
//         {
//             currentNumber += pressed;
//             Total.Text = currentNumber;
//         }
//     }


let currentNumber = "0";
let operatorVal;
let counter = 1;
let firstNumber = 0;
let secondNumber = 0;
let operatorPressed=false;

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
const square = document.querySelector(".square");
const sqrRoot = document.querySelector(".sqrRoot");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const display = document.querySelector(".display");

number.forEach(function (number) {
    number.addEventListener("click", inputNumber)
})
clear.addEventListener("click", clearAll)
square.addEventListener("click", getSquare)
sqrRoot.addEventListener("click", getRoot)
operator.forEach(function (operator) {
    operator.addEventListener("click", getOperator)
})
equal.addEventListener("click", getResult)
del.addEventListener("click", deleteLast)

function clearAll() {
    currentNumber = 0;
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operatorVal = "";
    operatorPressed=false;
}

function inputNumber() {
    if(!operatorPressed){
    if (display.textContent.charAt(0) === "0") {
        display.textContent = display.textContent.substring(1);
    }
    if (display.textContent.length <= 30) {
        display.textContent += this.textContent;
    }}
    else{
        //display.textContent=0;
        operatorPressed=false;
        if (display.textContent.charAt(0) === "0") {
            display.textContent = display.textContent.substring(1);
        }
        if (display.textContent.length <= 30) {
            display.textContent += this.textContent;
        }
    
    }

}
function deleteLast() {
    if(!operatorVal){
    display.textContent.length === 1?display.textContent = 0 : display.textContent = display.textContent.slice(0, display.textContent.length - 1)
    }
    else{
        operatorVal="";
        display.textContent=firstNumber;
    }
}
function getSquare() {
    firstNumber = display.textContent;
    display.textContent = "";
    operatorVal = "**";
}
function getOperator() {
    firstNumber = display.textContent;
    operatorVal = this.textContent;
}
function getRoot() {
    firstNumber = display.textContent;
    display.textContent = "";
    operatorVal = "root";
}


function getResult() {
    secondNumber = display.textContent;
    let number1 = parseFloat(firstNumber);
    let number2 = parseFloat(secondNumber);
    let result;
    operatorPressed=true;
    switch (operatorVal) {
        case "**":
            result = number1 ** number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "root":
            result = Math.pow(number1, 1 / number2)
        default:
    }
    if (result % 1 != 0) {
        display.textContent = result.toFixed(12);
    }

    else if (result === Infinity) {
        display.textContent = "Error";
    }
    display.textContent = BigInt(result);
}
