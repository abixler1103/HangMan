var guesses = 6;
var letguess = " "
var word = " "
var sitewords = ["cat", "hat", "ball", "love", "sweet", "candy", "dog", "color", "fish", "bed", "cup", "hello", "happy", "sit"];

function generateWord() {
    var random = sitewords[Math.floor(Math.random() * sitewords.length)];
    console.log(random);

}

// function newGame() {
//     word = generateWord();
//     drawBoard(word);
//     guesses = 0
//     lettersGuessed = " ";

// }

// function drawBoard(word) {
//     $("div").append();
//     var myLength = word.length;
//     for (i = 0, i < myLength, i++);
// }

// This is working, but not leaving/listng the letters
// document.onkeyup = function(event) {
//     var letguess = event.key;
//     $("#guessedletter").html("<div>" + letguess + "</div>");
//     var newDiv = $("<div>");
//     newDiv.html(letguess);
//     $("guessedletter").append(newDiv);

// }

// function UserGuess(letter) {
//     if (guesses >= 0) {
//         if word.contains(letguess) {
//             alert("in the word");
//         }
//     }

// }

// 
// }

//
