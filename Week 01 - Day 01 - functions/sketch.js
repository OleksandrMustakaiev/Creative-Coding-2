//let distance = 23;
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
    drawBoxes();
}

function drawBoxes(){
    fill(255,0,0);
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