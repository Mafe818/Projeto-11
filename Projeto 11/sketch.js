var path;
var boy;
var leftBoundary;
var rightBoundary
var pathImg;
var boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
  path=createSprite (200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

//Criando menino que corre 
boy=createSprite(100,285,5,5);
boy.addAnimation("running",boyImg);
boy.scale=0.07;

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,200,90,400);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,200,75,400);
rightBoundary.visible = false;
}


function draw() {
  background(0);
  path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX;

 //Reiniciar o fundo
  if(path.y > 400){
    path.y = height/2;
  }

// Menino colidindo com os limites
boy.collide(leftBoundary);
boy.collide(rightBoundary);

 drawSprites();

 }




