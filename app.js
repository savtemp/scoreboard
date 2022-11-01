let homeScore = 0;
let awayScore = 0;

function clearHome() {
  homeScore = 0;
  let scoreElm = document.getElementById("home-score");
  scoreElm.innerText = homeScore;
}

function clearAway() {
  awayScore = 0;
  let scoreElm = document.getElementById("away-score");
  scoreElm.innerText = awayScore;
}

function HomeAddOne() {
  homeScore += 1;
  console.log(homeScore);
  let scoreElm = document.getElementById("home-score");
  scoreElm.innerText = homeScore;
  console.log(homeScore);
}

function AwayAddOne() {
  awayScore += 1;
  console.log(awayScore);
  let scoreElm = document.getElementById("away-score");
  scoreElm.innerText = awayScore;
}

function HomeAddThree() {
  homeScore += 3;
  console.log(homeScore);
  let scoreElm = document.getElementById("home-score");
  scoreElm.innerText = homeScore;
}

function AwayAddThree() {
  awayScore += 3;
  console.log(awayScore);
  let scoreElm = document.getElementById("away-score");
  scoreElm.innerText = awayScore;
}

// NOTE have 1 button that randomly chooses whether the home or the away team score increase by 1
// function increaseScore(){
//     let score = 0
//     if(score = 0){
//         Math.random(scoreElm = getElementById("random-score"))
//     } else {

//     }
//     score ++
// }
