/*
Alyssa Gosnell
Lab 8
SDI 1505
May 21, 2015
 */

//alert("JavaScript works!");

//PROBLEM ONE

//Global Variables
var emailAddress;

//Function
function findSymbol(emailArg) {

    var atSymbol;
    var findAt = emailArg.indexOf("@");
    var findAt2 = emailArg.lastIndexOf("@");

    if (findAt >= 0 && findAt2 === findAt) {

        atSymbol = true

    } else {

        atSymbol = false
    }

    if (atSymbol === false || emailArg.indexOf(".") <= 0 || emailArg.indexOf(" ") >= 0)
    {
        console.log("The email you entered is not valid.");

    } else {

        console.log("The email you entered is valid.");

    }


}

// Main Code
emailAddress = prompt("Enter an email address below: ");

findSymbol(emailAddress);