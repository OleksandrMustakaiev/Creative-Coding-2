let chartWidth = 400;
let chartHeight = 400;
let data = [230, 390, 120];
let spacing = 10;
let margin = 20;
let numTicks = 10;


let tickSpacing = chartHeight / numTicks;
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1));
let barWidth = availableWidth / data.length;

console.log(tickSpacing)

function setup() {
    createCanvas(500,500);
    background(0);
}

function draw() {
    background(0);
    

    translate(50, 450);

    stroke(255, 200);
    strokeWeight(2);
    line(0, 0, 0, -400);
    line(0, 0, 400, 0);

    for(let i=0; i<=numTicks; i++){
        //ticks
        stroke(255);
        line(0, tickSpacing * -i, -10, tickSpacing * -i);

        //numbers
        fill(255, 0, 0);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text(i * tickSpacing, -15, tickSpacing * -i);
    }

    translate(margin, 0);
    for(let i=0; i<data.length; i++){
        fill(255);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -data[i]);
    }
}