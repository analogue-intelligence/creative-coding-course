let sound;
let reverb;

function preload() {
  sound = loadSound('sound.mp3');
}

function setup() {
  createCanvas(400, 300);
  userStartAudio();
  sound.play();

  //Creating reverb object and adding reverb to sound
  reverb = new p5.Reverb();
  reverb.process(sound, 3, 2);
}

//When mouse is pressed add reverb, and when the mouse is released remove the reverb
function mousePressed() {
  reverb.amp(10);
}

function mouseReleased() {
  reverb.amp(0);
}
