let numOfLines = 10; // Number of lines to draw
let i = 0; // Counter variable

function setup() {
  createCanvas(100, 100);
}

function draw() {
  
  let y = height / 2; // Vertical position of the lines
  let halfLength = 40; // Vertical length to add to the lines
  let spacing = width / numOfLines; // Spacing between lines

  do {
    let x = i * spacing; // Calculate the x position based on spacing

    line(x, y - halfLength, x, y + halfLength); // Draw a vertical line
    
    i++; // Increment the counter variable
  } while (i < numOfLines);
}
