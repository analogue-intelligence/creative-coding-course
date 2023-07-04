let yPos = [20, 50, 80];

let xPos = 50;
let radius = 25;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    circle(xPos, yPos[0], radius);
    circle(xPos, yPos[1], radius);
    circle(xPos, yPos[2], radius);
}

