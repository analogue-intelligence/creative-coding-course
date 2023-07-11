let video;
let isPlaying = true;

function setup() {
  createCanvas(100, 100);
  
  // Create a video element and load the video file
  video = createVideo('test.mp4');
  
  // Loop the video playback
  video.loop();
  
  // Hide the video element from the canvas
  video.hide();
}

function mousePressed() {
  if (isPlaying) {
    // Pause the video if it's playing
    video.pause();
    isPlaying = false;
  } else {
    // Resume playing the video if it's paused
    video.loop();
    isPlaying = true;
  }
}

function draw() {
  background(0);
  
  // Display the video on the canvas
  image(video, 0, 0, width, height);
}
