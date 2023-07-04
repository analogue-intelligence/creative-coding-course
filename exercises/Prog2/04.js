
function drawEllipse(posX, posY, w, h, r, g, b){
    fill(r, g, b);
    ellipse(posX, posY, w, h);
}

function getArea(w, h, maxArea){
    let area = w*h;
    area = map(area, 0, maxArea, 0, 255);
    return area;
}

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    let maxArea = width*height;
    
    drawEllipse(50, 50, 100, 30, 0, 0, getArea(100, 30, maxArea));
    drawEllipse(70, 50, 70, 70, 0, 0, getArea(70, 70, maxArea));
    drawEllipse(30, 60, 20, 90, 0, 0, getArea(20, 90, maxArea));
}

