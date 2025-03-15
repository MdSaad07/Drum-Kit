// Detecting Button Press
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});

function makeSound(key) {
    var audioFile = "";
    switch (key) {
        case "w":
            audioFile = "sounds/tom-1.mp3";
            break;
        case "a":
            audioFile = "sounds/tom-2.mp3";
            break;
        case "s":
            audioFile = "sounds/tom-3.mp3";
            break;
        case "d":
            audioFile = "sounds/tom-4.mp3";
            break;
        case "j":
            audioFile = "sounds/snare.mp3";
            break;
        case "k":
            audioFile = "sounds/crash.mp3";
            break;
        case "l":
            audioFile = "sounds/kick-bass.mp3";
            break;
        default:
            console.log("Invalid key:", key);
            return;
    }
    var audio = new Audio(audioFile);
    audio.play();
}
