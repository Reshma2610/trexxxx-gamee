var bow;


function setup(){
  createCanvas(500,500)
  bow=createSprite(200,200,25,25);
  xyz();
}
 function draw(){
  background("black");
 
  bow.x=World.mouseX;
console.log("hai")
  
   drawSprites();
 }
 
 function xyz(){
  var arrow=createSprite(100,200,50,50)
 }