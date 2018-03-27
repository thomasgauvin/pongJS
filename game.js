var bPlayer1Moving = false;
var bPlayer2Moving = false;
var tickrate = 16;
var aKeys =  new Array();
aKeys[81] = false;  //q
aKeys[65] = false;  //a
aKeys[79] = false; //o
aKeys[76] = false; //l

//Starts the game
function run(){

}

//calculates and show the next step of the game
function step(){
    console.log("step");
}

function  movePlayerUp(player, pixels){
    var count = 0;
    var interval = setInterval(function (){
        position = player.getBoundingClientRect();
        parentPosition = player.parentElement.getBoundingClientRect();
        if(position.top>parentPosition.top+5){
            player.style.top = (position.top-parentPosition.top)-1+'px';
        }
        if(++count === pixels){
            clearInterval(interval);
        }
    }, 16) 
}

function  movePlayerDown(player, pixels){
    var count = 0;
    var interval = setInterval(function (){
        position = player.getBoundingClientRect();
        parentPosition = player.parentElement.getBoundingClientRect();
        console.log(position.bottom<parentPosition.bottom);
        if(position.bottom+5<parentPosition.bottom){
            player.style.top = (position.top-parentPosition.top)+1+'px';
        }
        if(++count === pixels){
            clearInterval(interval);
        }
    }, 16) 
}

//Listener for the body
function bodyListenerKeyDown(event){
    var k = event.which;
    aKeys[k]=true;
}

function bodyListenerKeyUp(event){
    var k = event.which;
    aKeys[k]=false;
}

var tick = function (){
    if(aKeys[81]){
        movePlayerUp(document.getElementById("player1"), 5);
    }
    if(aKeys[65]){
        movePlayerDown(document.getElementById("player1"), 5);
    }
    if(aKeys[79]){
        movePlayerUp(document.getElementById("player2"), 5);
    }
    if(aKeys[76]){
        movePlayerDown(document.getElementById("player2"), 5);
    }
    setTimeout(tick, tickrate)
}

tick();