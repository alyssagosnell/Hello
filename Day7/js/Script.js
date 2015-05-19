/**
 * Created by Alyssa on 5/19/15.
 */

//alert("JavaScript works!");

//Global variables
var returnedArray = [];
var numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
var userPrompt;


userPrompt = prompt("Enter 'odd' to return odd numbers or 'even' to return even numbers.");

while (userPrompt != "odd" && userPrompt != "even") {

    userPrompt = prompt("HEY! You can read, can't you? Enter 'odd' or 'even'");

}

//Function
function evenArray(argArray, oddOrEven) {

    //Local Variables
    var newArray = [];
    var modNum;
    var zeroOrOne;
    var newArgArray = new Array(argArray);

    if (oddOrEven === "odd") {

        zeroOrOne = 1;
    } else {

        zeroOrOne = 0;

    }

    for (i = 0; i < numberArray.length; i++) {

        modNum = numberArray [i] % 2;

        if (modNum === zeroOrOne) {

            newArray.push(numberArray[i]);

        }

    }

   // argArray.pop();
    //console.log("argArray: " +argArray);
    //console.log("newArgArray: " + newArgArray);

    return newArray;

}

//Main Code
returnedArray = evenArray(numberArray, userPrompt);

console.log("The " + userPrompt + " number array is " + returnedArray);

console.log('numberArray: ' + numberArray);