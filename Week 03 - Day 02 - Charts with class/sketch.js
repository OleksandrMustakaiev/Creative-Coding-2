
//let data = [30, 100, 90, 20, 180, 94];
//let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];
let finaldata = [
    { name:"2012", total:55000, values:[13000, 10000, 24000, 9000], median:27500 },
    { name:"2013", total:88000, values:[8000, 20000, 40000, 20000], median:44000 },
    { name:"2014", total:89000, values:[26000, 44000, 10000, 9000], median:44500 },
    { name:"2015", total:79000, values:[32000, 7000, 25000, 15000], median:39500 },
    { name:"2016", total:96000, values:[6000, 50000, 30000, 10000], median:48000 },
    { name:"2017", total:68000, values:[30000, 20000, 8000, 10000], median:34000 },
    { name:"2018", total:47000, values:[7000, 10000, 20000, 10000], median:23500 }
];

let chart01;
let chart02;

function setup() {
    createCanvas(700,1000);
    chart01 = new BarChart(finaldata);
    chart01.chartWidth = 400;
    chart01.chartHeigt = 200;
    chart01.posX = 100;
    chart01.posY = 400;
}


function draw() {
    background(250);
    chart01.updateValues();
    chart01.render();
}   
