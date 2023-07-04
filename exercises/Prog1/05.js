// Create shapes randomly

// Define variables which will be randomised
let posX, posY, radius;
let r, g, b;

function setup() {
  createCanvas(100, 100);
}

function draw() {
  
  // Try removing the background to see what happens
  background(255);
  
  // Randomise all of the properties of the circle, within the given ranges along with the colour of the circle
  posX = random(0, width);
  posY = random(0, height);
  radius = random(0, 100);
  
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
  // Create randomised circle
  fill(r, g, b);
  ellipse(posX, posY, radius, radius);

}