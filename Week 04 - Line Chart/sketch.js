
// let finaldata = [
//     { name:"2012", total:55000, values:{category:2012, value:[13000, 19000, 24000]} },
//     { name:"2013", total:88000, values:{category:2013, value:[8000, 20000, 60000]} },
//     { name:"2014", total:89000, values:{category:2014, value:[26000, 44000, 19000]} },
//     { name:"2015", total:79000, values:{category:2015, value:[32000, 7000, 40000]} },
//     { name:"2016", total:96000, values:{category:2016, value:[6000, 55000, 35000]} },
//     { name:"2017", total:68000, values:{category:2017, value:[40000, 20000, 8000]} },
//     { name:"2018", total:47000, values:{category:2018, value:[7000, 15000, 25000]} }
// ];

let dataLineTemp = [
    {name:"2010", total:84897, values:[27124, 53988, 3785]},
    {name:"2011", total:86932, values:[23246, 61730, 1956]},
    {name:"2012", total:76256, values:[17788, 56520, 1948]},
    {name:"2013", total:71348, values:[18964, 51772, 612]},
    {name:"2014", total:92361, values:[23417, 67740, 1204]},
    {name:"2015", total:121110, values:[32963, 86103, 2044]},
    {name:"2016", total:141931, values:[39472, 99306, 3153]},
    {name:"2017", total:127047, values:[39391, 82492, 5162]},
    {name:"2018", total:121157, values:[46776, 65814, 8567]},
    {name:"2019", total:113305, values:[45761, 53201, 14343]},
    {name:"2020", total:84309, values:[31507, 36208, 16594]},
    {name:"2021", total:101853, values:[32950, 34396, 34507]}
];

let chart01;

function setup() {
    createCanvas(700,500);
    chart01 = new LineChart(dataLineTemp);
    chart01.chartWidth = 300;
    chart01.chartHeigt = 500;
    chart01.posX = 100;
    chart01.posY = 400;
}


function draw() {
    background(255);
    chart01.updateValues();
    chart01.render();
}   
