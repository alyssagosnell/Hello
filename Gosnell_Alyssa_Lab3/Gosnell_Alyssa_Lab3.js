/*
Alyssa Gosnell
SDI 1505
Lab 3
Flowchart
*/

//alert("JavaScript works!");

// Variables
var myGame    = "Black Ops: Zombies";
var myMap     = "\"Ascension\"";
var rounds   = true;
var kills     = 1200;

// Outputs
console.log("On Tuesday I played " + myGame + ".");
console.log("My favorite Zombie map is " + myMap + " from the first DLC Map-Pack.");
console.log("I got " + kills + " kills! Not including headshots.");
console.log("It's " + rounds + " that I had over one thousand kills.");

// Confirm
rounds = confirm("Do you think I got past round 35 on zombies? Click OK for yes, Cancel for no.");

if (rounds === true)
{
    console.log("You are right! I got to round 41." );
    var downs = parseInt(prompt("How many downs do you think I had by round 30?\nHint: It is between 1 and 10."));
    var actualDowns = 5;
    if (downs === actualDowns)
    {
        console.log("You said that I got " + downs + " downs. You're right I had " + actualDowns + " downs, but in total I had " + ((actualDowns) + (downs)) + " downs.");
    }
    else
    {
        console.log("Nah, that isn't right.");
    }
}

else if (rounds === false)
{
    console.log("Bruh, c'mon now? I'm a zombie expert. I did get to round 41.");
    var charName = prompt("Which of these characters do you think I was playing as? Nikolai, Richtofen, Dempsey, or Takeo.");
    var actualChar = "Nikolai";

    if (charName === actualChar)
    {
        console.log("You are right! I was playing as " + charName + "!");
    }
    else
    {
        console.log("You said I was playing as " + charName + ", but I was actually playing as " + actualChar + "!");
    }
}
