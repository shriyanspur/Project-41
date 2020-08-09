const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umb;
var drop;
var drops = [];
var maxDrops = 700;
var thImg;


function preload() {
  thImg = loadImage("th.png");
}

function setup(){
  createCanvas(400, 600);  
  engine = Engine.create();
  world = engine.world;
  
  umb = new Umbrella(205, 460, 113);
  
  for (var i=0; i < maxDrops; i++) {
    drops[i] = new Drop(random(4, 390), random(-40, -800), 3, 6);
  }
  
  
}

function draw(){
  background(26,26,26);

  Engine.update(engine);

  if (frameCount % 20 === 0) {
  image(thImg, 120 , 0, 100, 200);
  }

  if (frameCount % 107 === 0) {
    image(thImg, 250 , 0, 150, 250);
  }

  umb.display();
  for (var i=0; i < maxDrops; i++) {
    drops[i].display();
  } 
}