function SplashSystem() {
  this.splashes = [];
}


SplashSystem.prototype.addParticle = function(x, y) {
  this.splashes.push(new SplashHit(x, y));
//   print("hit");
};


SplashSystem.prototype.run = function() {
  for (var i = 0; i < this.splashes.length; i++) {
    var splash = this.splashes[i];
    splash.run();
    // this.splashes[i].run();
    if (splash.isDead()) {
      this.splashes.splice(i, 1);
    //   print("dead");
    }
  }
}



function SplashHit(x, y) {
  this.color;
  this.position = createVector( x, y);
  this.lifespan = 100;
  this.age = 0;
}

SplashHit.prototype.update = function() {
  this.age += 2;
}

SplashHit.prototype.display = function() {
  noFill();
  stroke(255, this.lifespan - this.age);
  strokeWeight(2);
  ellipse(this.position.x, this.position.y, this.age, this.age);
//   print("splash.display");
}

SplashHit.prototype.isDead = function() {
  if (this.age > this.lifespan) {
    return true;
  } else {
    return false;
  }
}

SplashHit.prototype.run = function() {
  this.update();
  this.display();
//   print("run");
}