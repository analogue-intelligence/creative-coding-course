let sound;

function preload() {
  sound = loadSound('sound.mp3');
}

function setup() {
  createCanvas(100, 100);
  sound.play();
}
