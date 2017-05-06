
function stateMachine() 
{
    this.states = [];
    this.stateNum = 0;

    this.one;
    this.two;
    this.three;
    this.four;
    this.five;
    this.six;

    this.setup = function ()
    {
        for (var i = 0; i < 10; i++) 
        {
            this.states.push(i);
        }

        this.one = new NoBG();
        this.one.setup();

        this.two = new Points();
        this.two.setup();

        this.three = new HistoryPoints();
        this.three.setup();

        this.four = new rotatePoints();
        this.four.setup();

        this.five = new JitterPoints();
        this.five.setup();

        this.six = new wavePoints();
        this.six.setup();
    }

    this.update = function ()
    {
        switch (this.stateNum) {
            case 0:
                this.one.draw();
                break;
            case 1:
                this.two.draw();
                break;
            case 2:
                this.three.draw();
                break;
            case 3:
                this.four.draw();
                break;
            case 4:
                this.five.draw();
                break;
            case 5:
                this.six.draw();
                break;
            default:
                break;
        }
    }

    this.mousePressed = function()
    {
        switch (this.stateNum) {
            case 0:
                // this.one.draw();
                break;
            case 1:
                this.two.mousePressed();
                break;
            case 2:
                this.three.mousePressed();
                break;
            case 3:
                this.four.mousePressed();
                break;
            case 4:
                this.five.mousePressed();
                break;
            case 5:
                this.six.mousePressed();
                break;
            default:
                break;
        }
    }

    this.keyTyped = function()
    {
        switch (this.stateNum) {
            case 0:
                this.one.keyTyped();
                break;
            case 1:
                this.two.keyTyped();
                break;
            case 2:
                this.three.keyTyped();
                break;
            case 3:
                this.four.keyTyped();
                break;
            case 4:
                this.five.keyTyped();
                break;
            case 5:
                this.six.keyTyped();
                break;
            default:
                break;
        }
    }
}