function drawGrid(numBoxes, strokeColor, strokeThickness){
    let boxSize = width / numBoxes;
    for(j=0; j<numBoxes; j++){
        for(i=0; i<numBoxes; i++){
            noFill();
            strokeWeight(strokeThickness);
            stroke(strokeColor);
            push();
            translate(i*boxSize, j*boxSize);
            rect(0, 0, boxSize, boxSize);
            pop();
        }
    }
}