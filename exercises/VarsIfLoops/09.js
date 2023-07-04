function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
   
    if(mouseX <= width/2){
        if(mouseY >= height/2){
            fill(255, 0, 0);
            rect(0, height/2, width/2, height);
        }
    }
    
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
  }