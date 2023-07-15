// Draw using the mouse, and also work with mousePressed() and keyPressed() events
    
  // Every time the mouse is pressed a circle is drawn on the coordinates
  function mousePressed(){
    //Inverting black and white for a better visual
    stroke(255);
    fill(0);
    ellipse(mouseX, mouseY, 10, 10);
  }

 // When a key is pressed the background becomes white again - refreshing the screen
  function keyPressed(){
    background(0);
  }
  
  function setup() {
    createCanvas(100, 100);
    background(0); // Background is specified here so as to be able to draw on canvas
    
  }
  
  function draw() {
    
  }