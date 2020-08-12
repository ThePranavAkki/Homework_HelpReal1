var car1,car2,car3,car4,wall1,wall2,wall3,wall4;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(1600,400);

  car1 = createSprite(50,100,70,40);
  car1.velocityX = speed;

  car2 = createSprite(50,200,70,40);
  car2.velocityX = speed;

  car3 = createSprite(50,275,70,40);
  car3.velocityX = speed;

  car4 = createSprite(50,350,70,40);
  car4.velocityX = speed;

  wall1 = createSprite(1500,100,60,60);
  wall1.shapeColor = rgb(80,80,80);

  wall2 = createSprite(1500,200,60,60);
  wall2.shapeColor = rgb(80,80,80);

  wall3 = createSprite(1500,275,60,60);
  wall3.shapeColor = rgb(80,80,80);

  wall4 = createSprite(1500,350,60,60);
  wall4.shapeColor = rgb(80,80,80);
}

function draw() {
  background(255,255,255);  

  if (wall1.x - car1.x < (car1.width + wall1.width/2)) 
  {
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if (deformation > 180)
    {
      car1.shapeColor = color(255,0,0);
    }
    
    if (deformation < 180 && deformation > 100)
    {
      car1.shapeColor = (230,230,0);
    }
    
    if (deformation<100)
    {
      car1.shapeColor = (0,255,0);
    }
  }
  
  drawSprites();
}