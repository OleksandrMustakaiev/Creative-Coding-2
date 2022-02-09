let chartWidth = 400;
let chartHeight = 400;
let data = [30, 100, 90, 20, 180, 94];
let scaledData = [];
let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];

let spacing = 10;
let margin = 20;
let numTicks = 10;
let tickIncrements;

let tickSpacing = chartHeight / numTicks; //space between ticks on  the left 
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

function setup() {
    createCanvas(500,500);
    background(0);

    maxValue = max(data);
    tickIncrements = Math.round(maxValue / numTicks);

    for(let i=0; i<data.length; i++){
        let tempVal = map(data[i], 0, max(data), 0, chartHeight);
        scaledData.push(tempVal);
    }
}

function draw() {
    background(0);
    

    translate(50, 450);
    //chart
    stroke(255, 200);
    strokeWeight(2);
    line(0, 0, 0, -chartHeight); //y
    line(0, 0, chartWidth, 0); //x

    for(let i=0; i<=numTicks; i++){
        //ticks
        stroke(255);
        line(0, tickSpacing * -i, -10, tickSpacing * -i);

        //numbers (text)
        fill(255, 0, 0);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text(i * tickIncrements, -15, tickSpacing * -i);
    }

    translate(margin, 0);
    for(let i=0; i<scaledData.length; i++){
        //bars
        fill(255, 180, 0);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        //numbers (text)
        noStroke();
        fill(255);
        textSize(16);
        textAlign(CENTER, BOTTOM);
        text(data[i], ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i]);

        //text
        noStroke();
        fill(255);
        textSize(14);
        textAlign(CENTER, BOTTOM);
        text(dataLabels[i], ((barWidth + spacing) * i) + barWidth / 2, 20);
    }
}