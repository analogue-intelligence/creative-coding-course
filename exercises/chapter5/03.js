let yPos = [20, 50, 80];

let xPos = 50;
let radius = 25;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    for(let i = 0; i < yPos.length; i++){
        circle(xPos, yPos[i], radius);
    }
}

