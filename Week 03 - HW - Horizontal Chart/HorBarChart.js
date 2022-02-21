class HorBarChart{
    constructor(_data){
        this.data = _data;

        this.chartHeight = 200;
        this.chartWidth = 200;
        this.spacing = 10;
        this.margin = 20;
        this.numTicks = 10;
        this.posX = 100;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 1;
        this.tickSpacing;
        this.barHeight;
        this.availableHeight;

        this.showValues = true;
        this.showName = true;

        this.colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(){
        this.tickSpacing = this.chartWidth / this.numTicks; //space between ticks on  the left 
        this.availableHeight = this.chartHeight - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barHeight = this.availableHeight / this.data.length; //bar Height
    }

    calculateMaxValue(){
        let listValues = this.data.map(function(x) {return x.total});
        this.maxValue = max(listValues);
        this.tickIncrements = (this.maxValue / this.numTicks);
    }
    


    render(){
    push()
    translate(this.posX, this.posY);
    this.drawAxis();
    this.drawTicks();
    this.drawVerticalTicks();
    this.drawRects();
    pop()
    }


    scaledData(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 0, this.chartWidth);
    }
    
    drawAxis(){
        stroke(255, 180);
        strokeWeight(2);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }
    
    drawTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //ticks
            stroke(255);
            strokeWeight(1);
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 10);
    
            //numbers (text)
            fill(255, 200);
            noStroke();
            textSize(11);
            textAlign(CENTER, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 20);
        }
    }

    drawVerticalTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //vertical lines
            stroke(255);
            strokeWeight(0.2);
            line(this.tickSpacing * i, 0, this.tickSpacing * i, -this.chartHeight);
        }
    }


    drawRects(){
        push();
        rotate(PI / 2);
        translate(-this.margin, 0);
        for(let i=0; i<this.data.length; i++){
            let colorNumber = i % 4;
            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barHeight + this.spacing) * -i, 0, -this.barHeight, this.scaledData(-this.data[i].total));
        
            
            //numbers (text)
            if(this.showValues){
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].total, ((this.barHeight + this.spacing) * -i) + this.barHeight / -2, this.scaledData(-this.data[i].total));
            }

            //text
            if(this.showName){
                    push();
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(RIGHT, CENTER);
    
                    translate(((this.barHeight + this.spacing) * -i) + this.barHeight / -2, 10);
                    rotate(PI / -2);
                    text(this.data[i].name, 0, 0);
                    pop();
            }
        }
        pop();
    }
}