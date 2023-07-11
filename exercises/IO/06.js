let sound;

//load the sound to make sure it is ready to play
function preload() {
  sound = loadSound('sound.mp3');
}

function setup() {
  createCanvas(100, 100);
  sound.play();
}
