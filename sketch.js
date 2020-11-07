var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);
  wall.shapeColor=color(80,80,80);
  
  car.velocityX=speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var Deformation=0.5*weight*speed*speed/22509;
    console.log(Deformation);
    if(Deformation>180){
      car.shapeColor="red";
      console.log("Red");
    }
    if(Deformation<180 && Deformation>100){
      console.log("Yellow");
      car.shapeColor="yellow";
      
    }
    if(Deformation<100){
      console.log("Green");
      car.shapeColor="green";
    }
  }

  drawSprites();}

  

  
  
