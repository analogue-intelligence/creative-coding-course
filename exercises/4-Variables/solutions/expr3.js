let x = 0;
let y = 0;
let edge = 10;

function setup() {
    createCanvas(100,100);
    background(255);
}

function draw() {
    
    rect(x, y, edge, edge);
    
    x += 0.2;
    y += 0.3;
}

