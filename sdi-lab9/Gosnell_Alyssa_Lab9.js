//alert("JavaScript works!");

//PROBLEM ONE - FORMAT A NUMBER

//Global Variables
var firstNumber;
var decimalPoint;
var returnNumber;



//FUNCTION
function moveDecimal(numberArg, decimalArg) {

    var num1 = numberArg.toFixed(decimalArg);

    return num1;
}

//MAIN CODE
firstNumber = parseFloat(prompt("Please enter the number you wish to format: ","123.56"));

decimalPoint = parseInt(prompt("Please enter a number you wish to move the decimal point: ","5"));

returnNumber = moveDecimal(firstNumber, decimalPoint);

console.log("This is the formatted number: " + returnNumber + ".");
