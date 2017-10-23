function Particle(x, y, hue, firework) {

  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hue = hue;


  if (this.firework) {
    this.vel = createVector(random(-1, 1), random(-14, -7));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 10));  //Spread of explosion
  }

  this.acc = createVector(0, 0);
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if(!this.firework) {
      var fireworkSize = random(85, 95)
      fireworkSize = float(fireworkSize / 100);
      this.vel.mult(fireworkSize);
      //this.lifespan -= 4;
      this.lifespan -= 9;

    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if(this.lifespan < 100) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);
    if(!this.firework) {
      stroke(hue, 255, 255, this.lifespan);
    }else{
      stroke(hue, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  }
}
