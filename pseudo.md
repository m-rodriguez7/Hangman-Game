HANGMAN

need:
edit html on the fly
take in input from keys


html basic frame
Jumbotron with "name of game", a picture, etc
two columns. one colum has nothing in it, the other displays variables

wins,

current word (shown as dashes)

"current guess"

previous guesses,

tries left (starts at 15)



game starts with a press of a key.

every key press reduces "tries"

when you guess them all, display some sort of splash, alert. maybe a confirm   
   starts over on its own
   in the example, the game plays a song after the word is guessed and the game continues while the music is playing


its better for the function to return something, make it more versatile. someone could use that function for console logs, alerts, more than one thing. 

document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.which).toLowerCase();

        // If the letter is h, run the following functions/methods.
        if (letter === "h") {
          car.honk();
          reWriteStats();
        }

        // If the letter is d, run the following functions/methods.
        if (letter === "d") {
          car.driveToWork();
          reWriteStats();
        }

        // If the letter is w, run the following functions/methods.
        if (letter === "w") {
          car.driveAroundWorld();
          reWriteStats();
        }

        // If the letter is t, run the following functions/methods.
        if (letter === "t") {
          car.getTuneUp();
          reWriteStats();
        }
      }

use line 35 for this hw.=