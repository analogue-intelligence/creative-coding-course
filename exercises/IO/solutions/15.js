let data;

function preload() {
  data = loadJSON('data.json');
}

function setup() {
  createCanvas(400, 400);

  let fruits = data.fruits;

  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    let name = fruit.name;
    let quantity = fruit.quantity;

    textAlign(CENTER);
    textSize(20);
    text(`Fruit: ${name}`, width / 2, 50 * (i + 1));
    text(`Quantity: ${quantity}`, width / 2, 50 * (i + 1) + 20);
  }
}
