function setup() {
  createCanvas(400, 400);
}
var mode = 0;

function draw() {
  background(220);

  if (mode == 1) {
    ellipse(200,200, 100, 100);
  }
  else if (mode == 2) {
    rectMode(CENTER);
    rect(200, 200, 100, 100);
  }
  else if (mode === 3) {
    line(400, 0, 0, 400);
  }
  else {
    line(0, 0, 400, 400);
  }
}

function mousePressed() {
  mode = 2;
}

function keyPressed() {
  if (keyCode == ENTER) {
    mode = 3
  }
  else {
    mode = 1;
  }
}
