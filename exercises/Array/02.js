let yPos = [20, 50, 80];

let xPos = 50;
let radius = 25;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    ellipse(xPos, yPos[0], radius, radius);
    ellipse(xPos, yPos[1], radius, radius);
    ellipse(xPos, yPos[2], radius, radius);
}

