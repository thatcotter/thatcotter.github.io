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