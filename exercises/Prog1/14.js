let posX  = 50;
let posY = 50;
const radius = 30;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    radius = 40;
    
    ellipse(posX, posY, radius, radius);
}

