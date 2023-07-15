let posX  = 50;
let posY = 50;
let radius = 0; 

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);
    
    radius += 1;
    
    ellipse(posX, posY, radius, radius);
}

