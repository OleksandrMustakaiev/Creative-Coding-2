
//let data = [30, 100, 90, 20, 180, 94];
//let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];
let data = [
    {name: "Oranges", total: 63}, 
    {name: "Bananas", total: 33},
    {name: "Lemons", total: 21},
    {name: "Limes", total: 43}
];

let chart01;

function setup() {
    createCanvas(700,700);
    chart01 = new HorBarChart(data);
    chart01.chartWidth = 400;
    chart01.chartHeigt = 400;
    chart01.posX = 100;
    chart01.posY = 400;
}


function draw() {
    background(50);
    chart01.updateValues();
    chart01.render();
}   
