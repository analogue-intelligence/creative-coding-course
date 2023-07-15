function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
}

function draw() {
  // Outer squares
  fill(69, 155, 211);
  rect(0,0, 200, 200);
  fill(51, 117, 165);
  rect(200,0, 200, 200);
  fill(95,174,202);
  rect(0,200, 200, 200);
  fill(107, 197, 223);
  rect(200,200, 200, 200);

  // Inner squares
  fill(202, 112, 139);
  rect(100, 100, 100, 100);
  fill(185, 82, 117);
  rect(200, 100, 100, 100);
  fill(225, 135, 143);
  rect(100, 200, 100, 100);
  fill(228, 167, 184);
  rect(200,200, 100, 100);
}

 