
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  box=new Box(400,655,350,10);
	box1=new Box(575,546,10,250);
  box2=new Box(230,530,10,250);
  
  var b={
		restitution:0.3
  }
  
  box= Bodies.rectangle(500,200,25,50,b)
    World.add(world,box)

  var p={
    isStatic:false
   }
 
   ground = new Ground(600,height,1200,20)

   World.add(world,ground);

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2

  }
  
  
  ground.display();
  box.display()
	box1.display()
	box2.display()

  //Matter.bodies.circle(x,y,radius,[options], [maxSides])
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
  }
}



