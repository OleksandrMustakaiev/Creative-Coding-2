//-------------------
function setup() {
    createCanvas(500,500);
    background(255);
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    drawGrid(50, color("#ccff44"), 1);
    drawGrid(10, color("black"), 2);
}
//-------------------s