var starImg, bgImg;
var star, starBody
var fada, fadaimg
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaimg = loadAnimation ("images/fairyImage1.png", "images/fairyImage2.png")
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(300, 400)
    fada.addAnimation("fadinha", fadaimg)

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){

    if (star.y > 470 && starBody.position.y > 470){
        Matter.body.setStatic (starBody, true)
    }
}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        fada.velocityX = -5
    }
    if (keyCode === RIGHT_ARROW){
        fada.velocityY = 5
    }
}
