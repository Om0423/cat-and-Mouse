var cat,mouse,catImg,mouseImg;




function preload() {
    //load the images here
    catImg = loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
    mouseImg = loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(200,200,50,50);
    mouse = createSprite(300,200,50,50);
    //create tom and jerry sprites here
   
}

function draw() {
  createCanvas(400,400)
    background(255);
    garden = createSprite(200,200);
   
    

    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW) {
 cat.velocityX = -5;
 cat.addAnimation("catRunning",catImg2);
 cat.changeAnimation("catRunning");

  }



  //For moving and changing animation write code here


}
