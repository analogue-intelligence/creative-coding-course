let sound;

//Load sound
function preload() {
  sound = loadSound('sound.mp3');
}

//Play sound
function setup() {
  createCanvas(100, 100);
  sound.play();
}

//Create a visual depending on the amplitude of the sound, as the sound gets higher, the ellipse gets larger
function draw() {
  let amplitude = sound.getLevel();
  let ellipseSize = map(amplitude, 0, 1, 10, 200);
  
  background(0);
  ellipse(width / 2, height / 2, ellipseSize, ellipseSize);
}
