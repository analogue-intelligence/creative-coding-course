function setup() {
  //Creating a variable to hold the canvas as we are going to save this object
  let c = createCanvas(100, 100);

  //Designing the canvas - in this case its a red background
  background(255, 0, 0);

  //Save the canvas c, with the name 'myCanvas' and as a jpg file
  saveCanvas(c, 'myCanvas', 'jpg');
}