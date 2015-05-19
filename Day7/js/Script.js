/**
 * Created by Alyssa on 5/19/15.
 */

//alert("JavaScript works!");

//Global variables
var returnedArray = [];
var numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];


//Function
function evenArray(argArray){

    //Local Variables
    var newArray = [];
    var modNum;

    for (i = 0; i < argArray.length; i++){

        modNum = argArray [i] % 2;

        if (modNum === 0) {

            newArray.push(argArray[i]);

        }

    }

    return newArray;

}

//Main Code
returnedArray = evenArray(numberArray);

console.log("The even number array is " + returnedArray);