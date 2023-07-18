function setup() {
    createCanvas(100, 100);
  }
  
  function draw() {
    background(255);
   
    //if statement to check that the mouse is on the left side of the screen
      //Nested if statement to check that the mouse is on the bottom side of the 
          //Draw a red rectangle on the bottom-left side of the canvas

    
    //Lines intersecting the center of the canvas
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
  }