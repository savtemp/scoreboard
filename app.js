let homeScore = 0
let awayScore = 0

function clearHome(){
    homeScore = 0
    let scoreElm = document.getElementById('home-score')
    scoreElm.innerText = homeScore
}

function clearAway(){
    awayScore = 0
    let scoreElm = document.getElementById('away-score')
    scoreElm.innerText = awayScore
}

function HomeAddOne(){
    homeScore += 1
    console.log(homeScore);
    let scoreElm = document.getElementById('home-score')
    scoreElm.innerText = homeScore
    console.log(homeScore)
}

function AwayAddOne(){
    awayScore += 1
    console.log(awayScore);
    let scoreElm = document.getElementById('away-score')
    scoreElm.innerText = awayScore
}

function HomeAddThree(){
    homeScore += 3
    console.log(homeScore);
    let scoreElm = document.getElementById('home-score')
    scoreElm.innerText = homeScore
}

function AwayAddThree(){
    awayScore += 3
    console.log(awayScore);
    let scoreElm = document.getElementById('away-score')
    scoreElm.innerText = awayScore
}