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


}




// Main Code
emailAddress = prompt("Enter an email address below: ");

findSymbol(emailAddress);