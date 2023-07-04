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

    let shape1 = new Shape(50, 50, 30, 30);
    let shape2 = new Shape(30, 30, 20, 20);

    rect(shape1.x, shape1.y, shape1.w, shape1.h);
    rect(shape2.x, shape2.y, shape2.w, shape2.h);
}

