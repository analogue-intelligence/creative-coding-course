function setup() {
  createCanvas(820, 820);
}

function draw() {
  background(220);
  
  var size = 80;
  var count = 0;

  for(var x = 20; x < height; x+=100) {
    for(var y = 20; y < width; y+=100) {

      count++;
      
      if (count % 5 == 0) {
        ellipseMode(CORNER);
        ellipse(x,y, size, size);
      }
      else {
        rect(x, y, size, size);
      }
    }
  }

}
