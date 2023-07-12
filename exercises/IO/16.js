let data;

function preload() {
  data = loadJSON('data.json');
}

function setup() {
  createCanvas(400, 400);

  // Display original JSON data
  displayData(data);

  // Modify JSON data
  data.name = 'John Doe';
  data.age = 30;

  // Display modified JSON data
  displayData(data);

  // Save modified JSON data to a file
  saveJSON(data, 'modified_data.json');
}

function displayData(data) {
  let name = data.name;
  let age = data.age;
  let city = data.city;

  textAlign(CENTER);
  textSize(24);
  text(`Name: ${name}`, width / 2, height / 2 - 20);
  text(`Age: ${age}`, width / 2, height / 2 + 20);
  text(`City: ${city}`, width / 2, height / 2 + 60);
}
