const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine,world,ball
var ground

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world
  var b ={
    restitution:1
  }
  ball=Bodies.rectangle(500, 200, 50, 50,b);
  World.add(world,ball)
  console.log(ball)

  var p ={
    isStatic:true
  }
  ground=Bodies.rectangle(400, 390, 800, 10,p);
  World.add(world,ground)
}

function draw() {
  background(0);  

  Engine.update(engine)
  rectMode(CENTER)
  rect(ball.position.x,ball.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,10)

  drawSprites();
}