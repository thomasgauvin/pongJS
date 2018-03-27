
//ball speed variables
ballSpeedX = 5;
ballSpeedY = 5;

//ball position variables
ballPosX = 487.5;
ballPosY = 287.5;

function setToMiddle(prevSpeedX){
  ballPosX = 487.5;
  ballPosY = 287.5;
  if(prevSpeedX>0){
    ballSpeedX=5;
    ballSpeedY=5;
  }
  else{
    ballSpeedX=-5;
    ballSpeedY=-5;
  }
}


function checkForHit(){
  player1PosY = document.getElementById("player1").style.top;
  player1PosX = document.getElementById("player1").style.left;

  player2PosX = document.getElementById("player2").style.left;
  player2PosY = document.getElementById("player2").style.top;

  // console.log(player1PosX);
  // console.log(player1PosY);
  // console.log("");
  // console.log(player2PosX);
  // console.log(player2PosY);
  // console.log("");
  // console.log(ballPosX);
  // console.log(ballPosY);
  // console.log("");

  //check if within the lengths of the player paddles
  // if(ballPosY>player2PosY&&ballPosY<player2PosY+150){
  //
  //   if(ballPosX>player2PosX-20){
  //     ballSpeedX*=-1;
  //     console.log("true");
  //   }
  // }
  // else if (ballPosY>player1PosY&&ballPosY<player1PosY+150){
  //   if(ballPosX<player1PosX){
  //     ballSpeedX*=-1;
  //   }
  // }
}


//working
function updateBallPosition(){
  document.getElementById("ball").style.top=ballPosY+'px';
  // console.log(ballPosY+"px");
  // console.log(ballPosX+"px");
  document.getElementById("ball").style.left=ballPosX+'px';
}

//iteration of ball moving
function moveball(){
  ballPosX += ballSpeedX;
  ballPosY += ballSpeedY;
}

//collisions and updating speeds
function updateBallSpeed(){
  var nextPosX = ballSpeedX+ballPosX;
  var nextPosY = ballSpeedY+ballPosY;


  var player1 = document.getElementById("player1");
  var styleP1 = window.getComputedStyle(player1, null);

  var player2 = document.getElementById("player2");
  var styleP2 = window.getComputedStyle(player2, null);
  // var player1PosY = document.getElementById("player1").style.top;
  // var player1PosX = document.getElementById("player1").style.left;
  //
  // var player2PosX = document.getElementById("player2").style.left;
  // var player2PosY = document.getElementById("player2").style.top;
  top1=styleP1["top"].substring(0,styleP1["top"].indexOf('p'));
  top2=styleP2["top"].substring(0,styleP2["top"].indexOf('p'));

  left1=styleP1["left"].substring(0,styleP1["left"].indexOf('p'));
  left2=styleP2["left"].substring(0,styleP2["left"].indexOf('p'));

  console.log("printing");
  if(ballPosX+25>995){
    ballSpeedX*=-1;
    setToMiddle(ballSpeedX);

  }
  else if(ballPosX<5){
    ballSpeedX*=-1;

    setToMiddle(ballSpeedX);
  }
  else if(ballPosX+25>left2&&ballSpeedX>0){
    if(ballPosY>top2&&ballPosY<(top2/1)+150){
      ballSpeedX*=-1.1;

    }
  }
  else if(ballPosX-25<left1&&ballSpeedX<0){
    if(ballPosY>top1&&ballPosY<(top1/1)+150){
      console.log(ballPosY);
      console.log(top1);
      console.log(ballPosY);
      console.log(top1+150);
      console.log("bounce p1")
      ballSpeedX*=-1.1;
    }
  }

  if(nextPosY>580){
    ballSpeedY*=-1;
  }
  else if(nextPosY<0){
    ballSpeedY*=-1;
  }
}
