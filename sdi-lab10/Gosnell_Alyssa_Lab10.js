//Alyssa Gosnell
//SDI 1505 Lab 10
//May 26, 2015

//alert("JavaScript works!");

//Global Variables
var userAnswer;
var returnedVariable;


//Function
function lotteryFunction(userInput) {

    var floridaLottery = [];
    var powerBall = [];
    var newVar;

    if(userInput === "Florida Lottery") {

        for (var i = 0; i < 6; i++) {

            floridaLottery.push(Math.round((Math.random() * 53) + 1));
        }
        newVar = floridaLottery;

        return floridaLottery;


    } else if (userInput === "PowerBall") {

            for (var i = 0; i < 5; i++) {

                powerBall.push(Math.round((Math.random() * 59) + 1));
        }
        newVar = powerBall;

        return newVar;
    }
}

//Main Code
userAnswer = prompt("Which lottery would you like to select?", "Florida Lottery or PowerBall");

returnedVariable = lotteryFunction(userAnswer);

if (userAnswer === "Florida Lottery") {

    console.log("The random numbers for the Florida Lottery are: " + returnedVariable + ".");

} else if (userAnswer === "PowerBall") {

    console.log("The random numbers for the PowerBall Lottery are: " + returnedVariable + ".");

}
