// public partial class MainPage : ContentPage
// {

//     string currentNumber = "0";
//     string operator;
//     int counter = 1;
//     double firstNumber=0;
//     double secondNumber=0;    



// 	public MainPage()
// 	{
// 		InitializeComponent();
// 	}


//     private void Clear_Clicked(object sender, EventArgs e)
//     {
//         //Deletes-resets all
//         currentNumber = "0";
//         Total.Text = "0";
//         counter = 1;
//         operator = null;

//     }

//     private void Del_Clicked(object sender, EventArgs e)
//     {
//         // deletes last char of the "number" string
//         if (Total.Text.Length > 1)
//         {
//             Total.Text = Total.Text.Remove(Total.Text.Length - 1);
//             currentNumber = currentNumber.Remove(currentNumber.Length - 1);

//         }
//         // makes sure button doesn't break stuff when the "number" string has one element
//         else if ((Total.Text.Length <= 1 || currentNumber.Length <= 1) && Total.Text!= operator)
//         { Total.Text = "0";
//             currentNumber = "0";
//         }
//         else if (Total.Text == operator)
//         {
//             operator = "";
//             Total.Text = "";
//             currentNumber = "";         
//            // counter = 1;
//         }

//     }    


//     private void Operator_Clicked(object sender, EventArgs e)
//     {
//         StoreNumber(Total.Text);
//         Button button = (Button)sender;
//         operator = button.Text;        
//         counter = -1;
//         Total.Text = operator;
//         currentNumber = "";

//     }

//     private void EqualsBtn_Clicked(object sender, EventArgs e)
//     {
//         if (operator != null)
//         {
//             StoreNumber(Total.Text);
//             Total.Text = DoCalculation().ToString();
//             currentNumber = "0";
//             operator = null;
//             counter = 1;
//         }


//     }


//     private void Number_Clicked(object sender, EventArgs e)
//     {
//         Button button = (Button)sender;
//         string  pressed = button.Text;

//         if (Total.Text.Substring(0)=="0" || currentNumber.Substring(0)=="0")
//         {
//             currentNumber = "";
//             Total.Text ="";
//             if (pressed == "00")
//             {
//                 Total.Text = "0";
//                 currentNumber= "0";
//             }
//             else
//                 currentNumber += pressed;

//         }
//         else
//             currentNumber += pressed;

//         this.Total.Text = currentNumber;
//     }

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


//     private void StoreNumber (string text)
//     {
//         // A method to turn the typed number strings to doubles.
//         // Counter keeps track if an operator was pressed  and the method will store to the appropriate variable
//         double number;
//         if (double.TryParse(text, out number)) 
//         { if (counter==1)
//                 firstNumber = number;
//         else
//                 secondNumber = number;
//         }
//         currentNumber = "";
//     }

//     public double DoCalculation()
//     {

//         double result = 0;

//         switch (operator)
//         {
//             case "+":
//                 result = firstNumber + secondNumber;
//                 break;

//             case "-":
//                 result = firstNumber - secondNumber;
//                 return result;
//             case "*":
//                 result = firstNumber * secondNumber;
//                 break;
//             case "/":
//                 result = firstNumber / secondNumber;
//                 break;
//         }

//         Math.Round(result,15);
//         return result;
//     }
// }

let currentNumber = "0";
let operatorVal;
let counter = 1;
let firstNumber = 0;
let secondNumber = 0;

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

function clearAll() {
    currentNumber = 0;
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operatorVal = "";
}

function inputNumber() {
    if (display.textContent.charAt(0) === "0") {
        display.textContent = display.textContent.substring(1);
    }
    if (display.textContent.length <= 30) {
        display.textContent += this.textContent;
    }

}

function getSquare() {
    firstNumber = display.textContent;
    display.textContent = "";
    operatorVal = "**";
}
function getOperator() {
    firstNumber = display.textContent;
    display.textContent = "";
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
