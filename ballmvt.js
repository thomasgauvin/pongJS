
//ball speed variables
var ballSpeedX = 0;
var ballSpeedY = 0;

//ball position variables
var ballPosX = 400;
var ballPosY = 300;

//working
function updateBallPosition(){
  document.getElementById("ball").style.top=ballPosY+'px';
  // console.log(ballPosY+"px");
  // console.log(ballPosX+"px");
  document.getElementById("ball").style.left=ballPosX+'px';
}

//iteration of ball moving
function moveball(){
  ballPosx += ballSpeedX;
  ballPoxY += ballSpeedY;
}

//collisions and updating speeds
function updateBallSpeed(){
  var nextPosX = ballSpeedX+ballPosX;
  var nextPosY = ballSpeedY+ballPosY;
  if(nextPosX>1000){
    ballSpeedX*=-1;
  }
  else if(nextPosX<0){
    ballSpeedY*=-1;
  }

  if(nextPosY>600){
    ballSpeedY*=-1;
  }
  else if(nextPosY<0){
    ballSpeedY*=-1;
  }
}
