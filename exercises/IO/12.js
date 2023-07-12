
function setup() {
    let img = createImage(100, 50); // same as new p5.Image(100, 100);
    
    createCanvas(100, 100);
    background(0);
    
    //Load the pixels
    img.loadPixels();
  
    let x, y;
    // fill with random colors
    for (y = 0; y < img.height; y++) {
      for (x = 0; x < img.width; x++) {

        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = 255;
        
        let index = (x + y * width) * 4; //Get the index of the current pixel

        //Obtain the rgba values of the current pixel and set them to a random value
        img.pixels[index] = red;
        img.pixels[index + 1] = green;
        img.pixels[index + 2] = blue;
        img.pixels[index + 3] = alpha;
      }
    }
    
    //Finish changing the pixels and show the image on the canvas
    img.updatePixels();
    image(img, 0, 0);
  }