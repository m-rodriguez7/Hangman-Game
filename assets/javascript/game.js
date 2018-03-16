// variables to be used in code

var loss = 0;
var win = 0;
var words = ['Awkward', 'Bagpipes', 'Banjo', 'Bungler', 'Croquet', 'Crypt', 'Dwarves', 'Fervid', 'Fishhook', 'Fjord', 'Gazebo', 
'Gypsy', 'Haiku', 'Haphazard', 'Hyphen', 'Ivory', 'Jazzy', 'Jiffy', 'Jinx', 'Jukebox', 'Kayak', 'Kiosk', 'Klutz', 'Memento', 'Mystify', 
'Numbskull', 'Ostracize', 'Oxygen', 'Pajama', 'Phlegm', 'Pixel', 'Polka', 'Quad', 'Quip', 'Rhythmic', 'Rogue', 'Sphinx', 'Squawk', 
'Swivel', 'Toady', 'Twelfth', 'Waxy', 'Wildebeest', 'Yacht', 'Zealous', 'Zigzag', 'Zippy', 'Zombie'];
var nonAlphabet = ["control", "shift", "meta", "alt", "enter", "backspace", "escape", "insert", "home", "pageup", "pagedown", "end", "delete", 
"arrowup", "arrowdown", "arrowleft", "arrowright", "print", "scrolllock", "pause", "windows", "command"] // used dev tools to create this list
words = ['memories', 'persona', 'atlus', 'velvet', 'contract', 'Japan', 'Gekkoukan', 'Yasogami', 'Junes', 'Shujin', 'coffee', 'curry',
'world', 'mementos', 'heart', 'change', 'fate', 'whims', 'triumph', 'sadness', 'death', 'magician', 'fool', 'jester', 'priestess', 'empress',
'emperor', 'hierophant', 'lovers', 'chariot', 'justice', 'hermit', 'fortune', 'strength', 'hanged', 'temperance', 'devil', 'tower', 'star', 'moon', 'sun', 
'judgement', 'aeon', 'world', 'universe', 'social', 'confidant', 'reaper', 'elevator', 'limousine', 'prison', 'joker', 'skull', 'inari', 'panther', 
'queen', 'noir', 'oracle', 'feline', 'robot', 'bear', 'fate', 'freedom', 'apathy', 'syndrome', 'steak', 'interrogation', 'palace', 'museum', 'bank', 'spaceship', 'casino', 'ship',
'slash', 'pierce', 'strike', 'mask', 'self', 'dimension', 'burger', 'yawn', 'master', 'maid', 'guinea', 'alcohol', 'medicine', 'weapons', 'skills', 'psychic', 'nuclear'
] // persona word list

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

document.getElementById("randomWord").textContent = makeDash(guessThis).join(""); // this displays dashes, dashes = length of random word.
document.getElementById("tries").textContent = "Tries Left: " + triesLeft; // shows player how many chances they have left.
document.getElementById("guess").textContent = "Letters already guessed: " + guesses; // shows player what they have guessed incorrectly. 
document.getElementById("win").textContent = "wins: " + win; // win counter
document.getElementById("loss").textContent = "losses: " + loss; // loss counter

// backgrounds here
var bg = ['assets/images/p3.jpg', 'assets/images/p4.jpg', 'assets/images/p5.jpg'] // for some reason, it was starting from the home folder, not the same directory as the js or css file /shrug




// game functions here

// game starts with a key press

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
    document.getElementById("guess").textContent = "Letters already guessed: " + guesses.join(" ");
    }  // code that resets game here
    if (triesLeft < 1) {
        document.getElementById("background").style.backgroundImage = "url(" + bg[Math.floor(Math.random() * bg.length)] + ")";
        console.log("did the bg change?");
        loss++;
        document.getElementById("previousWord").textContent = "You lose! The previous word was " + guessThis;
        guessThis = words[Math.floor(Math.random() * words.length)]; // change word for guessing
        console.log(guessThis + " is the current word");
        guessDash = makeDash(guessThis); // create new dash array
        triesLeft = 12;
        guesses = [];
        document.getElementById("randomWord").textContent = makeDash(guessThis).join(""); // this displays dashes, dashes = length of random word.
        document.getElementById("tries").textContent = "Tries Left: " + triesLeft; // shows player how many chances they have left.
        document.getElementById("guess").textContent = "Letters already guessed: " + guesses; // shows player what they have guessed incorrectly. 
        document.getElementById("win").textContent = "wins: " + win; // win counter
        document.getElementById("loss").textContent = "losses: " + loss; // loss counter
    } else if (!(guessDash.includes("_ "))) { // i inserted spaces in the dash array for display purposes. perhaps i didnt need to but I'd rather leave it working :)
        document.getElementById("background").style.backgroundImage = "url(" + bg[Math.floor(Math.random() * bg.length)] + ")";
        console.log("did the bg change?");
        win++;
        document.getElementById("previousWord").textContent = "You win! The previous word was " + guessThis; // the browser changes the word so fast, i thought it would be better to show what the word was!
        guessThis = words[Math.floor(Math.random() * words.length)]; // change word for guessing
        console.log(guessThis + " is the current word");
        guessDash = makeDash(guessThis); // create new dash array
        triesLeft = 12;
        guesses = [];
        document.getElementById("randomWord").textContent = makeDash(guessThis).join(""); // this displays dashes, dashes = length of random word.
        document.getElementById("tries").textContent = "Tries Left: " + triesLeft; // shows player how many chances they have left.
        document.getElementById("guess").textContent = "Letters already guessed: " + guesses; // shows player what they have guessed incorrectly. 
        document.getElementById("win").textContent = "wins: " + win; // win counter
        document.getElementById("loss").textContent = "losses: " + loss; // loss counter
    }
}


// as of now the game works as the spec requests.
