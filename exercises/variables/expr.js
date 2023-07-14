let radius = 20;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);
    
    ellipse(0, 0, radius, radius);
    
    radius += 0.1;
}

