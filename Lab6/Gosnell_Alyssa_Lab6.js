//Alyssa Gosnell
//SDI 1505
//LAB SIX
//05/16/15

//alert("JavaScript works!");



//FUNCTION
function vgArray() {

    //Local Variables
    var videoGame = ["CoD: Black Ops", "The Evil Within", "Jak and Daxter", "Fallout", "American McGee's Alice"];
    var videoGameGenres = ["action", "survival", "adventure", "RPG", "horror"];
    var poppedGame;
    var poppedGenre;


    //Loop

    for (var i =0; i < videoGame.length; i++) {

        console.log( videoGame[i] + " is a(n) " + videoGameGenres[i] + " type game.");
    }

    poppedGame = videoGame.pop();
    poppedGenre = videoGameGenres.pop();

    

//MAIN CODE

vgArray();