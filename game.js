//jshint esversion:6
let buttonColours = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

let gamePattern = [];

var gameStart = false;

let level = 0;

let timesClicked = 0;

let soundPath = "";

let play = "";

let sound = "";

$(document).keypress(function(){
  if (gameStart===false){
    nextSequence();
    gameStart = true;
  }
});

function nextSequence(){

  $("h1").text("Level " + ++level);

  randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

let buttonChosen = "#" + randomChosenColour;
setTimeout(function() {
  $(buttonChosen).fadeOut(100).fadeIn(100);
});

  playSound(randomChosenColour);
}

$(".btn").on("click",function(){
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animateColour(userChosenColour);
  timesClicked++;
  checkAnswer();
});

function playSound(name){
  switch(name){
    case "blue":
     soundPath = "sounds/" + name + ".mp3";

     sound = new Audio(soundPath);
     play = sound.play();

      if (play !== undefined) {
          play.then(_ => {
              sound.play();
          }).catch(error => {
              alert("In order to play this game, autoplay must be enabled!");
          });
      }
      break;
    case "green":
     soundPath = "sounds/" + name + ".mp3";

      sound = new Audio(soundPath);
      play = sound.play();

      if (play !== undefined) {
          play.then(_ => {
              sound.play();
          }).catch(error => {
              alert("In order to play this game, autoplay must be enabled!");
          });
      }
      break;
    case "wrong":
     soundPath = "sounds/" + name + ".mp3";

      sound = new Audio(soundPath);
      play = sound.play();

      if (play !== undefined) {
          play.then(_ => {
              sound.play();
          }).catch(error => {
              alert("In order to play this game, autoplay must be enabled!");
          });
      }
      break;
    case "red":
     soundPath = "sounds/" + name + ".mp3";

      var sound = new Audio(soundPath);
      var play = sound.play();

      if (play !== undefined) {
          play.then(_ => {
              sound.play();
          }).catch(error => {
              alert("In order to play this game, autoplay must be enabled!");
          });
      }
      break;
    case "yellow":
     soundPath = "sounds/" + name + ".mp3";

      sound = new Audio(soundPath);
      play = sound.play();

      if (play !== undefined) {
          play.then(_ => {
              sound.play();
          }).catch(error => {
              alert("In order to play this game, autoplay must be enabled!");
          });
      }
        break;
    default:
  }
}

function animateColour(currentColour){

  let colorID = "#" + currentColour;

  $(colorID).addClass("pressed");

  setTimeout(function() {
    $(colorID).removeClass("pressed");
  }, 100);
}

function checkAnswer(){
  console.log(gamePattern);
  console.log(userClickedPattern);
  if(gamePattern[timesClicked-1] === userClickedPattern[timesClicked-1]){
    if(gamePattern.length===userClickedPattern.length){
      timesClicked = 0;
      setTimeout(function(){
        nextSequence();},
        1000);
      userClickedPattern = [];
    }
  }
else{
  wrong();
}
}

function wrong(){
  $("body").addClass("game-over");
  $("h1").text("Game Over, Press Any Key to Restart");

  playSound("wrong");

  setTimeout(function(){
  $("body").removeClass("game-over");},200);

  gameStart = false;

  level = 0;

  gamePattern = [];
  userClickedPattern = [];
}
