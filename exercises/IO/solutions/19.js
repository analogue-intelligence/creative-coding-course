let table;

function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);

  // Add data to CSV file
  let newRow = table.addRow();
  newRow.setString('city', 'London');
  newRow.setString('country', 'United Kingdom');
  newRow.setString('population', '8908081');

  // Save modified CSV data to a file
  saveTable(table, 'modified_data.csv', 'csv');

  // Display modified data
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
