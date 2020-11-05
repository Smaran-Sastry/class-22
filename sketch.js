const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  object_options = {
    isStatic:true
  }
  object = Bodies.rectangle(200, 390, 500, 20, object_options);
  World.add(world, object);
  ball = Bodies.circle(200, 200, 20, {isStatic:false, restitution:1});
  World.add(world, ball);
  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode (CENTER);
  rect(object.position.x, object.position.y, 50, 60);

 ellipseMode(RADIUS)
 ellipse(ball.position.x, ball.position.y, 20);

  drawSprites();
}

