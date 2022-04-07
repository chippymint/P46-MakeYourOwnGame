var butterflies ;
var butterfliesImg1, butterfliesImg2;
var girl, girl_jumping, girl_crying;
var girlJumpingImg
var girlStandingImg;
var girlCryingImg
var score;
var backgroundImage;
var score = 0;
var gameOver, restart;
var bees, beeRight, beeLeft;

let engine;
let world;

function preload() {
 backgroundImage = loadImage("./assets/background.png");
 girlJumpingImg = loadImage("./assets/girlJumping.png");
 girlStandingImg = loadImage("./assets/girlstanding.png");
 girlCryingImg = loadImage("./assets/girlCrying.png");
 butterfliesImg1 = loadImage("./assets/butterflyImg1.png");
 butterfliesImg2 = loadImage("./assets/butterflyImg2.png");
 beeRight = loadImage("./assets/beeRight.png");
 beeLeft = loadImage("./assets/beeLeft.png");

 gameOverImg = loadImage("./assets/gameOver.png");
  restartImg = loadImage("./assets/restart.png");

 girl_jumping = loadAnimation("girlstanding.png","girlJumping.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);
  girl = new Girl();
  butterflies = new Group();
  bees = new Group();


  butterflies = createSprite(50,100,10,10)
  butterflies.addAnimation('flying',fly);
  butterflies.scale = 0.1

  beeRight = createSprite(50,100,10,10)
  beeRight.addAnimation('flying',fly);
  beeRight.scale = 0.1

  beeLeft = createSprite(50,100,10,10)
  beeLeft.addAnimation('flying',fly);
  beeLeft.scale = 0.1
  
  girl = createSprite(50,100,10,10);
  girl.addAnimation("jumping", jump);
  girl.scale = 0.3

  gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(width/2,height/2);
  restart.addImage(restartImg);
}

function draw() {
  background(backgroundImage);
  drawSprites();

  Engine.update(engine);
  girl.show();

  drawSprites();
}

function spawnButterflies() {
  if(frameCount % 60 === 0) {
    var butterflies = createSprite(600,height-95,20,30);
    butterflies.setCollider('circle',0,0,45)
    
  
    butterflies.velocityX = -(6 + 3*score/100);
    
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: butterflies.addImage(obstacle1);
              break;
      case 2: butterflies.addImage(obstacle2);
              break;
      default: break;
    }
  }
}