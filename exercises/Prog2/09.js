class Shape {
    constructor(x, y, wid, len) {
      this.x = x;
      this.y = y;
      this.wid = wid;
      this.len = len;
    }

    drawRect(){
        rect(this.x, this.y, this.wid, this.len);
    }

    drawEllipse(){
        ellipse(this.x, this.y, this.wid, this.len);
    }
}

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    let shape1 = new Shape(50, 50, 30, 30);
    let shape2 = new Shape(30, 30, 20, 20);

    shape1.drawEllipse();
    shape2.drawEllipse();
}

