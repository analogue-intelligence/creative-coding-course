function setup() {
    createCanvas(100, 100);
  }
  
  function draw() {
    background(255);
   
    // If statement to check if the mouse is on the left side of the canvas AND (&&) mouse is on the lower half of the screen
    // If the mouse coordinates satisfy the condition, draw a red rectangle on the bottom-left side of the canvas
    
    
    //Lines intersecting the center of the canvas
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
  }