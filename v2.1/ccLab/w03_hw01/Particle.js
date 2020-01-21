//based on the p5 example: http://p5js.org/examples/examples/Simulate_Particle_System.php

function Particle(systemAcc) {
  this.acceleration = systemAcc.copy();
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = createVector(random(width), random(height));
  this.lifespan = random(100.0, 255.0);
}

Particle.prototype.run = function(){
  this.update();
  this.display();
}

Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
}

Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(1);
  fill(127, 200, 200, this.lifespan*2);
  ellipse(this.position.x, this.position.y, 18, 18);
};

Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function() {
  
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(wind));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};