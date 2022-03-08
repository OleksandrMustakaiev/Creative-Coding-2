let dataLineTemp = [ //used data for line chart using array with objects, because i didnt find how to make array of values
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

let dataStackedTemp = [ //used data for stacked chart using with objects, because i didnt find how to make array of values
    {name:"2017", total:127045, values:[47280, 24262, 19443, 36060], average:63522},
    {name:"2018", total:121157, values:[45852, 22265, 18641, 34399], average:60578},
    {name:"2019", total:113305, values:[41795, 20164, 18226, 33120], average:56652},
    {name:"2020", total:84209, values:[31758, 15047, 13234, 24270], average:42104},
    {name:"2021", total:101853, values:[36609, 19331, 15310, 30603], average:50926}
];

let chartStacked;
let chartHorizontal;
let chartLine;
let chartVertical;


function setup() {
    createCanvas(1100,1100);
    generateData();

    chartStacked = new StackedBarChart(dataStackedTemp); //data from above
    chartStacked.chartWidth = 400;
    chartStacked.chartHeigt = 400;
    chartStacked.posX = 100;
    chartStacked.posY = 300;

    chartHorizontal = new HorBarChart(dataHorBarChart); //data from excel file
    chartHorizontal.chartWidth = 600;
    chartHorizontal.chartHeight = 600;
    chartHorizontal.posX = 800;
    chartHorizontal.posY = 700;

    chartLine = new LineChart(dataLineTemp); //data from above
    chartLine.chartWidth = 400;
    chartLine.chartHeigt = 400;
    chartLine.posX = 100;
    chartLine.posY = 700;

    chartVertical = new BarChart(dataVerticalBarChart); //data from excel file
    chartVertical.chartWidth = 1200;
    chartVertical.chartHeight = 400;
    chartVertical.posX = 100;
    chartVertical.posY = 1350;
}


function draw() {
    scale(0.75);
    background(34, 54, 63);

    chartStacked.updateValues();
    chartStacked.render();

    chartHorizontal.updateValues();
    chartHorizontal.render();

    chartLine.updateValues();
    chartLine.render();

    chartVertical.updateValues();
    chartVertical.render();
}   
