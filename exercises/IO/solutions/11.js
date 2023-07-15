let img;

function preload(){
    img = loadImage('test.jpg');
}

function setup(){
    createCanvas(100, 100);
}

function draw(){
    background(220);
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height, which can be added as extra arguments to the function
    image(img, 0, 0);
}