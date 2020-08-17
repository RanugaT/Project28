var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function preload()
{

}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball = new paper(100,95,15)
	ground = new Ground(400,250,800,10)
	bottom = new DustBin(675,185,50,50)
	side1 = new Side(620,185,10,100)
	side2 = new Side(725,185,10,100)
	launcher1 = new launcher(ball.body,{x:85, y: 100})
	                                                            

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  launcher1.display();
  ball.display();
  ground.display();
  bottom.display();
  side1.display();
  side2.display();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher1.fly();
}



