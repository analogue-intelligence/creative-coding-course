function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(255);
  // noStroke();
noFill();
  for(var x = 0; x < width; x+=100) {
    for(var y = 0; y < 500; y+=100){
      translate(y, x);

      var move = round(random(0,2));
      
      print(move);

      if (move == 1) {
        print(move);
        rotate(radians(mouseX%360));
      }
      rect(0, 0, 100, 100);
      resetMatrix();
      

    }
  }
  // once();
}
