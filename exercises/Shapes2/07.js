function setup() {
    createCanvas(100, 100);
  }
  
  function draw() {
    background(255); 
    
    // Circle is created with the center being at the position of the mouse on screen
    ellipse(mouseX, mouseY, 20, 20);
    
    // A line is created from the center of the canvas to the position of the mouse
    line(mouseX, mouseY, 50, 50);
}