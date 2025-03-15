# Drum Kit 🥁

This is a simple Drum Kit web application that allows users to play drum sounds by clicking on buttons or pressing corresponding keys on the keyboard.

## Features
- Interactive drum buttons.
- Play drum sounds by clicking buttons.
- Play drum sounds using keyboard keys.
- Simple and clean UI.

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Use
1. Open `index.html` in a browser.
2. Click on the drum buttons to play sounds.
3. Use the following keys on your keyboard to play sounds:
   - `W` - Tom 1
   - `A` - Tom 2
   - `S` - Tom 3
   - `D` - Tom 4
   - `J` - Snare
   - `K` - Crash
   - `L` - Kick Bass

## Project Structure
```
Drum-Kit/
│── index.html  # Main HTML file
│── styles.css  # Styling file
│── index.js    # JavaScript logic
│── sounds/     # Folder containing drum sounds
│   ├── tom-1.mp3
│   ├── tom-2.mp3
│   ├── tom-3.mp3
│   ├── tom-4.mp3
│   ├── snare.mp3
│   ├── crash.mp3
│   └── kick-bass.mp3
│── images/     # Folder containing screenshots
│   ├── screenshot1.png
│   ├── screenshot2.png
```

## JavaScript Logic
The script:
- Selects all `.drum` buttons.
- Listens for `click` events on each button.
- Plays corresponding sound based on the clicked button.
- Listens for `keydown` events to play sounds when the user presses a key.

```javascript
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
});

function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("Invalid key: " + key);
    }
}
```

## Screenshots

### Playing the Drum
![Playing Drum](images/drum_kit_ss.png)

## Credits
Made by **Mohammed Saad Fazal**

Enjoy playing the drum kit! 🦁

