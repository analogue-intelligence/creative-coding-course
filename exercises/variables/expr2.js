let x = 0;
let y = 0;
let radius = 10;

function setup() {
    createCanvas(100,100);
    background(255);
}

function draw() {
    
    ellipse(x, y, radius, radius);
    
    x += 0.1;
    y += 0.1;
}

