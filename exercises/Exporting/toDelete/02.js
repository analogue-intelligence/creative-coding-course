function setup() {
    createCanvas(400, 300);
  }
  
  function draw() {
    background(220);
    // Your p5.js sketch code here...
    // Example:
    ellipse(width/2, height/2, 200, 200);
  }
  
  function keyPressed() {
    if (key === 's') {
      // Create a new p5.PDF object
      const pdf = createPDF();
  
      // Set the dimensions and parameters for the PDF export
      pdf.beginRecord({ width: 800, height: 600 });
  
      // Call the draw function again to redraw the sketch onto the PDF
      draw();
  
      // Finish recording and save the PDF file
      pdf.endRecord();
      pdf.save('sketch-pdf.pdf');
    }
  }
  