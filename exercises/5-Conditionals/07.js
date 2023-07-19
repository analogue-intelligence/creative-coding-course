function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255);
  
  if (mouseX <= width/2) {
    fill(255, 0, 0);
    rect(0, 0, width/2, height);
  }
  
  // Check if the mouse is in the upper half of the canvas using the mouseY system variable
  // If so, draw a blue rectangle on the top side of the canvas
  
  // Draw lines intersecting the center of the canvas
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
}
