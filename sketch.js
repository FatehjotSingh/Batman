const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var bruce,walk
var light,lightning
var rainDrops=[]
var rainPosition

function preload(){
    walk=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    light=loadAnimation("1.png","2.png","3.png","4.png")
}

function setup(){
   createCanvas(400,700)

   engine = Engine.create();
  world = engine.world;

   bruce=createSprite(200,500,10,10)
   bruce.addAnimation("walking",walk)
   bruce.scale=0.5

   lightning=createSprite(200,100,10,10)
   lightning.addAnimation("boom",light)
   lightning.scale=0.5
   lightning.visible=false
   
   brell=new Brell(210,435)
}

function draw(){
    background(0)
    Engine.update(engine);
    rainPosition=random(20,600)
    if(frameCount%3===0){
    rainDrops.push(new Drop(rainPosition,10))
}
    for(var z=0;z<rainDrops.length;z=z+1){
        rainDrops[z].display();
    }
    drawSprites()

    if(frameCount%100===0){
        lightning.visible=true
    }
    if(frameCount%140===0){
        lightning.visible=false
    }
    //brell.display();
}   

