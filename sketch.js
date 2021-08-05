const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit;


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(10,{x:250,y:50})
 
  var fruOptions={
  density:0.00001
  }
 
  fruit=Bodies.circle(20,100,50,fruOptions)
  Matter.Composite.add(rope.body,fruit)
  link = new Link(rope,fruit)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  
  ellipseMode(RADIUS)
  ellipse(fruit.position.x,fruit.position.y,50,50)

  Engine.update(engine);
  

 
   
}
