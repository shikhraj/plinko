const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];


var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10, plinko11, plinko12, plinko13, plinko13, plinko14, plinko15, plinko16, plinko16, plinko17, plinko18, plinko19, pinko20, pinko21, pinko22, pinko23, pinko24, pinko25, pinko26, pinko27, pinko28, pinko29, pinko30, pinko31, pinko32, pinko33, pinko34, pinko35;
var ground;
var division1, division2, division3, division4, division5, division6, division7;

function setup() {
  createCanvas(490,800);
  
	engine = Engine.create();
  world = engine.world;
  

  //plinkos
  plinko1 = new Plinko(60, 60, 10);
  plinko2 = new Plinko(120,60,10);
  plinko3 = new Plinko(180,60,10);
  plinko4 = new Plinko(240,60,10);
  plinko5 = new Plinko(300,60,10);
  plinko6 = new Plinko(360,60,10);
  plinko7 = new Plinko(420,60,10);
  plinko8 = new Plinko(480,60,10);
  
  plinko9 = new Plinko2(10,  160, 10);
  plinko10 = new Plinko2(70, 160,10);
  plinko11 = new Plinko2(130,160,10);
  plinko12 = new Plinko2(190,160,10);
  plinko13 = new Plinko2(250,160,10);
  plinko14 = new Plinko2(310,160,10);
  plinko15 = new Plinko2(370,160,10);
  plinko16 = new Plinko2(430,160,10);


  plinko17 = new Plinko3(60, 260, 10);
  plinko18 = new Plinko3(120,260,10);
  plinko19 = new Plinko3(180,260,10);
  plinko20 = new Plinko3(240,260,10);
  plinko21 = new Plinko3(300,260,10);
  plinko22 = new Plinko3(360,260,10);
  plinko23 = new Plinko3(420,260,10);
  plinko24 = new Plinko3(480,260,10);


    
  plinko25 = new Plinko4(10, 360, 10);
  plinko26 = new Plinko4(70, 360,10);
  plinko27 = new Plinko4(130,360,10);
  plinko28 = new Plinko4(190,360,10);
  plinko29 = new Plinko4(250,360,10);
  plinko30 = new Plinko4(310,360,10);
  plinko31 = new Plinko4(370,360,10);
  plinko32 = new Plinko4(430,360,10);

  

  ground = new Ground(240,800,500,5);

  division1 = new Ground(70,650,5,400);
  division2 = new Ground(140,650,5,400);
  division3 = new Ground(210,650,5,400);
  division4 = new Ground(280,650,5,400);
  division5 = new Ground(350,650,5,400);
  division6 = new Ground(420,650,5,400);
  division7 = new Ground(490,650,5,400);
  division8 = new Ground(0,650,5,400);


	Engine.run(engine);
}

function draw() {
  background("blue");  
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko32.display();
  plinko31.display();


  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  if(frameCount%90===0){
    for(var j = 40; j <=width; j=j+50){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }}



  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  drawSprites();
}