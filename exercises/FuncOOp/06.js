class Shape {
    constructor(x, y, wid, len) {
      this.x = x;
      this.y = y;
      this.wid = wid;
      this.len = len;
    }
}

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    let shape = Shape(50, 50, 30, 30);
}

