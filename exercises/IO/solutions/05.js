let video;
let recorder;
let isRecording = false;

function setup() {
  createCanvas(400, 300);
  
  // Create a video capture element from the user's webcam
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a media recorder instance
  recorder = new p5.MediaRecorder();
  
  // Set up the callback function when the recording is complete
  recorder.onComplete(saveVideo);
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (isRecording) {
      // Stop the recording if it's in progress
      recorder.stop();
      isRecording = false;
    } else {
      // Start recording if it's not in progress
      recorder.start();
      isRecording = true;
    }
  }
}

function draw() {
  background(0);
  
  // Display the video from the webcam on the canvas
  image(video, 0, 0, width, height);
}

function saveVideo(videoBlob) {
  // Convert the recorded video to a downloadable URL
  let videoUrl = URL.createObjectURL(videoBlob);
  
  // Create a download link for the recorded video
  let a = document.createElement('a');
  a.href = videoUrl;
  a.download = 'recorded_video.webm';
  
  // Trigger the download of the recorded video
  a.click();
}
