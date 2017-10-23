var fireworks = [];
var gravity;
var canvas;
var showGoing = false;
var startButton;
var count = 0;
var sound;

function windowResized() {
  resizeCanvas(windowWidth-1, windowHeight-1);
}

function preload(){
  //sound = loadSound('sounds/fire.mp3');
}

function setup() {
  canvas = createCanvas(windowWidth-1,windowHeight-1);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  colorMode(HSB);

  //Get start button
  startButton = select('.fireworkDisplay');
  startButton.mousePressed(toggleShow);
  fireworksLaunched = 0;


  //Set gravity
  gravity = createVector(0, 0.15);
  stroke(0);
  strokeWeight(4);
  background(10);
}

function showOver() {
  if(count > 20) {
    return true;
  }else {
    return false;
  }
}

function stopShow() {
  showGoing = false;
}
function startShow() {
  showGoing = true;
}
function toggleShow() {
  if (showGoing) {
    showGoing = false;
    startButton.html('<h2>Resume</h2>');
  }else{
    showGoing = true;
    startButton.html('<h2>Pause</h2>');
  }
}


function draw() {
  colorMode(RGB);
  background(25,90);

  if((random(0,1) > 0.85) && (showGoing)) {
    fireworks.push(new Firework());
    count += 1;
  }
  //Update current firworks, delete those that have exploded
  for(var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
