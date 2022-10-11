var easy = false;
var lives = 3;
var difficulty = 4;
var level = 1;
var circlesOnPages = document.querySelectorAll(".circle");
var randomNumber = randomNum(circlesOnPages.length + 1);
var score = document.getElementById("score");
var levelID = document.getElementById("level");
var startOver = document.querySelector("#startOver");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
  reload();
  checkClick();
  switchModeBtn();
}

function checkClick() {
  for (var i = 0; i < circlesOnPages.length; i++) {
    circlesOnPages[i].addEventListener("click", function() {
      this.style.background = "blue";
      var idID = this.id;
      console.log("Circle Clicked " + idID);
      if(Number(idID) === randomNumber) {
        directHit();
      } else {
        enemyTurn();
      }
    });
  }
}

function switchModeBtn() {
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "WWI" ? easy = true : easy = false;
      reload();
    });
  }
}

function randomNum(numNum) {
  var num = Math.floor(Math.random() * numNum);
  return num;
}

function directHit() {
  level++;
  difficulty--;
  if(difficulty === 1) {
    for (var i = 0; i < circlesOnPages.length; i++) {
      circlesOnPages[i].style.background = "green";
    }
    alert('YOU WON!');
    reload();
  }
  levelID.textContent = "• Level: " + level;
  for (var i = 0; i < circlesOnPages.length; i++) {
    circlesOnPages[i].style.background = "green";
  }
  // blinkText("Direct Hit!!", "info", "green");
  alert("WIN!!")
  randomNumber = randomNum(circlesOnPages.length + 1);
  for (var i = 0; i < circlesOnPages.length; i++) {
    circlesOnPages[i].style.background = "steelblue";
  }
}

function enemyTurn() {
  var chance = randomNum(difficulty)
  if(chance === 1) {
    lives--;
    score.textContent = "Lives: " + lives;
    if(lives <= 0){
      for (var i = 0; i < circlesOnPages.length; i++) {
        circlesOnPages[i].style.background = "red";
      }
      alert('Game Over! Try Again');
      reload();
    } else {
      blinkText("YOU HIT A FISH!!", "info", "red");
      // info.textContent = "You were hit!!!";
    }
  }
}

function reload() {
  if (easy) {
    lives = 5;
  } else {
    lives = 3;
  }
  score.textContent = "Lives: " + lives;
  level = 1;
  levelID.textContent = "• Level: " + level;
  randomNumber = randomNum(circlesOnPages.length + 1);
  for (var i = 0; i < circlesOnPages.length; i++) {
    circlesOnPages[i].style.background = "steelblue";
  }
}

startOver.addEventListener("click", function() {
  reload();
});

function blinkText(text, id, color) { // From user1822824 on stackexchange
  // Blink interval
  setInterval(blinker, 250);

  // Flag to see what state the text is in
  var flag = true;

  // Number of times to blink text
  var blinkNum = 10;
  var i = 1;
  var divID = document.getElementById(id);

  function blinker() {
    if (i < blinkNum) {
      if (flag) {
        divID.style.color = color;
        divID.innerHTML = text;
        flag = false;
      } else {
        divID.innerHTML = "";
        flag = true;
      }

      i++
    } else {
      // Delete if it's still showing
      divID.innerHTML = "";

      // Stop blinking
      clearInterval(blinker);
    }
  }
}
