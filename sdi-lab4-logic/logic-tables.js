//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;

//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//r = confirm("Third value:   Click OK for true or Cancel for false.");

//// FIRST TABLE
//
//if (p && q) {
//    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
//
//} else {
//    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
//}
//
//// SECOND TABLE
//
//if (p || q) {
//    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
//
//} else {
//    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
//}

 //THIRD TABLE
//
//if  (p && (q || r)) {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.")
//
//} else {
//        console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE." )
//}

// FOURTH TABLE
//
//if ((p && ! q) || r){
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.")
//
//} else {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE." )
//}

// FIFTH TABLE
//
//if (p || (q || r)){
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.")
//
//} else {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE." )
//}

// WORD PROBLEM 1

// Variables
var seniorAge = 55, yourAge, kidsAge = 10;

// PROMPT
yourAge = prompt("Please enter your age:");

if (yourAge < seniorAge && yourAge > kidsAge){
    console.log("Your ticket will be 12 dollars.");
} else {
    console.log("Your ticket will be 7 dollars.");
}

