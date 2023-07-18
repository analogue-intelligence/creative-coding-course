// Create a grid of rectangles using a for loop

let gridSize = 10; // Number of rectangles in each row and column
let rectSize; // Size of each rectangle

function setup() {
  createCanvas(100, 100);
  rectSize = width / gridSize; // Calculate the size of each rectangle based on the canvas width and grid size
}

function draw() {
    background(220);
    
    // Nested for loop to draw the grid of rectangles
      // For each row
       // For each column 
        // Calculate the x-coordinate of the rectangle - 1*10 = 10, 2*10 = 20, 3*10 = 30 .... so the rectangles will have a width of 10 
        // Calculate the y-coordinate of the rectangle - similarly for the height of the rectangles
        // Draw the rectangle at the specified position and a size of (rectSize - 1) by (rectSize - 1)
      
}