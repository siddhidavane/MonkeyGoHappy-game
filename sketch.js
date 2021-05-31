
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground,groundImage,wallpaper,wallpaperImage;
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 wallpaperImage=loadImage("images (22).jfif");
  groundImage=loadImage("download (8).png");
}



function setup() {
  createCanvas(600, 500);
  


  var survivalTime=0;
  
  //creating monkey
   monkey=createSprite(70,400,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.14;
  
  
  ground = createSprite(500,450,980,10);
  ground.velocityX=-4;
  ground.addImage(groundImage);
  ground.scale=3;
  ground.x=ground.width/2;
  console.log(ground.x);
  
 wallpaper=createSprite(250,100,200,20);
wallpaper.addImage(wallpaperImage);
  //wallpaper.velocityX=2;
   //wallpaper.x=wallpaper.width/2;
  
  wallpaper.scale=2.5; 
  
  

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
  
}


function draw() {
  
background("lighhtblue")
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
      //monkey.velocityX=2;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("black");
  text("Score: "+ score, 450,50);        
  
  
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime,30,50);
}



function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.09;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(150,270,10,40);
    obstacle.velocityX = -4;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.12;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 200;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
