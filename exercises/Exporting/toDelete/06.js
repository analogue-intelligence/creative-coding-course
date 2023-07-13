// Import the CCapture.js library
import CCapture from 'ccapture.js';

// Create a CCapture object
let capturer;

function setup() {
  createCanvas(400, 400);
  capturer = new CCapture({ format: 'webm' });
}

function draw() {
  // Draw your animation here
  background(220);
  rotate(frameCount * 0.02);
  rect(0, 0, 100, 100);

  if (capturer.isRecording()) {
    capturer.capture(canvas);
  }

  if (frameCount === 300) {
    capturer.stop();
    capturer.save();
  }
}

function startCapture() {
  capturer.start();
}
