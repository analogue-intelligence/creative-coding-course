let capture;
let recording = false;
let frames = [];

function setup() {
  createCanvas(400, 300);

  // Create a video capture from the webcam
  capture = createCapture(VIDEO);
  capture.hide();
}

function keyPressed() {
  if (key === 'r') {
    recording = true;
  }
}

function draw() {
  background(0);

  // Draw the video capture on the canvas
  image(capture, 0, 0, width, height);

  // If recording is enabled, capture each frame and store it in an array
  if (recording) {
    frames.push(get());
  }

  // Display a text prompt for recording status
  if (recording) {
    fill(255, 0, 0);
    text('RECORDING', 10, 20);
  } else {
    fill(255);
    text('Press "r" to start recording', 10, 20);
  }
}

function keyReleased() {
  if (key === 'r') {
    recording = false;

    // Create a new p5.MediaEncoder to encode the frames as a video
    const encoder = new p5.MediaEncoder(this, 'video/webm', 30);

    // Add each frame to the encoder
    for (let frame of frames) {
      encoder.addFrame(frame.canvas);
    }

    // Save the video file
    encoder.save('sketch-video.webm');

    // Clear the frames array
    frames = [];
  }
}
