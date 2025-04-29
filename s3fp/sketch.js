let img;
let slider;
let fileInput;

function preload() {
    img = loadImage("land.jpg", (loadedImg) => {
        let scale = 800 / loadedImg.width;
        loadedImg.resize(800, loadedImg.height * scale); // keep aspect ratio
      });
    }

function setup() {
  const canvas = createCanvas(img.width, img.height);
  canvas.parent("canvas-container"); // 💡 attach canvas to div
  noStroke();
  ellipseMode(RADIUS);
  noLoop();

  
  slider = select("#sampleSlider");
  slider.input(redraw); // only redraw when slider changes

  let button = select(".button");
  button.mousePressed(redraw); // code for randimize buttion

  fileInput = createFileInput(handleFile);
  fileInput.hide(); // make file input invisible first
  
  // When "Upload your own image" button is clicked, trigger the hidden input
  let uploadBtn = select(".upload");
  uploadBtn.mousePressed(() => {
    fileInput.elt.click(); // simulate click
  });

}

function handleFile(file) {
  if (file.type === 'image') {
    loadImage(file.data, (loadedImg) => {
      let scale = 800 / loadedImg.width;
      loadedImg.resize(800, loadedImg.height * scale);
      img = loadedImg;

      resizeCanvas(img.width, img.height);
      redraw();
    });
  } else {
    alert("Please upload a valid image file.");
  }
}



function draw() {
  background(0);
  let g = slider.value();

  for (let i = g / 2; i < width; i += parseInt(g)) {
    for (let j = g / 2; j < height; j += parseInt(g)) {
      let pixColor = img.get(i, j);
      fill(pixColor);
      let rad = random(g * 0.1, g*0.9 );
      ellipse(i, j, rad, rad);
    }
  }
}
