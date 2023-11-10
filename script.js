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
//         //Gets the text on the button
//         // Its typed this way because we got many buttons that use the same even handler, namely "Number_Clicked"
//         Button button = (Button)sender;
//         string  pressed = button.Text;
        
        
//         // Don want our numbers to start with a zero, also when hitting zero buttons it wont print lots of zeros, will stick to one
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

