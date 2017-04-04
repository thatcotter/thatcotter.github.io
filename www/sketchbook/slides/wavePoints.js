
function wavePoints()
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
        this.theta += 0.0002;
        push();

        if ( mouseIsPressed ) 
        {
            var vec = createVector( mouseX, mouseY );
            this.points.push(vec);
            this.theta = 0;
            // print(this.points.length);
        // } else if ( this.points.length > 0 )
        // {
        //     var tempRad = (TWO_PI / 360) * this.theta;
            
        //     translate( this.points[0].x, this.points[0].y );
        //     rotate(tempRad);
        //     translate( -this.points[0].x, -this.points[0].y );

        //     this.theta++;
        }
        //Mode 1: lines
        if (this.mode === false) 
        {
            for (var i = 1; i < this.points.length; i++)
            {
                var offsetPres = 0;
                var offsetPrev = 0;

                if ( mouseIsPressed === false )
                {
                    offsetPres = sin(this.theta * this.points[i].y) * 1.5;
                    offsetPrev = sin(this.theta * this.points[i-1].y) * 1.5;
                    // this.theta += 0.000002;
                }

                var pres = this.points[i];
                pres.x += offsetPres;
                var prev = this.points[i-1];
                if( i-1 === 0 )
                {
                    prev.x += offsetPrev;
                }
                stroke(255);
                line( pres.x, pres.y, prev.x, prev.y );
            }
        }
        //Mode 2: dots
        if (this.mode === true) 
        {
            var offsetPres = 0;

            for (var i = 0; i < this.points.length; i++)
            {
                if ( mouseIsPressed === false )
                {
                    offsetPres = sin(this.theta * this.points[i].y) * 1.5;
                    // this.theta += 0.000002;
                }
                var pres = this.points[i];
                pres.x += offsetPres;
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