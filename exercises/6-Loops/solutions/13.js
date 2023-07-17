// Draw multiple lines across the screen using a for loop

let numOfLines = 10; // Number of lines to draw
let spacing; // Spacing between lines

function setup() {
  createCanvas(400, 400);
  spacing = width / numOfLines; // Calculate the spacing based on canvas width
}

function draw() {
  background(220);

  let y = height / 2; // Vertical position of the lines
  let halfLength = 80; // Vertical length to add to the lines

  for (let i = 0; i < numOfLines; i++) {
    let x = i * spacing; // Calculate the x position based on spacing

    line(x, y - halfLength, x, y + halfLength); // Draw a vertical line
  }
}
