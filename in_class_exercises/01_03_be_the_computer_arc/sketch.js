function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(107, 197, 223);

  var length = 150;
  var position = 150;
  var initial_angle = 7

  noFill();
  stroke(202, 112, 139);
  ellipse(position, position, length, length);

  noStroke();
  fill(202, 112, 139);
  
  arc(position * 3, position, length, length, QUARTER_PI * initial_angle, TWO_PI);

  arc(position * 5, position, length, length, QUARTER_PI * initial_angle, QUARTER_PI);

  arc(position, position * 3, length, length, QUARTER_PI * initial_angle, HALF_PI);

  arc(position * 3, position * 3, length, length, QUARTER_PI * initial_angle, QUARTER_PI * 3);

  arc(position * 5, position * 3, length, length, QUARTER_PI * initial_angle, PI);

  arc(position, position * 5, length, length, QUARTER_PI * initial_angle, QUARTER_PI * 5);

  arc(position * 3, position * 5, length, length, QUARTER_PI * initial_angle, QUARTER_PI * 6);

  arc(position * 5, position * 5, length, length, 0, TWO_PI);

}
