function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255);

  // Check if the mouse is on the left side of the screen using the width system variable
  // If so create a red rectangle on the left side of the canvas

  // Check if the mouse is on the upper half of the canvas
  // If so then a blue rectangle is drawn on the upper half of the canvas

  // In the case that the mouse is not on the left nor on the upper half of the canvas, 
  // then draw a green rectangle on the lower right side of the canvas

  //Lines intersecting the center of the canvas
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);
}