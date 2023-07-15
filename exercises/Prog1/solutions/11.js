// Draw multiple lines across the screen using a while loop 

let x = 0; // Initial position

function setup() {
  createCanvas(100, 100);
}

function draw() {
  
  // Draw a line repeatedly using a while loop
  let y = height / 2; // Vertical position of the line
  let halfLength = 40; // Vertical length to add to the line
  let spacing = 20; // Spacing between lines
  
  while (x <= width) {
    line(x, y - halfLength, x, y + halfLength); // Draw a vertical line
    x += spacing; // Move the position horizontally
  }
}
