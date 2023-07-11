let mic;
let recorder;
let isRecording = false;

function setup() {
  createCanvas(100, 100);
  
  //Recording setup 
  mic = new p5.AudioIn();
  mic.start();
  
  recorder = new p5.SoundRecorder(); //Create sound recorder object
  recorder.setInput(mic); //The input recording device is the mic
}

// //Toggle between recording and stopping
// function keyPressed() {
//   if (keyCode === ENTER) {
//     if (isRecording) {
//       recorder.stop(); //Stop the recording 
//       recorder.save(); //
//       isRecording = false;
//     } else {
//       recorder.record(); //Start recording 
//       isRecording = true;
//     }
//   }
// }

//Cretae a visualisation of the recording
function draw() {
  background(0);
  let vol = mic.getLevel();
  console.log(vol);
  let ellipseSize = map(vol, 0, 1, 10, 200);
  ellipse(width / 2, height / 2, ellipseSize, ellipseSize);
}
