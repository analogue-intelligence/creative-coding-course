let posX  = 50;
let posY = 50;
const radius = 15;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    //Re-define the value of the radius constant
    
    ellipse(posX, posY, radius, radius);
}