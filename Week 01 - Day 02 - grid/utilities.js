function drawGrid(numBoxes, strokeColor, strokeThickness){
    let boxSize = width / numBoxes;
    noFill();
    strokeWeight(strokeThickness);
    stroke(strokeColor);
    for(j=0; j<numBoxes; j++){
        for(i=0; i<numBoxes; i++){
        rect(boxSize*i, boxSize*j, boxSize, boxSize);
        }
    }
}