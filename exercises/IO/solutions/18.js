let table;

function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);

  // Filter and sort CSV data
  table = table.filter(row => row.getNum('population') > 1000000);
  table = table.sort('population', 'desc');

  // Display filtered and sorted data
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
