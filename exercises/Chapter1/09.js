function setup() {
    createCanvas(100,100);
    background(255,255,0, 100);
}

function draw() {
    ellipseMode(RADIUS)
    ellipse(50, 50, 30, 30); // Outer ellipse
    ellipseMode(CENTER);
    ellipse(50, 50, 30, 30); // Inner ellipse
}

