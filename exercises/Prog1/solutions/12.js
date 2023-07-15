let x = 0; // Initial position
let y; // Vertical position of the line
let halfLength = 40; // Vertical length to add to the line
let spacing = 20; // Spacing between lines

function setup() {
  createCanvas(100, 100);
  y = height / 2; // y is defined in setup() since the canvas has to be created first so as to use the height system variable 
}

function draw() {
  let i = 0;

  do {
    line(i, y - halfLength, i, y + halfLength);
    i += spacing;
  } while (i <= width);
}
