var font, grammar, lines, json;

function preload() {

  font = loadFont('data/KlinicSlabLight.otf');
  yaml = loadStrings('format.json');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  noStroke();
  textFont(font, (width + height) / 35);
  textAlign(CENTER);

  grammar = new RiGrammar(yaml.join('\n'));
  lines = ["click to", "generate", "a poem"];
}

function draw() {

  background(10, 5, 27);
  fill(255,255,230);
  text(lines[0], width / 2, height / 4);
  text(lines[1], width / 2, height / 2);
  text(lines[2], width / 2, height * 3 / 4);

}

function mouseReleased() {

  var result = grammar.expand();
  var poem = result.split("%");
  for (var i = 0; i < poem.length; i++) {
    lines[i] = poem[i];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textFont(font, (width + height) / 25);
}