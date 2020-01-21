var system;
var weather;
var wind;
var rain = 0;

var printWind;
var printRain;

function setup() {
  createCanvas(windowWidth, windowHeight);
  system = new ParticleSystem();
  getWeather();
  
}

function draw() {
  
  if(wind !== undefined){
    switch(wind){
      case 'N':
        wind = createVector( 0, -0.05);
        break;
      case 'NNE':
        wind = createVector( 0.05, -0.05);
        break;
      case 'NE':
        wind = createVector( 0.05, -0.05);
        break;
      case 'ENE':
        wind = createVector( 0.05, -0.05);
        break;
      case 'E':
        wind = createVector( 0.05, 0);
        break;
      case 'ESE':
        wind = createVector( 0.05, 0.05);
        break;
      case 'SE':
        wind = createVector( 0.05, 0.05);
        break;
      case 'SSE':
        wind = createVector( 0.05, 0.05);
        break;
      case 'S':
        wind = createVector( 0, 0.05);
        break;
      case 'SSW':
        wind = createVector( -0.05, 0.05);
        break;
      case 'SW':
        wind = createVector( -0.05, 0.05);
        break;
      case 'WSW':
        wind = createVector( -0.05, -0.05);
        break;
      case 'W':
        wind = createVector( -0.05, 0);
        break;
      case 'WNW':
        wind = createVector( -0.05, -0.05);
        break;
      case 'NW':
        wind = createVector( -0.05, -0.05);
        break;
      case 'NNW':
        wind = createVector( -0.05, -0.05);
    }
    console.log(wind);
  }
  
  background(100);
  
  
  if(system.particles.length < ((rain/3)*2)){
    
    system.addParticle();
    console.log('drip');
  }
  system.run();
  
  if(printRain !== undefined ){
    textSize(32);
    fill(255);
    text( "Today's Precipitation: " + printRain + "mm", 10 , 50 );
    text( "Wind Direction: " + printWind, 10, 100 );
  }
}
