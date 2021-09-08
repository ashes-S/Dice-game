var winner = document.querySelector("header>h1");
var diceFirst = document.querySelector(".dice1>img");
var diceSec = document.querySelector(".dice2>img");

document.querySelector("button").addEventListener("click", function(){
    result(dice1(), dice2());
})

//function to randomly change image of dice 1
function dice1(){
    var rnd = Math.round((Math.random()*5)+1);
    diceFirst.setAttribute("src", "/Images/" + rnd + ".png");
    return(rnd);
}

//function to randomly change image of dice 2
function dice2(){
    var rnd = Math.round((Math.random()*5)+1);
    diceSec.setAttribute("src", "/Images/" + rnd + ".png");
    return(rnd);
}

//function to declare the result
function result(dice1, dice2){
    if(dice1>dice2){
        winner.innerText="⛳hooray... Player 1 won";
    }
    else if(dice1<dice2){
        winner.innerText="⛳hooray... Player 2 won";
    }
    else if(dice1==dice2){
        winner.innerText="it's a draw!!";
    }
}
