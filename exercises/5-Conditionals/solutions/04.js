function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    let posX  = width/2;
    let posY = height/2;
    let radius = 10;
    
    ellipse(posX, posY, radius, frameCount);
}

