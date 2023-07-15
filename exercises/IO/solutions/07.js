let sound;

//Load sound
function preload() {
  sound = loadSound('sound.mp3');
}

//Play sound
function setup() {
  createCanvas(100, 100);
  userStartAudio();
  sound.play();
  amplitude = new p5.Amplitude(); // create an object which is used to obtain the amplitude
}

//Create a visual depending on the amplitude of the sound, as the sound gets higher, the ellipse gets larger
function draw() {
  //Get the current amplitude level and mapt the value to a range between 10-100 to set as radius
  let level = amplitude.getLevel();
  let ellipseSize = map(level, 0, 1, 10, 100);
  
  background(0);
  ellipse(width/2, height/2, ellipseSize);
}
