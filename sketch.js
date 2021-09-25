function preload(){
  bath1 = loadAnimation("images/bath1.png");
  bath2 = loadAnimation("images/bath2.png");
  brush = loadAnimation("images/brush.png");
  drink1 = loadAnimation("images/drink1.png");
  drink2 = loadAnimation("images/drink2.png");
  eat1 = loadAnimation("images/eat1.png");
  eat2 = loadAnimation("images/eat2.png");
  gym1 = loadAnimation("images/gym1.png");
  gym2 = loadAnimation("images/gym2.png");
  gym11 = loadAnimation("images/gym11.png");
  gym12 = loadAnimation("images/gym12.png");
  iss = loadAnimation("images/iss.png");
  move = loadAnimation("images/move.png");
  move1 = loadAnimation("images/move1.png");
  sleep = loadAnimation("images/sleep.png");
}



function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background("background", iss);

if(keydown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keydown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym1);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}

if(keydown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat)
  astronaut.changeAnimation("eating")
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}

if(keydown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath1)
  astronaut.changeAnimation("bathing")
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}

if(keydown("m")){
  astronaut.addAnimation("moving", move)
  astronaut.changeAnimation("moving")
  astronaut.velocityX = -2
  astronaut.velocityY = 2
}



}
