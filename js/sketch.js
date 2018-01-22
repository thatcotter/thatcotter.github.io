var flock;
var splishSplash;
var flowfield;
var marimo = [];

var seekPrey;
var hideFromPredator;
var predatorPos;
var preyPos;

var p1;
var p2;

var gameManager;
var opacity;

var debug = false;
var debugRipples = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  // createP("Drag the mouse to generate new boids.");
  seekPrey = false;
  hideFromPedator = false;
  flock = new Flock();
  // Add an initial set of boids into the system
  for (var i = 0; i < 36; i++) {
    var b = new Boid(0, 0);
    flock.addBoid(b);
  }

  splishSplash = new SplashSystem();

  // Make a new flow field with "resolution" of 48
  flowfield = new FlowField(54);
  // Make a whole bunch of marimo with random maxspeed and maxforce values
  for (var i = 0; i < 20; i++) {
    marimo.push(new Marimo(random(width), random(height), random(1.1, 2.5), random(0.1, 0.5)));
  }

  p1 = new Predator(windowWidth / 2, windowHeight / 2);
  predatorPos = new p5.Vector(p1.position);
  p2 = new Prey(windowWidth / 2, windowHeight / 2);
  preyPos = new p5.Vector(windowWidth / 2, windowHeight / 2);



  gameManager = new GameManager();

  opacity = 75;
}

function draw() {

  background(15, 40, 90);
  // background('#364F6B');

  gameManager.update()

  if (gameManager.title === true) {
    //   draw title screen

    //rect ovelay
    fill(86, 191, 181, opacity);
    rect(0, 0, windowWidth, windowHeight);

    textSize(72);
    textFont("Oswald");
    fill(245);
    text("Tide", windowWidth / 6, windowHeight / 3);
    fill(245, 175);
    textSize(36);
    textFont("Playfair Display")
    text("A Symbiotic Adventure", windowWidth / 6, windowHeight / 3 + 60);
    fill(245, 111);
    textSize(32);
    text("Press Any Key to Start", windowWidth / 6, windowHeight / 3 + 180);
  }

  //Press Any Key to Start
  if (gameManager.start === true) {
    seekPrey = true;
    hideFromPredator = true;

    if (opacity > 1) {
      opacity -= 5;
    }


   
    // Tell all the vehicles to follow the flow field
    for (var i = 0; i < marimo.length; i++) {
      marimo[i].follow(flowfield);
      marimo[i].run();
    }

    p1.run(); //Player1: Predator
    predatorPos = p1.position;

    p2.run(); //Player2: Prey
    preyPos = p2.position;

    flock.run();

    // Display the flowfield in "debug" mode
    if (debug) flowfield.display();
    // if (debugRipples) flowfield.displayRipples();
    
  }

  //Win State
  if (gameManager.win) {
    hideFromPredator = false;
    seekPrey = false;

    flock.run();
    for (var i = 0; i < marimo.length; i++) {
      marimo[i].follow(flowfield);
      marimo[i].run();
    }

    flowfield.update();
    if (debug) flowfield.display();
    if (debugRipples) flowfield.displayRipples();

    //rect ovelay
    noStroke();
    fill(86, 191, 181, opacity);
    rect(0, 0, windowWidth, windowHeight);

    if (opacity < 75) {
      opacity += 5;
    }

    textSize(64);
    textFont("Oswald");
    fill(245);
    text("Win", windowWidth / 6, windowHeight / 3);
    fill(245, 200);
    textSize(24);
    textFont("Playfair Display");
    // text("A quote about teamwork", windowWidth/6, windowHeight/3+60);
    text("\"Individually, we are one drop. Together, we are an ocean.\" \n \n– Ryunosuke Satoro",
      windowWidth / 6, windowHeight / 3 + 45, windowWidth / 6 + 360, windowHeight / 3 + 120);
    fill(245, 125);
    textSize(32);
    text("Press Any Key to Play Again", windowWidth / 6, windowHeight / 3 + 240);

  }

  //Lose State
  if (gameManager.lose) {

    hideFromPredator = false;
    seekPrey = false;
    flock.run();
    for (var i = 0; i < marimo.length; i++) {
      marimo[i].follow(flowfield);
      marimo[i].run();
    }

    flowfield.update();
    if (debug) flowfield.display();
    if (debugRipples) flowfield.displayRipples();

    //rect ovelay
    fill(57, 62, 70, opacity);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
    if (opacity < 150) {
      opacity += 5;
    }

    textSize(64);
    textFont("Oswald");
    fill(225);
    text("Lose", windowWidth / 6, windowHeight / 3);
    fill(245, 200);
    textSize(24);
    textFont("Playfair Display");
    text("\"Individually, we are one drop. Together, we are an ocean.\" \n \n– Ryunosuke Satoro",
      windowWidth / 6, windowHeight / 3 + 45, windowWidth / 6 + 360, windowHeight / 3 + 120);
    fill(245, 125);
    textSize(32);
    text("Press Any Key to Play Again", windowWidth / 6, windowHeight / 3 + 240);

  }

  splishSplash.run();
  
  //update flowfield
  flowfield.update();
  flowfield.displayRipples();

  textSize(12);
  fill(255);
  text(int(frameRate()), 10, 10);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Make a new flow field with "resolution" of 48
  flowfield = new FlowField(64);
}

