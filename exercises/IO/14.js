let data; // Global variable to store JSON data

function preload() {
  // Load JSON data
  data = loadJSON('data.json');
}

function setup() {
  createCanvas(400, 400);
  
  // Access JSON data and display
  let name = data.name;
  let age = data.age;
  let city = data.city;
  
  textAlign(CENTER);
  textSize(24);
  text(`Name: ${name}`, width/2, height/2 - 20);
  text(`Age: ${age}`, width/2, height/2 + 20);
  text(`City: ${city}`, width/2, height/2 + 40);
}
