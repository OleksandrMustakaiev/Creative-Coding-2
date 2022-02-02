//-------------------
let boxWidth = 10;
let boxHeight = 500;
let spacing = 5;
let numBoxes = 20;
let xOffset = 0;
let yOffset = 0;

function setup(){
    createCanvas(500,500);
    background(0);
}

function draw(){
    drawBoxes(10,100,5,0,0); //parameters = boxWidth, boxHeight, spacing, xOffset, yOffset
    drawBoxes(15,100,5,0,150);
    drawBoxes(20,100,5,0,300);
}

function drawBoxes(boxWidth, boxHeight, spacing, xOffset, yOffset){
    fill(150,200,0);
    noStroke();
    for(let i=0; i<numBoxes; i++){
        let totalSpace = boxWidth+spacing;
        rect(i*totalSpace + xOffset,yOffset,boxWidth,boxHeight)
    }
}
//-------------------
clap(3, 8); //we can have multiple parameters 

function clap(startNum, endNum){
    let loopCount = endNum-startNum
    for(let i=0;i<loopCount;i++){
        console.log("Hi " + (startNum+i))
    }
    return "Done";
}
//-------------------
function addMeUp(num01, num02){
    let total = num01 + num02; //expressions
    console.log("all my work is done")
    return total;
}
//-------------------