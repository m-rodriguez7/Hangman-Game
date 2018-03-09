var wins = 0;
var words = ['Awkward', 'Bagpipes', 'Banjo', 'Bungler', 'Croquet', 'Crypt', 'Dwarves', 'Fervid', 'Fishhook', 'Fjord', 'Gazebo', 
'Gypsy', 'Haiku', 'Haphazard', 'Hyphen', 'Ivory', 'Jazzy', 'Jiffy', 'Jinx', 'Jukebox', 'Kayak', 'Kiosk', 'Klutz', 'Memento', 'Mystify', 
'Numbskull', 'Ostracize', 'Oxygen', 'Pajama', 'Phlegm', 'Pixel', 'Polka', 'Quad', 'Quip', 'Rhythmic', 'Rogue', 'Sphinx', 'Squawk', 
'Swivel', 'Toady', 'Twelfth', 'Waxy', 'Wildebeest', 'Yacht', 'Zealous', 'Zigzag', 'Zippy', 'Zombie'];
var currentWord;
var hiddenWord = [];
var triesLeft = 12
var lettersGuessed = [];

//document.getElementById("right").innerHTML = lettersGuessed;

// NEED TO FIGURE OUT HOW TO DISPLAY JAVASCRIPT STUFF ON THE WEBPAGE (HTML)

var addTo = function (array, letter) {
    if (array.includes(letter)) {
        return;
    } else {
        array.push(letter);
        console.log(lettersGuessed)
    }
}


// use .push to add to arrays!

document.onkeyup = function(event) {
    addTo(lettersGuessed, event.key);
}
