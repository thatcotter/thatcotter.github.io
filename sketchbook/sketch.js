var slides;

function setup() 
{
    // createCanvas( windowWidth, windowHeight, WEBGL );
    createCanvas( windowWidth, windowHeight );
    slides = new stateMachine();
    slides.setup();
}

function draw() 
{
  slides.update();
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed()
{
    slides.mousePressed();
}

function keyPressed() 
{
    if (keyCode === RIGHT_ARROW) 
    {
        background(0);
        if ( slides.stateNum < slides.states.length ) 
        {
            slides.stateNum++;
        }
        if ( slides.stateNum === slides.states.length )
        {
            slides.stateNum = 0;
        }
    } else if (keyCode === LEFT_ARROW) 
    {
        background(0);
        if ( slides.stateNum === 0 )
        {
            slides.stateNum = slides.states.length;
        }
        if ( slides.stateNum > 0 ) 
        {
            slides.stateNum--;
        }
    }
    
}

function keyTyped()
{
    slides.keyTyped();
}