var guesses = 10;
var letters_guessed = "";
var game_word_length = 0;
var words_guessed_correctly = 0;
var word = "";
var site_words = ["cat", "hat", "car", "love", "monkey", "candy", "dog", "ice", "fish", "bed", "cup", "shower", "clap", "sit"];

function generateWord() {
    return site_words[Math.floor(Math.random() * site_words.length)];
}

function newGame() {
    $("#game_word").html("");
    $("#num_guesses").html("10");
    $("#guessed_letters").html("");
    word = generateWord();
    game_word_length = word.length;
    console.log(word); // debug
    drawBoard(word);
    guesses = 10;
    lettersGuessed = "";
    words_guessed_correctly = 0;
    $("#btnNewGame").hide();
}

function drawBoard(word) {
    for (var i = 0; i < word.length; i++) {
        $("#game_word").append("<span id=\"l_" + i + "\">__</span>&nbsp;");
    }
}

document.onkeyup = function(event) {
    guess(event.key);
}

function guess(letter) {
    guesses -= 1;
    $("#num_guesses").html(guesses);
    console.log(guesses); // debug
    console.log(letter); // debug
    if (guesses > 0) {
        if (word.includes(letter)) {
            // replace the __ with the letter
            // get the index 
            var idx = word.indexOf(letter);
            $("#l_" + idx).html(letter);
            words_guessed_correctly += 1;
            if (words_guessed_correctly == game_word_length) {
                $("#btnNewGame").show();
                alert("YOU WIN!!");
            }
        } else { // failed guess
            $("#guessed_letters").append(letter + " ");
        }
    } else {
        $("#guessed_letters").append(letter);
        $("#btnNewGame").show();
        alert("Try again");
    }
}
