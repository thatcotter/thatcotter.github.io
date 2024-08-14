function Predator(x, y) {
  this.position = createVector(x, y);
  this.history = [];
  this.speedHistory = [];
  this.size = 70;
  this.speed = createVector(0, 0);
  this.maxSpeed = 2.5;
  this.life = 1000;
  this.wasd = false;
}

Predator.prototype.update = function() {

  //gets hungry
  this.life -= 0.25;
  // print(this.life);
  //key input

  if(this.wasd === true){

    if (this.history.length >= this.size) {
      if (keyIsDown(65)) {
        this.speed.x -= 0.25;

      }
      if (keyIsDown(68)) {
        this.speed.x += 0.25;

      }
      if (keyIsDown(87)) {
        this.speed.y -= 0.25;

      }
      if (keyIsDown(83)) {
        this.speed.y += 0.25;

      }
    }

  }

  if(this.wasd === false){

    if (this.history.length >= this.size) {
      if (keyIsDown(LEFT_ARROW)) {
        this.speed.x -= 0.25;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.speed.x += 0.25;
      }
      if (keyIsDown(UP_ARROW)) {
        this.speed.y -= 0.25;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.speed.y += 0.25;
      }
    }

  }


  //apply speed to position
  this.position.add(this.speed);

  var v = createVector(this.position.x, this.position.y);
  this.history.push(v);
  if (this.history.length > this.size) {
    this.history.splice(0, 1);
  }

  var v = createVector(this.speed.x, this.speed.y);
  this.speedHistory.push(v);
  if (this.speedHistory.length > this.size) {
    this.speedHistory.splice(0, 1);
  }

  //friction
  this.speed.mult(0.9999);

  //limit speed
  if (this.speed.x > this.maxSpeed) {
    this.speed.x -= .5;
  }
  if (this.speed.x < -this.maxSpeed) {
    this.speed.x += .5;
  }
  if (this.speed.y > this.maxSpeed) {
    this.speed.y -= .5;
  }
  if (this.speed.y < -this.maxSpeed) {
    this.speed.y += .5;
  }


  //screen wrap

  if (this.position.x < 0 - 20) {
    this.position.x = windowWidth;
  }
  if (this.position.x > windowWidth + 20) {
    this.position.x = 0;
  }
  if (this.position.y < 0 - 20) {
    this.position.y = windowHeight;
  }
  if (this.position.y > windowHeight + 20) {
    this.position.y = 0;
  }



}

Predator.prototype.display = function() {
  noStroke();

  // fill(255,175,175);
  fill('#FF5722');
  for (var i = 30; i < this.history.length; i++) {
    var pos = this.history[i];
    ellipse(pos.x, pos.y, i / 2 + 1, i / 2 + 1);
  }
  // ellipse(this.position.x, this.position.y, this.size/2, this.size/2);

  //------------------------------------------------------- The Front Fins
  if (this.history.length > this.size - 5) {
    var theta = this.speedHistory[this.size - 5].heading() + radians(-45);

    push();
    translate(this.history[this.size - 5].x, this.history[this.size - 5].y);
    scale(0.4);
    rotate(theta);

    beginShape();
    translate(0, -160);
    for (var i = 180; i >= 0; i -= 20) {
      var x = sin(radians(i)) * i / 3;
      var angle = sin(radians(i + this.s)) * 50;
      vertex(-x, i);
      vertex(-x, i);
    }

    for (var i = 0; i <= 180; i += 20) {
      var x = sin(radians(i)) * i / 3;
      var angle = sin(radians(i + this.s)) * 50;
      vertex(x, i);
      vertex(x, i);
    }
    endShape();

    pop();


    var theta = this.speedHistory[this.size - 5].heading() + radians(-135);

    // stroke(120, 25, 50);

    push();
    translate(this.history[this.size - 5].x, this.history[this.size - 5].y);
    scale(0.4);
    rotate(theta);

    beginShape();
    translate(0, -160);
    for (var i = 180; i >= 0; i -= 20) {

      var x = sin(radians(i)) * i / 3;

      var angle = sin(radians(i + this.s)) * 50;
      vertex(-x, i);
      vertex(-x, i);
    }

    for (var i = 0; i <= 180; i += 20) {
      var x = sin(radians(i)) * i / 3;
      var angle = sin(radians(i + this.s)) * 50;
      vertex(x, i);
      vertex(x, i);
    }
    endShape();

    pop();
  }
  //-------------------------------------------------------


  //------------------------------------------------------- The Back Fins
  if (this.history.length > 30) {
    var theta = this.speedHistory[30].heading() + radians(-45);

    push();
    translate(this.history[30].x, this.history[30].y);
    scale(0.3);
    rotate(theta);

    beginShape();
    translate(0, -160);
    for (var i = 180; i >= 0; i -= 20) {
      var x = sin(radians(i)) * i / 3;
      var angle = sin(radians(i + this.s)) * 50;
      vertex(-x, i);
      vertex(-x, i);
    }

    for (var i = 0; i <= 180; i += 20) {
      var x = sin(radians(i)) * i / 3;
      var angle = sin(radians(i + this.s)) * 50;
      vertex(x, i);
      vertex(x, i);
    }
    endShape();

    pop();


    var theta = this.speedHistory[30].heading() + radians(-135);

    // stroke(120, 25, 50);

    push();
    translate(this.history[30].x, this.history[30].y);
    scale(0.3);
    rotate(theta);

    beginShape();
    translate(0, -160);
    for (var i = 180; i >= 0; i -= 20) {

      var x = sin(radians(i)) * i / 3;

      var angle = sin(radians(i + this.s)) * 50;
      vertex(-x, i);
      vertex(-x, i);
    }

    for (var i = 0; i <= 180; i += 20) {
      var x = sin(radians(i)) * i / 3;
      var angle = sin(radians(i + this.s)) * 50;
      vertex(x, i);
      vertex(x, i);
    }
    endShape();

    pop();
  }
  //-------------------------------------------------------

  noFill();
  strokeWeight(4);
  // stroke(175, 75, 75);
  stroke('#FAF9F0');
  ellipse(this.position.x, this.position.y, this.size / 4, this.size / 4);
  strokeWeight(1);
}

Predator.prototype.eat = function(flock) {
  var eatingDistance = 24.0;
  for (var i = 0; i < flock.boids.length; i++) {
    var d = p5.Vector.dist(this.position, flock.boids[i].position);
    if ((d > 0) && (d < eatingDistance)) {
      flock.boids.splice(i, 1);
      this.life += 500;
      splishSplash.addParticle(this.position.x, this.position.y);
    }
  }
}

Predator.prototype.run = function() {
  this.update();
  this.eat(flock);
  if (this.history.length >= this.size) {
    this.display();
  }
}