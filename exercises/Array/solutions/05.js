let yPos = [50, 80, 20];

let xPos = 50;
let radius = 25;

function setup() {
    createCanvas(100,100);

    console.log(yPos);
}

function draw() {
    background(255);

    yPos.sort();

    console.log(yPos);

    //Note the similarities between the for loop and the foreach - mainly note how the loop uses an index to access every element (yPos[i] with index i), 
    //while with the foreach we access elements directly as a parameter (y in this case)
    yPos.forEach(function(y){
        ellipse(xPos, y, radius, radius);
    })
}

