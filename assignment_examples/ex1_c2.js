// Theo van Doesburg - Composition VII , 1917 

// I get colors with the color picker
// https://color.adobe.com/create/image
const COLOR_BG = "#191726";
const COLOR_RED = "#8C251C";
const COLOR_BLUE = "#203C73";
const COLOR_YELLOW = "#D9B777";
const COLOR_WHITE = "#E7E2CC";

const NUM_BLOCKS = 22;  // From the planning phase
let PIX_BLOCK;

let shapes = [
  { id: 0, x: 0.2, y: 9.8, w: 1.4, h: 6.5, c: COLOR_WHITE },
  { id: 1, x: 1.9, y: 18.9, w: 4.3, h: 1.1, c: COLOR_RED },
  { id: 2, x: 1.95, y: 5.1, w: 1.2, h: 3.8, c: COLOR_YELLOW },
  { id: 3, x: 2.5, y: 11, w: 1, h: 3.8, c: COLOR_YELLOW },
  { id: 4, x: 2.5, y: 16, w: 5.9, h: 1.2, c: COLOR_BLUE },
  { id: 5, x: 3.6, y: 1.2, w: 1.5, h: 1.8, c: COLOR_BLUE },
  { id: 6, x: 3.8, y: 7.5, w: 3, h: 1.1, c: COLOR_WHITE },
  { id: 7, x: 5, y: 10, w: 0.9, h: 1.2, c: COLOR_BLUE },
  { id: 8, x: 5.1, y: 14, w: 2, h: 0.9, c: COLOR_RED },
  { id: 9, x: 5.1, y: 4, w: 1, h: 2.1, c: COLOR_RED },
  { id: 10, x: 7.2, y: 6.2, w: 1.2, h: 7.1, c: COLOR_WHITE },
  { id: 11, x: 7.2, y: 2.9, w: 1.7, h: 1.1, c: COLOR_WHITE },
  { id: 12, x: 9.1, y: 12.6, w: 1.8, h: 1.9, c: COLOR_YELLOW },
  { id: 13, x: 9.1, y: 19, w: 7.1, h: 1.3, c: COLOR_WHITE },
  { id: 14, x: 10.6, y: 4.3, w: 1.1, h: 4.5, c: COLOR_YELLOW },
  { id: 15, x: 11, y: 9.9, w: 5, h: 1.1, c: COLOR_WHITE },
  { id: 16, x: 11.6, y: 12, w: 1.7, h: 1.8, c: COLOR_BLUE },
  { id: 17, x: 12.8, y: 14.5, w: 1.7, h: 3.5, c: COLOR_RED },
  { id: 18, x: 13.1, y: 6.6, w: 2, h: 0.9, c: COLOR_RED },
  { id: 19, x: 13.6, y: 3.1, w: 1, h: 2.5, c: COLOR_BLUE },
  { id: 20, x: 15.2, y: 1, w: 1.6, h: 1.9, c: COLOR_RED },
  { id: 21, x: 16, y: 11.5, w: 1.1, h: 3, c: COLOR_WHITE },
  { id: 22, x: 17, y: 4, w: 1.1, h: 4.8, c: COLOR_YELLOW },
  { id: 23, x: 18.2, y: 11, w: 0.8, h: 4.6, c: COLOR_BLUE },
  { id: 24, x: 19.2, y: 16.1, w: 1.1, h: 6, c: COLOR_YELLOW },
  { id: 25, x: 19.3, y: 7.6, w: 2.3, h: 1.1, c: COLOR_WHITE },
  { id: 26, x: 19.6, y: 12, w: 2.1, h: 1.1, c: COLOR_RED },
  { id: 27, x: 20.5, y: 0.8, w: 1, h: 5.7, c: COLOR_BLUE },
];


function setup() {
  createCanvas(400, 400);
  PIX_BLOCK = width / NUM_BLOCKS;
}

function draw() {
  background(COLOR_BG);

  noStroke();
  shapes.forEach(d => {
    fill(d.c);
    rect(d.x * PIX_BLOCK, d.y * PIX_BLOCK, d.w * PIX_BLOCK, d.h * PIX_BLOCK);
  }
  );
}