// Import the Capture.js library
import Capture from 'capture.js';

// Create a Capture object
let capture;

function setup() {
  createCanvas(400, 400);
  
  // Initialize the Capture object with the canvas
  capture = new Capture(this);
}

function draw() {
  // Draw your animated shapes or images on the canvas
}

function startCapture() {
  // Start capturing the canvas as a high-resolution video
  capture.start();
}

function stopCapture() {
  // Stop capturing the video
  capture.stop();
}

function exportVideo() {
  // Export the captured video as an MP4 file
  capture.export('video.mp4');
}
