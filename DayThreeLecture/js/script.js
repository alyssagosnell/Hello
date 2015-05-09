/**
 * Created by Alyssa on 5/9/15.
 */

//alert("JavaScript Works!");

// Initial Variable
var myName = "Psycho";
var newName = "";
var lastName = "";

// Prompt for User Input
newName = prompt("Please enter your first name:");

// Create our First Conditional
if (newName == myName) {

    lastName = prompt("Please enter your last name:");
    if (lastName == "Gosnell") {

        //If first name is correct and last name is correct
        console.log("Greetings, " + myName + " " + lastName + ".");
    } else {

        //If first name is correct and last name is wrong
        console.log("NO!");
    }
    }

    else
    {
    //If the first name is wrong
    console.log("Intruder alert!");

}

//New variables for data type tests
var myNumber = 0
var secondNumber = 5

myNumber = parseInt(prompt("Enter the number 5."));

if (myNumber === secondNumber) {

    console.log("They match exactly!");

} else {

    console.log("The data types are wrong!");

}