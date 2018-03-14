// variables to be used in code

var loss = 0;
var win = 0;
var words = ['Awkward', 'Bagpipes', 'Banjo', 'Bungler', 'Croquet', 'Crypt', 'Dwarves', 'Fervid', 'Fishhook', 'Fjord', 'Gazebo', 
'Gypsy', 'Haiku', 'Haphazard', 'Hyphen', 'Ivory', 'Jazzy', 'Jiffy', 'Jinx', 'Jukebox', 'Kayak', 'Kiosk', 'Klutz', 'Memento', 'Mystify', 
'Numbskull', 'Ostracize', 'Oxygen', 'Pajama', 'Phlegm', 'Pixel', 'Polka', 'Quad', 'Quip', 'Rhythmic', 'Rogue', 'Sphinx', 'Squawk', 
'Swivel', 'Toady', 'Twelfth', 'Waxy', 'Wildebeest', 'Yacht', 'Zealous', 'Zigzag', 'Zippy', 'Zombie'];
// var currentWord;
var nonAlphabet = ["control", "shift", "meta", "alt", "enter", "backspace", "escape", "insert", "home", "pageup", "pagedown", "end", "delete", 
"arrowup", "arrowdown", "arrowleft", "arrowright", "print", "scrolllock", "pause"] // used dev tools to create this list
var hiddenWord = [];
var triesLeft = 12;
var guesses = [];
// I'm too lazy to go through the array and lower case everything so there ya go
for (var i=0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
}



// game functions here

var addTo = function (array, letter) {
    if (array.includes(letter)) {
        return;
    } else {
        array.push(letter);
        console.log(guesses);
    }
}
var makeDash = function(word) {
    var dash = [];
    for (var i = 0; i < word.length; i++) {
        dash[i] = "_ ";
    }
    // return dash.join(""); THIS CONVERTS THE ARRAY TO A STRING *ANGRY*
    return dash; // return array for further modification, use .join outside of function for display purposes only
}
var revealIf = function(key, word, dash) { // would be using event.key in place of "key"
    for (var i=0; i < word.length; i++) {// "reveal if" key is in the word and replace its dash.
        if (key === word[i]) {
            console.log("key match!");
            dash[i] = key;
            document.getElementById("randomWord").textContent = dash.join(" ");
        } 
    console.log("done looking");
    }
}


// variables made with functions here

var guessThis = words[Math.floor(Math.random() * words.length)]; // Math... gives out random whole number between 0 and the length of words used for the hangman game
var guessDash = makeDash(guessThis); // this creates an ARRAY
console.log(guessThis + " is the current word");




// game display here

document.getElementById("randomWord").textContent = makeDash(guessThis).join("");
document.getElementById("tries").textContent = "Tries Left: " + triesLeft;
document.getElementById("guess").textContent = "Letters already guessed: " + guesses;
document.getElementById("win").textContent = "wins: " + win;
document.getElementById("loss").textContent = "losses: " + loss;




// game functions here

// game starts with a key press
// need a win/loss condition
// need to pick a new work after win/loss condition

document.onkeyup = function(event) { // toLowerCase() used throughout to check for case-sensitivity
    if (!/^[a-zA-Z]+$/.test(event.key)) {
        console.log("you pressed a non-alphabetical key!");
        return;
    } else if (nonAlphabet.includes(event.key.toLowerCase())) { // previous conditional still allowed system/function keys
        console.log("you pressed a non-alphabetical key!"); 
        return;
    } else {
    revealIf(event.key.toLowerCase(), guessThis, guessDash);
    if (guesses.includes(event.key.toLowerCase()) || guessDash.includes(event.key.toLowerCase())) {
        console.log("should NOT subtract");
    } else { 
        addTo(guesses, event.key.toLowerCase());
        console.log("should subtract");
        triesLeft--;
        document.getElementById("tries").textContent =  "Tries Left: " + triesLeft; // need to update triesLeft in the html, or the display on the page never changes
    }
    document.getElementById("guess").textContent = guesses.join(" ");
    }
}