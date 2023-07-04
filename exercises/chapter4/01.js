
function drawEllipse(posX, posY, w, h, r, g, b){
    fill(r, g, b);
    ellipse(posX, posY, w, h);
}

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);
    
    drawEllipse(50, 50, 30, 30, 150, 30, 56);
    drawEllipse(70, 50, 20, 30, 100, 230, 6);
    drawEllipse(30, 60, 10, 50, 203, 45, 81);
}

