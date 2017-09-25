var fireworks = [];
var gravity;
var canvas;
var startDrawing = true;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  colorMode(HSB);



  //Set gravity
  gravity = createVector(0, 0.15);
  stroke(255);
  strokeWeight(4);
  background(255);
  firework = new Particle(random(width), height);
}

function draw() {
  var fps = frameRate();
  if (fps < 40) console.log(fps);

  colorMode(RGB);
  background(30,50);

  if(startDrawing) {

  if(random(0,1) > 0.80){
    fireworks.push(new Firework());
  }
  for(var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
}
