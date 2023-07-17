let x = 0;
let y = 0;
let edge = 10;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    rect(x, y, edge, edge);
    
    x += 0.2;
    y += 0.3;
}

