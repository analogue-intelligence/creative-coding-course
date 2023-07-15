let table; // Global variable to store the CSV data

function preload() {
  // Load CSV data
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(100, 100);

  // Access CSV data and display
  let rowCount = table.getRowCount();
  let colCount = table.getColumnCount();

  textAlign(CENTER);
  textSize(16);
  
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      let data = table.getString(i, j);
      text(data, (width / colCount) * (j + 0.5), (height / rowCount) * (i + 0.5));
    }
  }
}
