// 1. Define variables for positioning elements of the grid
let col = 0; // id of the column
let row = 0; // id of the row
let posX, posY;

// 2. Define constants for square size and the percentage of the canvas size devoted to the grid
const SIZE = 10;
const PADDING_FACTOR = 0.3;

// 8. Add variable to enable/disable drawing 
let drawing = true;

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

    // 8. Only draw if drawing (conditional)
    if(drawing){
        // 4. Compute x and y position of grid element
    posX = padding + col * (SIZE + spacing);
    posY = padding + row * (SIZE + spacing);

    // 5. Draw shape in desired position
    //    Vary the shapes size shrinking it randomly between 0.5 and 0.8 of its original size
    //    Use a subdued color on 50% of the shapes
    //    Use rectangles 80% of the time
    let prob_color = random(0, 1);
    let prob_shape = random(0, 1);
    let size_factor = random(0.5, 0.8);

    let neon_colors = [
        [77, 238, 234, 255],
        [116, 238, 21, 255],
        [255, 231, 0, 255],
        [240, 0, 255, 255],
        [0, 30, 255, 255],
      ];      

    if(prob_color > 0.5){
        fill(50,50,50,255);
    }else{
        fill(...random(neon_colors));
    }

    let new_size = SIZE*size_factor;
    let new_posX = posX + (1-new_size)*0.5;
    let new_posY = posY + (1-new_size)*0.5;

    if (prob_shape > 0.2){
        rect(new_posX, new_posY, new_size, new_size);
    }else{
        ellipseMode(CENTER);
        ellipse(new_posX + new_size * 0.5, new_posY + new_size * 0.5, new_size, new_size);
    }
    

    // 6. Advance to the next square
    col++;

    // 7. Add a conditional to update variables if the square falls outside of the grid area
    // 8. Change state of drawing variable if shape hits the edge
    if (posX + SIZE == padding + grid_size) {
        col = 0;
        if (posY + SIZE == padding + grid_size) {
            drawing = false;
        } else {
            row++;
        }
    }
    }
    
}
