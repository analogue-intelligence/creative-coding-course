// Create a grid of rectangles using a for loop

let gridSize = 10; // Number of rectangles in each row and column
let rectSize; // Size of each rectangle

function setup() {
  createCanvas(400, 400);
  rectSize = width / gridSize; // Calculate the size of each rectangle based on the canvas width and grid size
}

function draw() {
    background(220);
    
    // Nested for loop to draw the grid of rectangles
    for (let i = 0; i < gridSize; i++) { // For each row
      for (let j = 0; j < gridSize; j++) { // For each column 
        let x = i * rectSize; // Calculate the x-coordinate of the rectangle - 1*10 = 10, 2*10 = 20, 3*10 = 30 .... so the rectangles will have a width of 10 
        let y = j * rectSize; // Calculate the y-coordinate of the rectangle - similarly for the heigh of the rectangles
        
        // Draw the rectangle at the specified position
        // fill(random(255), random(255), random(255));
        rect(x, y, rectSize, rectSize);
      }
    }
  }