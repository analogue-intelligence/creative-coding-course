// Import the CCapture.js library
import CCapture from 'ccapture.js';

// Create a CCapture object
let capturer;
let frameRateInput;
let formatInput;

function setup() {
  createCanvas(400, 400);
  capturer = new CCapture();
  frameRateInput = createInput(60);
  formatInput = createInput('webm');
  createButton('Start Capture').mousePressed(startCapture);
}

function draw() {
  frameRate(frameRateInput.value());

  // Draw your animated pattern or shape here
  background(220);
  circle(mouseX, mouseY, 50);

  if (capturer.isRecording()) {
    capturer.capture(canvas);
  }

  if (frameCount === 300) {
    capturer.stop();
    capturer.save();
  }
}

function startCapture() {
  capturer = new CCapture({ format: formatInput.value() });
  capturer.start();
}
