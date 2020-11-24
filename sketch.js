var tower;
var towerImage;
var climber ; 
var climberImage;
var climbergroup ;
var ghost ;
var ghostjumping  ;
var ghoststanding;

var doorgroup;
var Invisibleblock;
var gamestate='play';
var spookysound;
var spooky


function preload(){
  
  towerImage=loadImage("tower.png")
  climberImage=loadImage("climber.png")
  ghostjumping=loadImage("ghost-jumping.png");
  ghoststanding=loadImage("ghost-standing.png")
spookysound=loadSound("spooky.wav");
}



function setup(){
  createCanvas(windowWidth,windowHeight)
  tower=createSprite(width/2,width/2);
  tower.addImage(towerImage);
  tower.velocityY=1
  tower.scale=1.5
  
  climbergroup=new Group();
  doorgroup=new Group();
  
  ghost=createSprite(width/3,height/3);
  ghost.addImage(ghoststanding);
  ghost.scale=0.4;

  spookysound.play();  
  
  
}


function draw(){
  background("Black")

  drawSprites();
  
if(gamestate==='play'){  
  
  if(tower.y>height-200){
    tower.y=300;   
     }

 spawndoors(); 
  
  if(keyDown("LEFT_ARROW")){
    ghost.x=ghost.x-5
    
    
  }
  
  if(keyDown("RIGHT_ARROW")){
    ghost.x=ghost.x+5
    
    
  }
  
  if(keyDown("space")){
    ghost.velocityY=-5;
    ghost.changeImage(ghostjumping)
    
  }
  
  ghost.velocityY=ghost.velocityY+0.5
  
  
   
     if(ghost.isTouching(climbergroup)){
    
    ghost.velocityY= 0     
    
    
    
    if(ghost.isTouching(Invisibleblock)||ghost.y<height){
      
    gamestate="end";
    
    
    
    
  } 
    
    
  }
   
  }
  
  


  
  
  
  
  

  

  if(gamestate==='end'){  

    ghost.visible=false;
  door.visible=false
    tower.visible=false;
    climbergroup.setVelocityY=0
    tower.velocityY=0
    textSize(20)  ;
text("Game Over",width/2,height/3)
  climbergroup.setlifetime=-1
  
  }
  
  
  
  
}



function spawndoors() {
  if (frameCount%300===0){
    

 
    climber = createSprite(250,100)
   
    climber.addImage(climberImage);
    climbergroup.add(climber);
    climber.velocityY=1
    climber.lifetime=600;  
    
    Invisibleblock = createSprite(250,100,100,10)
  Invisibleblock.x = climber.x
    Invisibleblock.velocityY=1
    Invisibleblock.visible=false;
  }
  
  
  
}








