# Drum Kit 🥁

## Live Demo 🌍  
Check out the deployed version here: [Drum Kit Live](https://mdsaad07.github.io/Drum-Kit/)

This is a simple and interactive Drum Kit web application that allows users to play drum sounds by clicking on buttons or pressing corresponding keys on the keyboard.

## Features
- Responsive and interactive drum buttons.
- Play drum sounds by clicking buttons.
- Play drum sounds using keyboard keys.
- Simple and clean user interface.
- Smooth animations when keys or buttons are pressed.

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
- Plays the corresponding sound based on the clicked button.
- Listens for `keydown` events to play sounds when the user presses a key.
- Adds a visual effect when a button or key is pressed.

```javascript
var drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
    button.addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    });
});

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    animateButton(event.key);
});

function playSound(key) {
    var sound;
    switch (key) {
        case "w":
            sound = "sounds/tom-1.mp3";
            break;
        case "a":
            sound = "sounds/tom-2.mp3";
            break;
        case "s":
            sound = "sounds/tom-3.mp3";
            break;
        case "d":
            sound = "sounds/tom-4.mp3";
            break;
        case "j":
            sound = "sounds/snare.mp3";
            break;
        case "k":
            sound = "sounds/crash.mp3";
            break;
        case "l":
            sound = "sounds/kick-bass.mp3";
            break;
        default:
            return;
    }
    new Audio(sound).play();
}

function animateButton(key) {
    var activeButton = document.querySelector("." + key);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => activeButton.classList.remove("pressed"), 100);
    }
}
```

## Screenshots

### Playing the Drum
![Playing Drum](images/drum_kit_ss.png)

## Credits
Made by **Mohammed Saad Fazal**

Enjoy playing the drum kit! 🥁🎵

