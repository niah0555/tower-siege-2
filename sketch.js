

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var state = "start";

function preload() {
    
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  block1= new block(260, 100, 70, 40);
  block2= new block(440, 190, 70, 40);
  block3= new block(340, 100, 70, 40);
  block4= new block(435, 340, 70, 40);
  block5= new block(300, 50, 70, 40);
  block6= new block(400, 180, 70, 40);
  block7= new block(670, 100, 70, 40);
  block8= new block(400, 100, 70, 40);

  stand1 = new stand(700, 400, 200, 10);
stand2 = new stand (300, 400,100, 10);

}
function draw() {
  background(255,255,255);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stand1.display();
stand2.display();
  
  drawSprites();
}
