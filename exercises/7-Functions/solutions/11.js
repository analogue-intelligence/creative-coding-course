//Create variablerectangle area
let rectArea;

function setup() {
    createCanvas(100, 100);
  }
  
function draw() {
  background(255);
  
  //Calcualte area of rectangle
  rectArea = mouseX*mouseY; 

  // Use the mapArea function to map the area value to a color
  let mappedColor = mapArea(rectArea);
  
  //Rectangle is drawn in the center, however the width and height change depending on the 
  rectMode(CENTER);
  fill(mappedColor);
  rect(width/2, height/2, mouseX, mouseY);
}

  // Implement the mapArea function here
  function mapArea(area) {
    let maxArea = width * height; // Maximum possible area based on canvas size
    let mappedColor = (area / maxArea) * 255; // Calculate the mapped color
    return mappedColor;
  }
  