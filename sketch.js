
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var bob1Object,bob2Object,bob3Object,bob4Object,bob5Object,roofObject	
var world;


function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	bob1Object=new bob(420,250,40);
	bob2Object=new bob(460,250,40);
	bob3Object=new bob(500,250,40);
	bob4Object=new bob(540,250,40);
	bob5Object=new bob(580,250,40);
	roofObject=new roof(500,100,250,29);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  bob1Object.display();
  bob2Object.display();
  bob3Object.display();
  bob4Object.display();
  bob5Object.display();
  roofObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





