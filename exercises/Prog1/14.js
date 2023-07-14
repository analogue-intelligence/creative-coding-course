// 1. Define variables for positioning elements of the grid
let col = 0; // id of the column
let row = 0; // id of the row
let posX, posY;

// 2. Define constants for square size and the percentage of the canvas size devoted to the grid
const SIZE = 10;
const PADDING_FACTOR = 0.3;

let num_squares, grid_size, padding, spacing;

function setup() {
    createCanvas(100, 100);
    background(0);

    // 3. Define and initialize variables for number of squares, size of the grid, the padding and the spacing between elements    
    grid_size = parseInt(width * (1 - PADDING_FACTOR));
    padding = (width - grid_size) / 2;
    num_squares = Math.floor(grid_size / SIZE);
    spacing = (grid_size - num_squares * SIZE) / (num_squares - 1);
}

function draw() {

    // 4. Compute x and y position of grid element
    posX = padding + col * (SIZE + spacing);
    posY = padding + row * (SIZE + spacing);

    // 5. Draw rectangle in desired position
    rect(posX, posY, SIZE, SIZE);

    // 6. Advance to the next square
    col++;

    // 7. Add a conditional to update variables if the square falls outside of the grid area
    if (posX + SIZE == padding + grid_size) {
        col = 0;
        if (posY + SIZE == padding + grid_size) {
            row = 0;
        } else {
            row++;
        }
    }
}
