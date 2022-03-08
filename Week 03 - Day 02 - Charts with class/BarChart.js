class BarChart{
    constructor(_data){
        this.data = _data;

        //set
        this.chartHeight = 200; //chart height
        this.chartWidth = 200; //chart width
        this.posX = 100; //position x value
        this.posY = 400; //position y value
        this.spacing = 10; //space between each bars
        this.margin = 20; //space bars between chart
        this.numTicks = 7; //number of ticks and numbers(text)
        this.numPlaces = 0; //number of decimal numbers of ticks
        this.title = "Vertical Bar Chart"; //name of the title
        this.fontSize = 12;
        
        this.tickIncrements;
        this.maxValue;
        this.tickSpacing;
        this.barWidth;
        this.availableHeight;

        this.showValues = false;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#6a89cc'), color('#82ccdd'), color('#b8e994'), color('#38ada9')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(){
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar width
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
    this.drawHorizontalTicks();
    this.drawRects();
    this.drawTitle();
    this.drawLines();
    pop()
    }


    scaledData(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }
    
    drawAxis(){
        stroke('#747d8c');
        strokeWeight(2);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }
    
    drawTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //ticks
            stroke('#747d8c');
            strokeWeight(1);
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);
    
            //numbers (text)
            fill('#747d8c');
            noStroke();
            textSize(this.fontSize);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
        }
    }
    
    drawHorizontalTicks(){
            for(let i=0; i<=this.numTicks; i++){
                //horizontal lines
                stroke('#a4b0be');
                strokeWeight(0.2);
                line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
            }
    }
    
    drawRects(){
        push();
        translate(this.margin, 0);
        for(let i=0; i<this.data.length; i++){
            let colorNumber = i % 4;
            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaledData(-this.data[i].total));
            
            //numbers (text)
            if(this.showValues){
                noStroke();
                fill('#747d8c');
                textSize(this.fontSize);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaledData(-this.data[i].total));
            }
    
            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill('#747d8c');
                    textSize(this.fontSize);
                    textAlign(LEFT, CENTER);
    
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 2);
                    text(this.data[i].name, 0, 0);
                    pop();
                }    else{
                    noStroke();
                    fill('#747d8c');
                    textSize(this.fontSize);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
                
            }
        }
        pop();
    }

    drawLines(){
        push();
        beginShape();
        translate(this.margin + (this.barWidth / 2), 0);
            for(let i=0; i<this.data.length; i++){
                noFill();
                stroke('#a4b0be');
                strokeWeight(3);
                vertex(i * 53, -this.scaledData(this.data[i].median))
            }
        endShape();
        
        for(let i=0; i<this.data.length; i++){
            fill('#a4b0be');
            stroke('#747d8c');
            strokeWeight(1);
            ellipse(i * 53, -this.scaledData(this.data[i].median), 7, 7);
        }
        pop();
    }

    drawTitle(){
        fill('#747d8c');
        textSize(this.fontSize);
        textAlign(CENTER, BOTTOM);
        text(this.title, this.chartWidth / 2, -this.chartHeight - 20);
    }
}
