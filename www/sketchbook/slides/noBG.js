
function NoBG()
{
    this.diameter;
    this.radius;

    this.setup = function()
    {
        background(0);
        noStroke();
        this.diameter = 20;
        this.radius = this.diameter/2;
    }

    this.draw = function()
    {
        fill(255, 150);
        ellipse( mouseX-this.radius, mouseY-this.radius, this.diameter, this.diameter );
    }

    this.keyTyped = function()
    {
        if( key === 'c' )
        {
            // print("clear!");
            background(0);
        }
    }
}