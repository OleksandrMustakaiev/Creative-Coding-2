//-------------------
function setup() {
    createCanvas(500,500);
    background(0);
}

function draw() {
    drawGrid(10);
}

function drawGrid(numBoxes){
    let boxSize = width / numBoxes;
    fill(0);
    stroke(255);
    for(j=0; j<numBoxes; j++){
        for(i=0; i<numBoxes; i++){
        rect(boxSize*i, boxSize*j, boxSize, boxSize);
        }
    }
}
//-------------------s