function setup(){
 createCanvas(600,600);
 smooth();
 strokeWeight(4);
 background(0);

}



function draw(){

  //red
  //fill(255,0,0);
  fill(250,mouseX,239);
  rect(165,0,435,435);
  
  //blue
  //fill(0,0,255);
  //fill(0,0,mouseY);
  fill(random(255),random(255),random(50-255));
  rect(0,450,150,150);
  
  //yellow
  //fill(240,240,30);
  fill(random(255),random(255),random(255));
  rect(575,530,25,70);
  
  //white
  noFill();
  rect(0, 0, 150,200);
  rect(0,250,150,210);
  rect(165,450,395,150);
  rect(575,450,25,70);
  
  stroke(57,187,140);
  ellipse(mouseX,mouseY,20,20);
  
}


