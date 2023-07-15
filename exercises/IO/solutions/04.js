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
  // Load the pixels of the video frame
  video.loadPixels();
  
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      
      // Access the red (R) and blue (B) values of each pixel
      let r = video.pixels[index];
      let b = video.pixels[index + 2];

      // Calculate the distance between the mouse position and each pixel
      let distance = dist(x, y, mouseX, mouseY);
      let maxDistance = 50;
      
      // Map the distance to an offset value
      let offset = map(distance, 0, maxDistance, -50, 50);
      
      // Manipulate the red (R) and blue (B) values of each pixel
      video.pixels[index] = r + offset;
      video.pixels[index + 2] = b + offset;
    }
  }

  // Update the modified pixels of the video frame
  video.updatePixels();

  background(0);
  
  // Display the modified video on the canvas
  image(video, 0, 0, width, height);
}
