// Import the Capture.js library
import Capture from 'capture.js';

// Create a Capture object
let capture;

function setup() {
  createCanvas(400, 400);
  
  // Initialize the Capture object with the canvas
  capture = new Capture(this);
  
  // Start capturing the canvas
  capture.start();
}

function draw() {
  // Draw your shapes or images on the canvas
}

function captureAndExportImage() {
  // Capture the current canvas as a high-resolution image
  const image = capture.captureImage();
  
  // Export the image as a PNG file
  image.export('image.png');
}
