function preload()
{
    
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
}

function draw()
{
    circle(30, 30, 40);
    describe('white circle with black outline in mid of gray canvas');

    ellipse(70, 56, 55, 55);
    describe('blue ellipse with green outline in middle of a gray canvas');

    rect(50, 20, 55, 55);
    describe('pink rect with yellow outline in mid-right of canvas');
}