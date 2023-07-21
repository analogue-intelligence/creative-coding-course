// 1. Define variables for positioning elements of the grid
let row = 0; // id of the row
let posY;


// 2. Define constants for square size and the percentage of the canvas size devoted to the grid
const SIZE = 50;
const PADDING_FACTOR = 0.3;

let num_squares, grid_size, padding, spacing;

function setup() {
    createCanvas(700, 700);
    background(0);

    // 3. Define and initialize variables for number of squares, size of the grid, the padding and the spacing between elements    
    grid_size = parseInt(width * (1 - PADDING_FACTOR));
    padding = (width - grid_size) / 2;
    num_squares = Math.floor(grid_size / SIZE);
    spacing = (grid_size - num_squares * SIZE) / (num_squares - 1);
}

function draw() {

    // 4. Compute x and y position of grid element
    posY = padding + row * (SIZE + spacing);

    // 5. Draw rectangle in desired position
    rect(padding, posY, SIZE, SIZE);

    // 6. Advance to the next square
    row++;

    // 7. Add a conditional to update variables if the square falls outside of the grid area
    if (posY + SIZE == padding + grid_size) {
        row = 0;
    }
}
