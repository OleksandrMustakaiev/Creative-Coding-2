
//let data = [30, 100, 90, 20, 180, 94];
//let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];
let data = [
    {name:"Oranges", total:63}, 
    {name:"Bananas", total:33},
    {name:"Lemons", total:21},
    {name:"Limes", total:43}
];

let chart01;
let chart02;

function setup() {
    createCanvas(700,500);
    chart01 = new BarChart(data);
    chart01.chartWidth = 200;
    chart01.chartHeigt = 200;
    chart01.posX = 100;
    chart01.posY = 400;
    
    chart02 = new BarChart(data);
    chart01.chartWidth = 200;
    chart01.chartHeigt = 200;
    chart01.posX = 400;
    chart01.posY = 400;
}


function draw() {
    background(50);
    chart01.updateValues();
    chart02.updateValues();
    chart01.render();
    chart02.render();

}   
