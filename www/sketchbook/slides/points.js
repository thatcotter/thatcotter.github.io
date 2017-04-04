
function Points()
{
    this.diameter;
    this.radius;

    this.points = [];

    this.mode = false;

    this.setup = function()
    {
        this.diameter = 10;
        this.radius = this.diameter/2;
    }

    this.draw = function()
    {
        background( 0 );

        if (mouseIsPressed) 
        {
            var vec = createVector( mouseX, mouseY );
            this.points.push(vec);
            // print(this.points.length);
        }
        // print(mouseIsPressed);
        //Mode 1: lines
        if (this.mode === false) 
        {
            for (var i = 1; i < this.points.length; i++)
            {
                var pres = this.points[i];
                var prev = this.points[i-1];
                stroke(255);
                line( pres.x, pres.y, prev.x, prev.y );
            }
        }
        //Mode 2: dots
        if (this.mode === true) 
        {
            for (var i = 0; i < this.points.length; i++)
            {
                var pres = this.points[i];
                text( i, pres.x, pres.y );
            }
        }

        ellipse( mouseX-this.radius, mouseY-this.radius, this.diameter, this.diameter );
    }

    this.mousePressed = function()
    {
        // console.log("click");
        this.points = [];
    }

    this.keyTyped = function()
    {
        console.log( key );
        if( key === ' ' )
        {
            this.mode = !this.mode;
            // print("mode switch!");
            // print(this.mode);
        }
        if( key == 'c' )
        {
            this.points = [];
        }
    }
}