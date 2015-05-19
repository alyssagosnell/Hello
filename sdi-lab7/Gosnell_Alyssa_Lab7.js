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

    while (swapped === false) {

        for (i = 0; i < passedArray.length; i++) {


            if (passedArray[i] > passedArray[i + 1]) {


                var tempNumber = passedArray[i];

                passedArray[i] = passedArray[i +1];

                passedArray[i + 1] = tempNumber;

                swapped = true


            }

        }
    }

    return passedArray;

}



//Main Code

for (i = 0; i < 3; i++) {

    if (i === 0) {

        orderNumberArray = arrayFunction(arrayFirstSet);

    }
    else if(i === 1) {

        orderNumberArray = arrayFunction(arraySecondSet);

    }
    else if(i === 2 ) {

        orderNumberArray = arrayFunction(arrayThirdSet);

    }

    console.log("This is the array in order: " + orderNumberArray);


}
