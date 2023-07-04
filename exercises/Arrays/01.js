let yPos1 = 20;
let yPos2 = 50;
let yPos3 = 80;

let xPos = 50;
let radius = 25;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    circle(xPos, yPos1, radius);
    circle(xPos, yPos2, radius);
    circle(xPos, yPos3, radius);
}

