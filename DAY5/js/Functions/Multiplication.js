/**
 * Created by Alyssa on 5/14/15.
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

else if (equation === "Multiplication" || equation === "*") {
    multiplication(firstNum && secondNum);
    globalVariable = multiplication();
    console.log("The number " + firstNum + " times the number " + secondNum + " equals " + globalVariable);
}