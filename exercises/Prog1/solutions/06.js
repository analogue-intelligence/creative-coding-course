function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255);
 
  if(mouseX <= width/2){
    fill(255, 0, 0);
    rect(0, 0, width/2, height);
  }

  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
}