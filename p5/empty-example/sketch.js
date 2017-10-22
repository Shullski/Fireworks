var fireworks = [];
var gravity;
var canvas;
var showGoing = false;
var startButton;
var count = 0;

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
  fireworksLaunched = 0;


  //Set gravity
  gravity = createVector(0, 0.15);
  stroke(0);
  strokeWeight(4);
  background(10);
  firework = new Particle(random(width), height);
}

function showOver() {
  if(count > 30) {
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


function draw() {
  colorMode(RGB);
  background(10,90);

  if(showGoing) {

  if((random(0,1) > 0.2) && (!showOver())){
    fireworks.push(new Firework());
    count += 1;
  }

  if(showOver()) {
    setTimeout(remove, 3000);
    //count = 0;
    //stopShow();
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
