/**
 * Created by Alyssa on 5/14/15.
 */

//alert("JavaScript Works!");

//// Problem 1
//
//var fullPrice = 12;
//var discountPrice = 5;
//var age;
//
//age = parseInt(prompt("Enter the customer's age: "))
//
//if (age >= 55 || age < 10) {
//    console.log("Your discounted price is $" + (fullPrice - discountPrice) + ".");
//} else {
//    console.log("No discount for you. Pay $" + fullPrice + ".")
//}

//Problem 2

//// Tire Variables
//var frontRight = parseFloat(prompt("Enter the PSI for the front right tire:"));
//var frontLeft = parseFloat(prompt("Enter the PSI for the front left tire:"));
//var backRight = parseFloat(prompt("Enter the PSI for the back right tire:"));
//var backLeft = parseFloat(prompt("Enter the PSI for the back left tire:"));
//
//if (frontRight === frontLeft && backRight === backLeft) {
//    console.log("Your tire pressures are equal in the front and equal in the back.");
//} else {
//    console.log("There is a problem with your tire pressure. You should probably check them.")
//}

//DIFFERENT WAY OF DOING SAME PROBLEM

//// Tire Variables
//var frontRight;
//var frontLeft;
//var backRight;
//var backLeft;
//var tirePressure;
//var tireLocation;
//
//for (var i = 0; i < 4; i++) {
//    if (i === 0) {
//        //first time through loop
//        tireLocation = "front right";
//    } else if (i === 1) {
//        //second time through loop
//        tireLocation = "front left";
//    } else if (i === 2){
//        //third time
//        tireLocation = "back right";
//    } else {
//        //fourth time
//        tireLocation = "back left";
//    }
//}
//
//var foo = 1;
//var bar = 2;
//var baz = 3;
//
//console.log(foo + " " + bar + " " + baz);

//// IN CLASS ACTIVITY 1 FUN WITH FUNCTIONS
//
////global variables
//
//var globalName = "Faggot";
//var returnedValueVariable;
//
////// Functions
////function nameFetcher() {
////
////    var myName = prompt("Enter your name: ", "Psycho");
////
////    return myName + " and Faggot";
////}
////
////// MAIN CODE
////
////returnedValueVariable = nameFetcher();
////
////console.log("Hello, " + returnedValueVariable + "!");
//
//
//
////IN CLASS ACTIVITY 2
//
////VARIABLES
//// global variables
//
//var globalName = "Toggaf";
//var returnedValueVariable;
//var checkedName;
//
//// Functions
//function nameFetcher() {
//
//    var myName = prompt("Enter your name: ", "Psycho");
//
//    return myName
//}
//
//function nameChecker(nameArgument) {
//
//    var trueName;
//
//    if (nameArgument === "Jacky-Boy") {
//        trueName = true;
//    } else {
//        trueName = false;
//    }
//
//    return trueName;
//}
//
//// MAIN CODE
//
//returnedValueVariable = nameFetcher();
//
//checkedName = nameChecker(returnedValueVariable);
//
//if (checkedName) {
//    console.log("Greetings and Welcome!");
//} else {
//    console.log("Get outta here, Loser!");
//}
