function Flock() {
  // An array for all the boids
  this.boids = []; // Initialize the array
  this.time = 0; //for timedSpawn
}

Flock.prototype.run = function() {
  for (var i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids); // Passing the entire list of boids to each boid individually
  }
  this.timedSpawn();
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
}

Flock.prototype.timedSpawn = function() {
  this.time++;
  var threshhold; //how often the timer resets
  if (marimo.length > 15) {
    threshhold = 480;
  } else if (marimo.length > 10) {
    threshhold = 300;
  } else if (marimo.length > 5) {
    threshhold = 180;
  } else {
    threshhold = 60;
  }

  if (this.time > threshhold && this.boids.length < 150 && gameManager.start === true) {
    var b = new Boid(0, 0);
    this.addBoid(b);
    print("Boids: " + this.boids.length);
    this.time = 0;
  }
}

//------------------------------------------------------------------------------------------------

// Methods for Separation, Cohesion, Alignment added

function Boid(x, y) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = createVector(x, y);
  this.r = random(3.0, 5.0);
  this.maxspeed = 2; // Maximum speed
  this.maxforce = 0.05; // Maximum steering force

  this.s = random(-45, 45);
  this.d = random(0.2, 0.4);

  this.c1;
  this.c2;
  this.colorDice;
  // this.setRandomColor();
}

Boid.prototype.setRandomColor = function() {
  this.colorDice = int(random(4));

  // c1 = color("#febe7e");
  if (this.colorDice == 0) c1 = color("#ffedbc");
  else if (this.colorDice == 1) c1 = color("#A75265");
  else if (this.colorDice == 2) c1 = color("#ec7263");
  else c1 = color("#febe7e");
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();

  this.render();
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids); // Separation
  var ali = this.align(boids); // Alignment
  var coh = this.cohesion(boids); // Cohesion


  var hid = this.hide(predatorPos); //avoid predator

  var hun = this.hunt(preyPos); //seek prey

  // Arbitrarily weigh these forces
  sep.mult(1.5);
  ali.mult(1.0);
  coh.mult(1.0);

  hid.mult(2.0);
  hun.mult(1.0);

  // Add the force vectors to acceleration
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
  if (hideFromPredator) {
    this.applyForce(hid);
  }
  if (seekPrey) {
    this.applyForce(hun);
  }
}

// Method to update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);


}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired, this.velocity);
  steer.limit(this.maxforce); // Limit to maximum steering force
  return steer;
}

//------------------------------------------------------------------------------------------

Boid.prototype.render = function() {

  // var theta = this.velocity.heading() + radians(90);
  var theta = this.velocity.heading() + radians(-90);
  // fill(200, 50, 100);
  // fill("#A75265");
  fill("#9D0B28");
  // noFill();
  stroke(120, 25, 50);
  // strokeWeight(20);

  push();
  translate(this.position.x, this.position.y);
  scale(this.d);
  rotate(theta);
  // beginShape();
  // vertex(0, -this.r*2);
  // vertex(-this.r, this.r*2);
  // vertex(this.r, this.r*2);
  // endShape(CLOSE);
  // ellipse(0, this.r*3, this.r*3, this.r*3);
  // ellipse(0, 0, this.r * 4, this.r * 8);

  beginShape();
  translate(0, -120);
  for (var i = 180; i >= 0; i -= 20) {
    // for (var i = 0; i < 180; i+=20){
    var x = sin(radians(i)) * i / 3;
    var angle = sin(radians(i + this.s + frameCount * 5)) * 50;
    // var angle = sin(radians(i+this.s)) * 50;
    vertex(-x, i);
    vertex(-x, i);
  }

  for (var i = 0; i <= 180; i += 20) {
    var x = sin(radians(i)) * i / 3;
    var angle = sin(radians(i + this.s + frameCount * 5)) * 50;
    // var angle = sin(radians(i+this.s)) * 50;
    vertex(x, i);
    vertex(x, i);
  }
  endShape();

  // ellipse(-10, 5, this.r*2, this.r*2);
  // ellipse(10, 5, this.r*2, this.r*2);
  fill(200);
  ellipse(0, 125, 25, 25);
  pop();
  // push();
  // ellipse(this.position.x, this.position.y, 5, 5);
  
}

// Wraparound
Boid.prototype.borders = function() {
  if (this.position.x < -this.r) this.position.x = width + this.r;
  if (this.position.y < -this.r) this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
}



//--------------------------------------------------------------------------------------------

// Hide from Predator
// Method checks for nearby boids and steers away
Boid.prototype.hide = function(predatorPos) {
    var desiredseparation = 100.0;
    var steer = createVector(0, 0);
    var count = 0;

    // For every boid in the system, check if it's too close
    // for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, predatorPos);


    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      var diff = p5.Vector.sub(this.position, predatorPos);
      diff.normalize();
      diff.div(d); // Weight by distance
      steer.add(diff);
      count++; // Keep track of how many
    }


    // Average -- divide by how many
    if (count > 0) {
      steer.div(count);
    }

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
      // Implement Reynolds: Steering = Desired - Velocity
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }
    return steer;
  }
  // Cohesion
  // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.hunt = function(preyPos) {
  var preydist = 175;
  var preysum = createVector(0, 0); // Start with empty vector to accumulate all locations
  var count = 0;

  var d = p5.Vector.dist(this.position, preyPos);
  if ((d > 0) && (d < preydist)) {
    preysum.add(preyPos); // Add location
    count++;
  }

  if (count > 0) {
    // preysum.div(count);
    return this.seek(preysum); // Steer towards the location
    //   var desired = p5.Vector.sub(preysum, this.position); // A vector pointing from the location to the target
    // // Normalize desired and scale to maximum speed
    //   desired.normalize();
    //   desired.mult(this.maxspeed);
    // // Steering = Desired minus Velocity
    //   var steer = p5.Vector.sub(desired, this.velocity);
    //   steer.limit(this.maxforce); // Limit to maximum steering force
    //   return steer;
  } else {
    return createVector(0, 0);
  }
}

//--------------------------------------------------------------------------------------------



// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
  var desiredseparation = 25.0;
  var steer = createVector(0, 0);
  var count = 0;
  // For every boid in the system, check if it's too close
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);


    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      var diff = p5.Vector.sub(this.position, boids[i].position);
      diff.normalize();
      diff.div(d); // Weight by distance
      steer.add(diff);
      count++; // Keep track of how many
    }
  }

  // Average -- divide by how many
  if (count > 0) {
    steer.div(count);
  }

  // As long as the vector is greater than 0
  if (steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0, 0);
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    var steer = p5.Vector.sub(sum, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0, 0); // Start with empty vector to accumulate all locations
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum); // Steer towards the location
  } else {
    return createVector(0, 0);
  }
}