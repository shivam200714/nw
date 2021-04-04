 
 


function setup() {
  createCanvas(5000,8000);
  //createSprite(400, 200, 50, 50);
  
}

function draw() {
  
  background(255,255,255);
  translate(200,200)  
 // angleMode(DEGREES);
  h= hour();
  m=minute();
  s =second();

  scAngle= map(s,0,60,0,360)
  mnAngle= map(m,0,60,0,360)
 hrAngle= map(h%12,0,12,0,360)
 stroke (255,0,0)
  strokeWeight(7)
  fill("pink")
  ellipse(4,5,400, 400);

 push();
rotate(scAngle)
 stroke ("cyan")
  strokeWeight(7);
  line(0,0,100,0);
 pop();

 push();
 rotate(mnAngle)
 stroke ("green")
  strokeWeight(7);
  line(0,0,80,0);
 pop();

 push();
 rotate(hrAngle)
 stroke ("red")
  strokeWeight(7);
  line(0,0,50,0);
 pop();
  
  // hr=arc(50, 55, 50, 50, 0, HALF_PI);
  
  // mn=arc(50, 55, 60, 60, HALF_PI, PI);
  // sc=arc(50, 55, 70, 70, PI, PI + QUARTER_PI);

  drawSprites();
}
// function hour(){
//   text('Current hour:\n' + hr, 5, 50);
//   }
// function minute(){

//   text('Current minute: \n' + mn, 5, 50);
  
// }
// function second(){


//   text('Current second: \n' + sc, 5, 50);

// }