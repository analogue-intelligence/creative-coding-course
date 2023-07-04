let posX  = width/2;
let posY = height/2;
let radius = 0;

function setup() {
    createCanvas(100,100);
    let radius = 30;
}

function draw() {
    background(255);
    
    radius = frameCount;
    
    circle(posX, posY, radius);
}

