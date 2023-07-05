// Create shapes randomly

// Define variables which will be randomised
let posX, posY, radius;
let r, g, b;

// Every time the mouse is pressed a random circle is created
function mousePressed(){
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

function setup() {
  createCanvas(100, 100);
  background(0); // Try moving the background to the draw() function, what happens?
}

function draw() {

}