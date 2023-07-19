//Create variable for rectangle area

function setup() {
    createCanvas(100, 100);
  }
  
function draw() {
  background(255);
  
  //Calcualte area of rectangle based on the mouseX and mouseY positions

  // Use the mapArea function to map the area value to a color
  let mappedColor = mapArea(rectArea);
  
  //Rectangle is drawn in the center, however the width and height change depending on the mouse position
  rectMode(CENTER);
  fill(mappedColor);

}

  // Implement the mapArea function here
    // Calculate the maximum possible area based on canvas size
    // Calculate the mapped color, do not forget that the maximum value of a colour is 255
    // Return the mappedColor value
  