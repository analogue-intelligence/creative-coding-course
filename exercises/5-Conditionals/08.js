function setup() {
    createCanvas(100, 100);
}
  
  function draw() {
    background(255);
    
    //Mouse on the left side of the canvas
    if(mouseX <= width/2){
        fill(255, 0, 0);
        rect(0, 0, width/2, height);
    }
      
    //Mouse on the upper half of the canvas
    else if(mouseY < height/2){
        fill(0, 0, 255);
        rect(0, 0, width, height/2);
    }


    //In the case that the mouse is not on the left nor on the upper half of the canvas, then draw a green rectangle on the lower right side of the canvas
    
    //Lines intersecting the center of the canvas
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
  }