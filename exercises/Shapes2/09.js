
function setup() {
    createCanvas(100, 100);
    smooth(); // This function is used to for anti-aliasing
    background(255); // Background is specified here so as to be able to draw on canvas
    
  }
  
  function draw() {
    
    // pmouseX and pmouseY refer to the previous point of mouseX and mouseY respectively in the frame before. 
    line(pmouseX, pmouseY, mouseX, mouseY);
  }