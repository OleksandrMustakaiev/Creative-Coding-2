//Horizontal Bar Chart Data
let dataHorBarChart = [];
let table;

//Line Chart Data
let dataLineChart = [];
let table01;

//Vertical Bar Chart Data
let dataVerticalBarChart = [];
let table02;

//Stacked Bar Chart Data
let dataStackedBarChart = [];
let table03;

//font
let fontTitle;
let fontRoboto;

function preload() { //to pre load other files such as .csv for data and .ttf for font
    fontTitle = loadFont('font/Roboto/Roboto-BoldItalic.ttf'); //font
    fontRoboto = loadFont('font/Roboto/Roboto-Bold.ttf') //font
    table = loadTable('data/dataHorizontalBarChart/dataHorBarChart.csv', 'csv', 'header'); //Horizontal Bar Chart Data
    table01 = loadTable('data/dataLineChart/dataLineChart.csv', 'csv', 'header'); //Line Chart Data
    table02 = loadTable('data/dataVerticalChart/dataVerticalBarChart.csv', 'csv', 'header'); //Vertical Bar Chart Data
    table03 = loadTable('data/dataStackedChart/dataStackedChart.csv', 'csv', 'header') //Stacked Bar Chart Data
}

function generateData() {
    //Horizontal Bar Chart Data
    for (let r = 0; r < table.getRowCount(); r++) {
        dataHorBarChart.push(table.rows[r].obj)
    }
    for (let i = 0; i < dataHorBarChart.length; i++) {
        dataHorBarChart[i].total = int(dataHorBarChart[i].total)
    }

    //Line Chart Data
    for (let r = 0; r < table01.getRowCount(); r++) {
        dataLineChart.push(table01.rows[r].obj)
    }
    for (let i = 0; i < dataLineChart.length; i++) {
        dataLineChart[i].total = int(dataLineChart[i].total)
    }
    for (let i = 0; i < dataLineChart.length; i++) {
        dataLineChart[i].values = int(dataLineChart[i].values)
    }

    //Vertical Bar Chart Data
    for (let r = 0; r < table02.getRowCount(); r++) {
        dataVerticalBarChart.push(table02.rows[r].obj)
    }
    for (let i = 0; i < dataVerticalBarChart.length; i++) {
        dataVerticalBarChart[i].total = int(dataVerticalBarChart[i].total)
    }
    for (let i = 0; i < dataVerticalBarChart.length; i++) {
        dataVerticalBarChart[i].average = int(dataVerticalBarChart[i].average)
    }

    //Stacked Bar Chart Data
    for (let r = 0; r < table03.getRowCount(); r++) {
        dataStackedBarChart.push(table03.rows[r].obj)
    }
    for (let i = 0; i < dataStackedBarChart.length; i++) {
        dataStackedBarChart[i].total = int(dataStackedBarChart[i].total)
    }
    for (let i = 0; i < dataStackedBarChart.length; i++) {
        dataStackedBarChart[i].values = int(dataStackedBarChart[i].values)
    }
}