var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
 
  car = createSprite(800,50, 75, 50);

  wall = createSprite(800, 350, 50, 400);


  speed=random(55,90)
  weight=random(400,1400)
}

function draw() {
  background(255,255,255);  
  

  car.shapeColor="purple";

  wall.shapeColor="pink";

car.velocityX = speed;

if(car.isTouching(wall)){
car.velocityX=0;
}

deformation = 0.5+weight+speed/22500;

if(deformation === 0>100){
car.shapeColor = color(0,225,0)
}

if(deformation === 100>180){
  car.shapeColor = color(230,230,0)
  }

  if(deformation === 180>0){
    car.shapeColor = color(255,0,0)
    }

  drawSprites();
}