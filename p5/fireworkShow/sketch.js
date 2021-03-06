var fireworks = [];
var gravity;
var canvas;
var showGoing = false;
var startButton;
var count = 0;
var sound;
var intensity;
var intensitySlider;

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

  //Set intensity slider
  intensitySlider = select('.slider');
  intensity = (intensitySlider.value())/10;
  intensitySlider.changed(updateIntensity);

  //Set gravity
  gravity = createVector(0, 0.15);
  stroke(0);
  strokeWeight(4);
  background(10);
}

function updateIntensity(){
  intensity = (intensitySlider.value())/10;
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
    startButton.html('Resume');
  }else{
    showGoing = true;
    startButton.html('Pause');
  }
}


function draw() {
  colorMode(RGB);
  background(25,90);

  if((random(0,1) < intensity) && (showGoing)) {
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
