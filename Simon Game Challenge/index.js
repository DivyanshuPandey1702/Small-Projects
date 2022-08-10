var buttonColours = ["red", "blue" , "green", "yellow"];
var userChoosenPattern = [];
var gamePattern = [];
var level = 0;
var started = false;
var clicks = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColours);
  $("#level-title").text("Level " + level);
  level++;
  playSound(randomChoosenColours);
  playAnimation(randomChoosenColours);
}

$(".btn").click(function() {
  if(started){
    clicks++;
    var userChoosenColour = $(this).attr('id');
    userChoosenPattern.push(userChoosenColour);
    playSound(userChoosenColour);
    playAnimation(userChoosenColour);
    checkAnswer();
  }
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function playAnimation(name) {
  $("#"+name).addClass("pressed");
  $("#"+name).fadeOut(50).fadeIn(50);
  setTimeout(function() {
    $("#"+name).removeClass("pressed");
  }, 100);
}

$(document).keypress(function() {
  if(!started) {
    nextSequence();
    started = true;
  }
});

function checkAnswer() {
  var x = userChoosenPattern.length-1;
  if (userChoosenPattern[x] == gamePattern[x]) {
    console.log("success");
    if(clicks == gamePattern.length) {
      userChoosenPattern = [];
      clicks = 0;
      setTimeout(function() {
        nextSequence();
      }, 500);
    }
  }else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  userChoosenPattern = [];
  gamePattern = [];
  clicks = 0;
  started = false;
}
