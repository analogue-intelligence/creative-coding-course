
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
    
    //The colour of the circle should be based off the getArea function
    //Draw ellipse 
    //Draw ellipse
    //Draw ellipse
}

