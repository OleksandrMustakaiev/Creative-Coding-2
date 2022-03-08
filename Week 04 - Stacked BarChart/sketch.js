
// let data = [
//     {name:"Oranges", total:63}, 
//     {name:"Bananas", total:33},
//     {name:"Lemons", total:21},
//     {name:"Limes", total:43}
// ];

// let finaldata = [
//     { name:"2012", total:55000, values:{category:2012, value:[13000, 19000, 24000]} },
//     { name:"2013", total:88000, values:{category:2013, value:[8000, 20000, 60000]} },
//     { name:"2014", total:89000, values:{category:2014, value:[26000, 44000, 19000]} },
//     { name:"2015", total:79000, values:{category:2015, value:[32000, 7000, 40000]} },
//     { name:"2016", total:96000, values:{category:2016, value:[6000, 55000, 35000]} },
//     { name:"2017", total:68000, values:{category:2017, value:[40000, 20000, 8000]} },
//     { name:"2018", total:47000, values:{category:2018, value:[7000, 15000, 25000]} }
// ];

let finaldata = [
    { name:"2012", total:55000, values:[13000, 19000, 24000] },
    { name:"2013", total:88000, values:[8000, 20000, 60000] },
    { name:"2014", total:89000, values:[26000, 44000, 19000] },
    { name:"2015", total:79000, values:[32000, 7000, 40000] },
    { name:"2016", total:96000, values:[6000, 55000, 35000] },
    { name:"2017", total:68000, values:[40000, 20000, 8000] },
    { name:"2018", total:47000, values:[7000, 15000, 25000] }
];

let data = [
    {country:"Ireland", values: [14, 31, 20]},
    {country:"German", values: [8, 15, 4]},
    {country:"USA", values: [40, 30, 40]},
    {country:"Poland", values: [14, 31, 20]}
];

let chart01;

function setup() {
    createCanvas(700,500);
    chart01 = new StackedBarChart(finaldata);
    chart01.chartWidth = 300;
    chart01.chartHeigt = 300;
    chart01.posX = 100;
    chart01.posY = 400;
}


function draw() {
    background(255);
    chart01.updateValues();
    chart01.render();
}   
