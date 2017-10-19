var fireworks = [];
var gravity;
var canvas;
var showGoing = false;
var startButton;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  colorMode(HSB);

  //Get start button
  startButton = select('.fireworkDisplay');
  startButton.mousePressed(startShow);


  //Set gravity
  gravity = createVector(0, 0.15);
  stroke(0);
  strokeWeight(4);
  background(0);
  firework = new Particle(random(width), height);
}

function startShow() {
  if (!showGoing) {
    showGoing = true;
  }else{
    showGoing = false;
  }
}

function draw() {
  var fps = frameRate();
  if (fps < 40) console.log(fps);

  colorMode(RGB);
  background(10,90);

  if(showGoing) {

  if(random(0,1) > 0.95){
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
