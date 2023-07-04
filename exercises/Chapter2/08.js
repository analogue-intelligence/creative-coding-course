// Draw using the mouse, and also work with mousePressed() and keyPressed() events
    
  // Every time the mouse is pressed a circle is drawn on the coordinates
  function mousePressed(){
    circle(mouseX, mouseY, 10);
  }

 // When a key is pressed the background becomes white again - refreshing the screen
  function keyPressed(){
    background(255);
  }
  
  function setup() {
    createCanvas(400, 400);
    background(255); // Background is specified here so as to be able to draw on canvas
    
  }
  
  function draw() {
    
  }