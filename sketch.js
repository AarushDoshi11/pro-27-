
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;
var ball1,ball2,ball3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = createSprite(200,200,300,100);
    box1.shapeColor  = "black";
   

	ball1 = createSprite(200,400,50,50);
	ball1.shapeColor  = "black";


	ball2 = createSprite(100,400,50,50);
	ball2.shapeColor  = "black";

	
	ball3 = createSprite(300,400,50,50);
    ball3.shapeColor  = "black";
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  drawSprites();
  
 
}



