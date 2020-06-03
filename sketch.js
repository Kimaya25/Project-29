const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2;
var world,engine;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  ground1 = new ground (width/2,390,800,20);
  ground2 = new ground (300,350,100,20);
  box1 = new box(300,345,20,20);
  box2 = new box(320,345,20,20);
  box3 = new box(280,345,20,20);
  box4 = new box(310,335,20,20);
  box5 = new box(290,335,20,20);
  box6 = new box(300,300,20,20);
  polygon = new box(200,350,30,30);
  slingshot1 = new slingshot(polygon.body,{x:210,y:330});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  polygon.display();
  slingshot1.display();
  
  
  
  
  
  
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}
