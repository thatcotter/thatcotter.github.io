//based on the processing firmata and conway example sketches
import processing.serial.*;
import cc.arduino.*;

Arduino arduino;
// shader based on conway's game of life
PShader conway;
PGraphics pg;

void setup() {
  
  println(Arduino.list());
  arduino = new Arduino(this, Arduino.list()[1], 57600);
  
  size(400, 400, P3D);    
  pg = createGraphics(400, 400, P2D);
  pg.noSmooth();
  conway = loadShader("conway.glsl");
  conway.set("resolution", float(pg.width), float(pg.height));  
}

void draw() {
  conway.set("time", millis()/1000.0);
  //println(arduino.analogRead(0));
  //map A0 value to the x axis
  float x = map(arduino.analogRead(0), 0, 1023, 0, 1);
  //map A1 value to the y axis
  float y = map(arduino.analogRead(1), 0, 1023, 1, 0);
  conway.set("mouse", x, y);  
  pg.beginDraw();
  pg.background(0);
  pg.shader(conway);
  pg.rect(0, 0, pg.width, pg.height);
  pg.endDraw();  
  image(pg, 0, 0, width, height);
}