let numCircles = 5; // Number of circles
let circleSize = 10; // Size of each circle
let circleSpacing = 20; // Spacing between circles
let circleSpeedMultiplier = 0.05; // Speed multiplier for circle movement

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255);

  for (let i = 0; i < numCircles; i++) {
    let circleX = 0; // Initial x position at the left side of the canvas
    let circleY = i * circleSpacing; // Calculate y position based on index
    let circleSpeed = mouseX * circleSpeedMultiplier * (i + 1); // Calculate circle speed based on mouseX and index
    
    circleX += circleSpeed; // Update x position based on circle speed
    
    ellipse(circleX, circleY, circleSize, circleSize); // Draw the circle at the updated position
  }
}
