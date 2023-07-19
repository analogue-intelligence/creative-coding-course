function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255);
  
  // Check if the mouse is on the left side of the screen using the mouseX system variable
  // If so, create a red rectangle on the left side of the canvas
  
  // Draw lines intersecting the center of the canvas
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
}
