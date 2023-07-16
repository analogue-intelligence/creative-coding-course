function setup() {
  createCanvas(100, 100);
  background(220);
}

function draw() {
  // Draw a curve using the curve() function
  background(255);
  stroke(0);
  
  
  curve(10, 10, 10, 50, 90, 50, 90, 90);

  
  // // Draw control point
  ellipse(10, 10, 10, 10);
  ellipse(90, 90, 10, 10);
 
  // Draw control lines
  line(10, 10, 90, 90);
}