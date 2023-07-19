function getArea(w, h, maxArea){
    let area = w*h;
    //Map the area to a value between 0 and 255

    return area;
}

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    //Define the width and height of the rectangle
    let w = 20;
    let h = 20;

    // After finishing the getArea function, input it into the fill to see the colour changing with the area
    // fill(getArea(....));

    //Create the rectangle at the center of the canvas
    rect(width/2, height/2, w, h);
}