function keyTyped() {
  if (key === 'f') {
    debug = !debug;
    print("debug");
  }
  if (key === ';') {
    debugRipples = !debugRipples;
    print("ripples");
  }
}

// Add a new boid into the System
function mouseDragged() {
  // flock.addBoid(new Boid(mouseX, mouseY));
  splishSplash.addParticle(mouseX, mouseY);
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flow Field Following


function FlowField(r) {
  // How large is each "cell" of the flow field
  this.resolution = r;
  // Determine the number of columns and rows based on sketch's width and height
  this.cols = width / this.resolution;
  this.rows = height / this.resolution;
  this.zoff = 0.0;
  // A flow field is a two dimensional array of p5.Vectors
  // We can't make 2D arrays, but this is sort of faking it
  this.make2Darray = function(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
      array[i] = [];
    }
    return array;
  };
  this.field = this.make2Darray(this.cols);

  this.init = function() {
    // Reseed noise so we get a new flow field every time
    // Need to get noise working
    // noiseSeed(Math.floor(random(10000)));
    var xoff = 0;
    for (var i = 0; i < this.cols; i++) {
      var yoff = 0;
      for (var j = 0; j < this.rows; j++) {
        var theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
        //var theta = map(sin(xoff)+cos(yoff),-2,2,0,TWO_PI);
        // Polar to cartesian coordinate transformation to get x and y components of the vector
        this.field[i][j] = createVector(cos(theta), sin(theta));
        yoff += 0.003;
      }
      xoff += 0.002;
    }
  };
  this.init();

  this.update = function() {
    var xoff = 0;
    for (var i = 0; i < this.cols; i++) {
      var yoff = 0;
      for (var j = 0; j < this.rows; j++) {
        var theta = map(noise(xoff, yoff, this.zoff), 0, 1, 0, TWO_PI);
        //var theta = map(sin(xoff)+cos(yoff),-2,2,0,TWO_PI);
        // Polar to cartesian coordinate transformation to get x and y components of the vector
        this.field[i][j] = createVector(cos(theta), sin(theta));
        yoff += 0.03;
      }
      xoff += 0.01;
    }
    // Animate by changing 3rd dimension of noise every frame
    this.zoff += 0.005;
  }

  // Draw every vector
  this.display = function() {
    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 2);
      }
    }
    // for (var i = 0; i < this.cols; i++) {
    //   for (var j = 0; j < this.rows; j++) {
    //     noStroke();
    //     blendMode(OVERLAY);
    //     fill(((this.field[i][j].x * 255) + (this.field[i][j].y*255))/2, 5);
    //     ellipse(i*this.resolution, j*this.resolution, (this.field[i][j].x *60 - this.field[i][j].y *60),(this.field[i][j].x *60 - this.field[i][j].y *60));
    //     blendMode(BLEND);
    //   }
    // }
  };

  this.displayRipples = function() {
    // for (var i = 0; i < this.cols; i++) {
    //   for (var j = 0; j < this.rows; j++) {
    //     drawVector(this.field[i][j],i*this.resolution,j*this.resolution,this.resolution-2);
    //   }
    // }

    // blendMode(SOFT_LIGHT);
    blendMode(HARD_LIGHT);
    // blendMode(DODGE);
    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        var radius = 180;
        noStroke();
        // stroke(128);
        fill(((this.field[i][j].x * 100) + (this.field[i][j].y * 100)) + 80,
            ((this.field[i][j].x * 160) + (this.field[i][j].y * 160)) + 80,
            ((this.field[i][j].x * 255) + (this.field[i][j].y * 255)) + 80,
            3);
        ellipse(i * this.resolution, j * this.resolution,
              (this.field[i][j].x * radius - this.field[i][j].y * radius),
               (this.field[i][j].x * radius - this.field[i][j].y * radius));
      }
    }
    // blendMode(SCREEN);
    // blendMode(OVERLAY);
    // // blendMode(BURN);
    // fill(15, 40, 90, 10);
    // rect(0, 0, windowWidth, windowHeight);
    blendMode(BLEND);
  };

  this.lookup = function(lookup) {
    var column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols - 1));
    var row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows - 1));
    //println(lookup.x);
    return this.field[column][row].copy();
  };

  // Renders a vector object 'v' as an arrow and a location 'x,y'
  var drawVector = function(v, x, y, scayl) {
    push();
    var arrowsize = 4;
    // Translate to location to render vector
    translate(x, y);
    stroke(200, 100);
    // Call vector heading function to get direction (note that pointing to the right is a heading of 0) and rotate
    rotate(v.heading());
    // Calculate length of vector & scale it to be bigger or smaller if necessary
    var len = v.mag() * scayl;
    // Draw three lines to make an arrow (draw pointing up since we've rotate to the proper direction)
    line(0, 0, len, 0);
    //line(len,0,len-arrowsize,+arrowsize/2);
    //line(len,0,len-arrowsize,-arrowsize/2);
    pop();
  };
}