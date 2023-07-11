let video;

function setup() {
  createCanvas(100, 100);
  
  // Create a video element and load the video file
  video = createVideo('test.mp4');
  
  // Loop the video playback
  video.loop();
  
  // Hide the video element from the canvas
  video.hide();
}

function draw() {
  // Map the mouse position to a volume value between 0 and 1
  let v = map(mouseX, 0, width, 0, 1);
  console.log(v);

  // Set the video volume
  video.volume(v);

  background(0);
  
  // Display the video on the canvas
  image(video, 0, 0, width, height);
}
