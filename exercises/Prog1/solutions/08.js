function setup() {
    createCanvas(100, 100);
  }
  
  function draw() {
    background(255);
   
    if(mouseX <= width/2){
        fill(255, 0, 0);
        rect(0, 0, width/2, height);
    }
      
    // If the mouse is in the upper half (and on the left side) then the a blue rect appears on the upper left side and the circle turns blue
    else if(mouseY < height/2){
        fill(0, 0, 255);
        rect(0, 0, width, height/2);
    }

    else{
        fill(0, 255, 0);
        rect(width/2, height/2, width/2, height/2);
    }
    
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
  }