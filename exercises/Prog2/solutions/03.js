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
}

