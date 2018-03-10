var wins = 0;
var words = ['Awkward', 'Bagpipes', 'Banjo', 'Bungler', 'Croquet', 'Crypt', 'Dwarves', 'Fervid', 'Fishhook', 'Fjord', 'Gazebo', 
'Gypsy', 'Haiku', 'Haphazard', 'Hyphen', 'Ivory', 'Jazzy', 'Jiffy', 'Jinx', 'Jukebox', 'Kayak', 'Kiosk', 'Klutz', 'Memento', 'Mystify', 
'Numbskull', 'Ostracize', 'Oxygen', 'Pajama', 'Phlegm', 'Pixel', 'Polka', 'Quad', 'Quip', 'Rhythmic', 'Rogue', 'Sphinx', 'Squawk', 
'Swivel', 'Toady', 'Twelfth', 'Waxy', 'Wildebeest', 'Yacht', 'Zealous', 'Zigzag', 'Zippy', 'Zombie'];
var currentWord;
var hiddenWord = [];
var triesLeft = 12
var lettersGuessed = [];
Math.floor(Math.random() * words.length); // use this to pick a random word from 'words'


// NEED TO FIGURE OUT HOW TO DISPLAY JAVASCRIPT STUFF ON THE WEBPAGE (HTML)



// game functions here
var addTo = function (array, letter) {
    if (array.includes(letter)) {
        return;
    } else {
        array.push(letter);
        console.log(lettersGuessed)
    }
}

// use .push to add to arrays!
// would need to display all elements before a button press, but use the button press to modify them.
    // i will leave letterGuessed in the button press code, so it will only show when something has been added to it.     











// game display here
document.onkeyup = function(event) {
    addTo(lettersGuessed, event.key);
    triesLeft--;
    document.getElementById("guess").textContent = lettersGuessed;
    document.getElementById("tries").textContent = triesLeft;
}
