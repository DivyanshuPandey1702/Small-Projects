
var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btn = this.innerHTML;
    playAudio(btn);
    playAnimation(btn);
  });
}

document.addEventListener("keydown", function (event) {
  playAudio(event.key);
  playAnimation(event.key);
});

function playAudio(key) {
  var audio;
  switch(key) {
    case 'w' :
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case 'a' :
      audio = new Audio("sounds/crash.mp3");
      break;
    case 's' :
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case 'd' :
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case 'j' :
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case 'k' :
      audio = new Audio("sounds/snare.mp3");
      break;
    case 'l' :
      audio = new Audio("sounds/tom-4.mp3");
      break;
  }
  audio.currentTime = 0;
  audio.play();
}

function playAnimation(key) {
  var k = "." + key;
  document.querySelector(k).classList.add("pressed");
  setTimeout(() => {document.querySelector(k).classList.remove("pressed");}, 100);

}
