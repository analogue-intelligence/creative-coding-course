function setup() {
  createCanvas(100, 100);
  createCanvas(100, 100);
}

function draw() {
  background(255);
  
  if (mouseX <= width/2) {
    fill(255, 0, 0);
    rect(0, 0, width/2, height);
  }
  else if (mouseY < height/2) {
    fill(0, 0, 255);
    rect(0, 0, width, height/2);
  }
  
  // Check if the mouse is neither on the left side nor on the top side of the canvas
  // If so, draw a green rectangle on the bottom-right side of the canvas
  
  // Draw lines intersecting the center of the canvas
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
}
