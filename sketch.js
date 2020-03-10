var ground;
var player,jumpstate,speed,particals;
var ending, humanskill, monsterskill;
var enemy1,enemy2,enemy3;
var entityGroup;

function setup() {
  createCanvas(4000, 400);
  entityGroup = createGroup();

  ground = createSprite(width/2,400,width,100);

  player = createSprite(50,50,20,20);
  player.shapeColor = "red";

  enemy1 = createSprite(150, 50, 20,20);
  enemy1.shapeColor = "green";
  enemy2 = createSprite(170, 50, 20,20);
  enemy2.shapeColor = "green";
  enemy3 = createSprite(190, 50, 20,20);
  enemy3.shapeColor = "green";

  entityGroup.add(enemy1);
  entityGroup.add(enemy2);
  entityGroup.add(enemy3);
  entityGroup.add(player);

  ending = null;
  humanskill = 0;
  monsterskill = 0;

  particals = 1000;

  jumpstate = false;
}

function draw() {
  background(240);
  player.velocityX = 0;
  speed = player.width/2;

  if(speed > 10){
    speed = 10;
  }

  control();

  if(particals === 0){
    if(player.width > 20){
      player.width = player.width - 1;
      player.height = player.width;
    }
    else if(player.width < 20){
      player.width = player.width + 1;     
      player.height = player.width; 
    }
  }

  Gravity(player,5/100 * player.width);
  Gravity(enemy1);
  zombieAI(enemy1,2);
  Gravity(enemy2);
  zombieAI(enemy2,3);
  Gravity(enemy3);
  zombieAI(enemy3,4);
  console.log(player.width);

  entityGroup.collide(ground);

  drawSprites();

  text("Particles: " + Math.round(particals),player.x -  player.width,player.y - player.height - 5);
}

function Gravity(entity, gravity){
  if(gravity === undefined){
    gravity = 0.5;
  }
  entity.velocityY = entity.velocityY + gravity;
}

function zombieAI(entity,speed){
  if(player.x > entity.x){
    entity.velocityX = speed;
  }
  else if(player.x < entity.x){
    entity.velocityX = -speed;
  }
}