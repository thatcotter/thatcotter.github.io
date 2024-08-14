function Prey(x, y) {
  this.position = createVector(x, y);
  this.history = [];
  this.size = 25;
  this.speed = createVector(0, 0);
  this.speedHistory = [];
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.maxSpeed = 2.5;
  this.life = 12;
  this.rotation = createVector(0, 0);
  this.wasd = true;
}

Prey.prototype.update = function(p1) {

  // if (keyIsDown(65)) {
  //   this.rotation.x -= 0.0025;
  //   print("rotation: " + this.rotation);    
  // }
  // if (keyIsDown(68)) {
  //   this.rotation.x += 0.0025;
  //   print("rotation: " + this.rotation);
  // }

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
  // push();
  // translate(this.position);
  // this.speed.rotate(this.rotation);
  // this.rotation = 0;
  // pop();

  this.position.add(this.speed);

  //add position to trail
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
  // if(keyIsPressed === true){
  this.speed.mult(0.9999);
  // }

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

  pop();
}

Prey.prototype.display = function() {
  noStroke();
  fill('#00ADB5');
  for (var i = 0; i < this.history.length; i++) {
    var pos = this.history[i];
    ellipse(pos.x, pos.y, i + 10, i + 10);
  }
  //------------------------------------------------------- The Fins

  var theta = this.speed.heading() + radians(-45);

  push();
  translate(this.position.x, this.position.y);
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


  var theta = this.speed.heading() + radians(-135);

  // stroke(120, 25, 50);

  push();
  translate(this.position.x, this.position.y);
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
  //-------------------------------------------------------

  //------------------------------------------------------- The Back Fins
  if (this.history.length > 24) {
    // stroke(120, 25, 50);
    // fill(0);
    var theta = this.speedHistory[0].heading() + radians(-45);

    push();
    translate(this.history[0].x, this.history[0].y);
    scale(0.2);
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


    var theta = this.speedHistory[0].heading() + radians(-135);



    push();
    translate(this.history[0].x, this.history[0].y);
    scale(0.2);
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
  // push();
  // translate(this.position.x, this.position.y);
  // rotate(this.rotation);
  ellipse(this.position.x, this.position.y, 20, 20);
  // this.rotation = 0;
  // pop();


  noFill();
  strokeWeight(3);
  // stroke(175, 75, 75);
  stroke('#FAF9F0');
  ellipse(this.position.x, this.position.y, this.size / 2, this.size / 2);
  strokeWeight(1);
}

Prey.prototype.eat = function(marimo) {
  var eatingDistance = 15;
  for (var i = 0; i < marimo.length; i++) {
    var d = p5.Vector.dist(this.position, marimo[i].position);
    if (d < eatingDistance) {
      marimo.splice(i, 1);
      // this.life += 5;
      splishSplash.addParticle(this.position.x, this.position.y);
    }
  }
}

Prey.prototype.eaten = function(flock) {
  var eatingDistance = 24;
  var eatCount = 0;
  // print(eatCount);
  for (var i = 0; i < flock.boids.length; i++) {
    var d = p5.Vector.dist(this.position, flock.boids[i].position);
    // print(d);
    if (d < eatingDistance) {
      this.life = -1;
      // print(this.life);
      // eatCount += 1;
      // if(eatCount > 20){
      //   this.life = 0;
      // }
      splishSplash.addParticle(this.position.x, this.position.y);
    }
  }
}

Prey.prototype.run = function(p1) {
  // push();  
  // translate(this.position.x, this.position.y);
  // rotate(this.rotation);
  this.update(p1);
  this.eat(marimo);
  this.eaten(flock);
  if (this.history.length >= this.size) {
    this.display();
  }
  // pop();
}