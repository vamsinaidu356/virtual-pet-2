//Create variables here
var dog,dogimg,dogimg1;
var database;
var foodStock,foods;

function preload(){
  dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
database=firebase.database();
	createCanvas(500,500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale=0.15;

foodStock=database.ref('Food');
foodStock.on("value",readStock);


}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogimg1);
}

  drawSprites();
  //add styles here

  fill(255,255,254);
  stroke("black");
  text("food remaining:"+foods,170,200);
textSize(15);
text("Note:Press up arrow key to feed Drago Milk!",130,10,300,20);

}

function readStock(data){
foods=data.val();
}

function writeStock(x){
  if(x<=0){
  x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
