/**
 * Alyssa Gosnell  05/19/15
 * Lab 7
 * Functions, Loops, and Arrays
 * SDI 1505
 */

//alert("JavaScript works!");


//Global Variables

var orderNumberArray;
var arrayFirstSet = [ 10, 6, 7, 3, 12, 5 ];
var arraySecondSet = [ 25, 100, 4, 22, 16, 105, 2, 7 ];
var arrayThirdSet = [ 2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42 ];


//Function

function arrayFunction(passedArray){

    var swapped = false;

    do {
        swapped = false;
        for (var i = 0; i < passedArray.length-1; i++) {
            if (passedArray[i] > passedArray[i+1]) {
                var temp = passedArray[i];
                passedArray[i] = passedArray[i+1];
                passedArray[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return passedArray;
}

//Main Code

for (var i = 0; i < 3; i++) {

    if (i === 0) {
        console.log("This is the first array not in order: " + arrayFirstSet );
        orderNumberArray = arrayFunction(arrayFirstSet);

    }
    else if (i === 1) {
        console.log("This is the second array not in order: " + arraySecondSet);
        orderNumberArray = arrayFunction(arraySecondSet);

    }
    else if (i === 2) {
        console.log("This is the third array not in order: " + arrayThirdSet);
        orderNumberArray = arrayFunction(arrayThirdSet);

    }

    console.log("This is the array in order: " + orderNumberArray);
}

