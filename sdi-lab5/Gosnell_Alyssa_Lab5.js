/**
 * Alyssa Gosnell
 * SDI
 * 5/14/15
 * Lab 5
 */

//alert("JavaScript works!");

//Variables

var globalVariable;

//Functions

//Addition

function addition ()
{
    globalVariable = (firstNum + secondNum);
    return globalVariable;
}

//Subtraction

function subtraction ()
{
    globalVariable = (firstNum - secondNum);
    return globalVariable;
}

//Division

function division ()
{
    globalVariable = (firstNum / secondNum);
    return globalVariable;
}

//Multiplication

function multiplication ()
{
    globalVariable = (firstNum * secondNum);
    return globalVariable;
}

//Prompts

var firstNum = parseFloat(prompt("Please enter your first number:"));
var secondNum = parseFloat(prompt("Please enter your second number:"));
var equation = prompt("Please choose a type of equation: Addition(+), Subtraction(-), Multiplication(*), Division(/).");

if (equation === "Addition" || equation === "+") {
    addition(firstNum && secondNum);
    globalVariable = addition();
    console.log("The number " + firstNum + " plus the number " + secondNum + " equals " + globalVariable);
}

else if (equation === "Subtraction" || equation === "-") {
    subtraction(firstNum && secondNum);
    globalVariable = subtraction();
    console.log("The number " + firstNum + " minus the number " + secondNum + " equals " + globalVariable);
}

else if (equation === "Multiplication" || equation === "*") {
    multiplication(firstNum && secondNum);
    globalVariable = multiplication();
    console.log("The number " + firstNum + " times the number " + secondNum + " equals " + globalVariable);
}

else if (equation === "Division" || equation === "/") {
    division(firstNum && secondNum);
    globalVariable = division();
    console.log("The number " + firstNum + " divided by the number " + secondNum + " equals " + globalVariable);
    else if (firstNum === 0 || secondNum === 0) {
        console.log("ERROR!")
    }
}
