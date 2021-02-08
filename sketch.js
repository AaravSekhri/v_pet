//Create variables here
var dog, happyDog;
var dogImage, happyDogImage;
var foodS, foodStock;
var addFood, feedButton;
var foodObj;

var database;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.18;

  database = firebase.database();
  /*foodStock = database.ref('Food');
  foodStock.on("value", readStock);*/

  feedButton = createButton('Feed the dog');
  addFood = createButton('Add Food');

  foodObj = new Food();
}

function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    foodObj.deductFood();
    foodObj.updateFoodStock(foodS)
    dog.addImage(happyDogImage);
  }

  foodObj.display();
  foodObj.getFoodStock();

  addFood.mousePressed(foodAdd)

  drawSprites();
  fill("red")
  push()
  stroke("blue")
  textSize(20);
  text("Food: "+foodS, 220, 50)
  pop()
  text("Press the up arrow, to feed the dog.", 200, 75);

  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })

  //text("Last Fed: "+lastFed+"PM")
}

function foodAdd(){
  foodS+=1;
//  foodObj.updateFoodStock(foodS);
  console.log(foodS)
}







