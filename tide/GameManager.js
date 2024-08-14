function GameManager() {
  this.title = true;
  this.start = false;
  this.eat = false;
  this.win = false;
  this.lose = false;
  this.reset = false;
}

GameManager.prototype.update = function() {
  if (this.title === true) {
    if (keyIsPressed === true) {
      this.title = false;
      this.start = true;
      print("START");
    }
  }

  if (this.start) {
    if (keyIsDown(49) || flock.boids.length === 0 || marimo.length === 0) {
      this.win = true;
      this.start = false;
      print("WIN");
      //reset p1 & p2
      p1.life = 1000;
      p1.position.x = windowWidth / 2;
      p1.position.y = windowHeight / 2;
      p1.speed.mult(0);
      p1.history = [];
      p2.life = 1000;
      p2.position.x = windowWidth / 2;
      p2.position.y = windowHeight / 2;
      p2.speed.mult(0);
      p2.history = [];
    }
    if (keyIsDown(50) || p1.life < 0 || p2.life < 0) {
      this.lose = true;
      this.start = false;
      print("LOSE");
      //reset p1 & p2
      p1.life = 1000;
      p1.position.x = windowWidth / 2;
      p1.position.y = windowHeight / 2;
      p1.speed.mult(0);
      p1.history = [];
      p2.life = 1000;
      p2.position.x = windowWidth / 2;
      p2.position.y = windowHeight / 2;
      p2.speed.mult(0);
      p2.history = [];
    }
  }

  if (this.win || this.lose) {
    if (keyIsDown(32)) {
      this.start = true;
      this.win = false;
      this.lose = false;

      print("START");

      //reset the fish and moss arrays
      flock = new Flock();
      // Add an initial set of boids into the system
      for (var i = 0; i < 36; i++) {
        var b = new Boid(0, 0);
        flock.addBoid(b);
      }

      if(p1.wasd === true){
        p1.wasd = false;
        p2.wasd = true;
      } else{
        p1.wasd = true;
        p2.wasd = false;
      }

      splishSpash = new SplashSystem();

      // Make a new flow field
      flowfield.init();
      // Make a whole bunch of marimo with random maxspeed and maxforce values
      marimo = [];
      for (var i = 0; i < 20; i++) {
        marimo.push(new Marimo(random(width), random(height), random(1.1, 2.5), random(0.1, 0.5)));
      }
    }
  }
}