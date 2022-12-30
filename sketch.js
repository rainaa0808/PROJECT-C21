
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
	ball = Bodies.circle(50,500,20,ball_options)
	World.add(world,ball)
ground = new Ground(400,680,800,20)
leftWall = new Ground(500,620,20,100)
rightWall = new Ground(700,620,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  fill ("white")
  ellipse(ball.position.x,ball.position.y,20)
  ground.display()
  leftWall.display()
  rightWall.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-55})
	}
}


