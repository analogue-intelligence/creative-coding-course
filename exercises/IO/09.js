let mic;
let recorder;
let isRecording = false;

function setup() {
  createCanvas(100, 100);
  
  //Recording setup 
  mic = new p5.AudioIn();
  mic.start();
  
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
}

//Toggle between recording and stopping
function keyPressed() {
  if (keyCode === ENTER) {
    if (isRecording) {
      recorder.stop();
      recorder.save();
      isRecording = false;
    } else {
      recorder.record();
      isRecording = true;
    }
  }
}

//Cretae a visualisation of the recording
function draw() {
  background(0);
  let vol = mic.getLevel();
  let ellipseSize = map(vol, 0, 1, 10, 200);
  ellipse(width / 2, height / 2, ellipseSize, ellipseSize);
}
