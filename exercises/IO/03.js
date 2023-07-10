let video;

function setup() {
  createCanvas(400, 300);
  
  // Create a video element and load the video file
  video = createVideo('test.mp4');
  
  // Loop the video playback
  video.loop();
  
  // Hide the video element from the canvas
  video.hide();
}

function draw() {
  // Map the mouse position to a volume value between 0 and 1
  let volume = map(mouseX, 0, width, 0, 1);
  
  // Set the video volume
  video.volume(volume);

  background(0);
  
  // Display the video on the canvas
  image(video, 0, 0, width, height);
}
