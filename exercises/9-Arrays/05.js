// The yPos array has been changed and is now not sorted
let yPos = [50, 80, 20];

let xPos = 50;
let radius = 25;

function setup() {
    createCanvas(100,100);

    // Before sorting yPos
    console.log(yPos);
}

function draw() {
    background(255);

    //Sort the yPos array 
    yPos.sort();

    // After sorting yPos
    console.log(yPos);

    yPos.forEach(function(y){
        ellipse(xPos, y, radius, radius);
    })
}

