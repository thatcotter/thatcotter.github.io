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