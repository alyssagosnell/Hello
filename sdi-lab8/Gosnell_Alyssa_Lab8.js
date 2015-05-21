/*
Alyssa Gosnell
Lab 8
SDI 1505
May 21, 2015
 */

//alert("JavaScript works!");

//PROBLEM ONE

//Global Variables
var emailAddress = "akgosnell@fullsail.edu";

//Function
function findSymbol(emailAddress) {

    var atSymbol = emailAddress.charAt(9);

    return atSymbol;

}

//Main Code
console.log("The character located at index 9 is the " + findSymbol(emailAddress) + " symbol.");