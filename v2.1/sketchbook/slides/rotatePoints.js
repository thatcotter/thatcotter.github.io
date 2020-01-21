
function rotatePoints()
{
    this.diameter;
    this.radius;

    this.points = [];

    this.mode = false;

    this.theta;

    this.setup = function()
    {
        this.diameter = 10;
        this.radius = this.diameter/2;
        this.theta = 0;
    }

    this.draw = function()
    {
        background( 0 );
        push();

        if ( mouseIsPressed ) 
        {
            var vec = createVector( mouseX, mouseY );
            this.points.push(vec);
            this.theta = 0;
            // print(this.points.length);
        } else if ( this.points.length > 0 )
        {
            var tempRad = (TWO_PI / 360) * this.theta;
            
            translate( this.points[0].x, this.points[0].y );
            rotate(tempRad);
            translate( -this.points[0].x, -this.points[0].y );

            this.theta++;
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

        pop();
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