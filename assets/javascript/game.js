var wins = 0;
var words = ['Awkward', 'Bagpipes', 'Banjo', 'Bungler', 'Croquet', 'Crypt', 'Dwarves', 'Fervid', 'Fishhook', 'Fjord', 'Gazebo', 
'Gypsy', 'Haiku', 'Haphazard', 'Hyphen', 'Ivory', 'Jazzy', 'Jiffy', 'Jinx', 'Jukebox', 'Kayak', 'Kiosk', 'Klutz', 'Memento', 'Mystify', 
'Numbskull', 'Ostracize', 'Oxygen', 'Pajama', 'Phlegm', 'Pixel', 'Polka', 'Quad', 'Quip', 'Rhythmic', 'Rogue', 'Sphinx', 'Squawk', 
'Swivel', 'Toady', 'Twelfth', 'Waxy', 'Wildebeest', 'Yacht', 'Zealous', 'Zigzag', 'Zippy', 'Zombie'];
var currentWord;
var hiddenWord = [];
var triesLeft = 12;
var guesses = [];

// I'm too lazy to go through the array and lower case everything so there ya go
for (var i=0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
}



// NEED TO FIGURE OUT HOW TO DISPLAY JAVASCRIPT STUFF ON THE WEBPAGE (HTML)



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
            document.getElementById("randomWord").textContent = guessDash;
        } 
    console.log("done looking");
    }
}

// use .push to add to arrays!
// would need to display all elements before a button press, but use the button press to modify them.
    // i will leave guesses in the button press code, so it will only show when something has been added to it.     

// variables made with functions here
var guessThis = words[Math.floor(Math.random() * words.length)]; // Math... gives out random whole number between 0 and the length of words used for the hangman game
var guessDash = makeDash(guessThis);
console.log(guessThis + " is the current word");




// game display here


document.getElementById("randomWord").textContent = makeDash(guessThis);
document.getElementById("tries").textContent = triesLeft;
document.getElementById("guess").textContent = guesses;



// game functions here
document.onkeyup = function(event) {
    revealIf(event.key.toLowerCase(), guessThis, guessDash);
    
    if (guesses.includes(event.key.toLowerCase()) || guessDash.includes(event.key.toLowerCase())) {
        console.log("should NOT subtract");
    } else { 
        addTo(guesses, event.key.toLowerCase());
        console.log("should subtract");
        triesLeft--;
        document.getElementById("tries").textContent = triesLeft; // need to update triesLeft in the html, or the display on the page never changes
    }
    document.getElementById("guess").textContent = guesses;
}