let osc;

function setup() {
  createCanvas(100, 100);
  
  //Cretae an oscillator object
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(440);
  osc.amp(0.5);
  osc.start();
}

//When the mouse is pressed, values are obtained depending on the x,y position of the mouse which become the frequency and amplitude of the oscillator
function mousePressed() {
  let freq = map(mouseX, 0, width, 200, 2000);
  osc.freq(freq);

  let amp = map(mouseY, 0, height, 0.2, 1);
  osc.amp(amp, 0.1);
}

function mouseReleased() {
  osc.amp(0, 0.5);
}
