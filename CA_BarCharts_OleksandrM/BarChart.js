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
        this.numTicks = 8; //number of ticks and numbers(text)
        this.numPlaces = 0; //number of decimal numbers of ticks
        this.title = "Top 10 New Commercial Vehicles Licenced by Make: 2021"; //name of the title
        this.titleSize = 25; //size for title
        this.xLegend = "CAR NAME"; //name of x axis legend
        this.yLegend = "NUMBER OF VEHICLES"; //name of y axis legend
        this.fontLegend = 20; //size for legend
        this.fontSize = 14; //size for the rest of text

        this.showValues = true; //show/hide values
        this.showLabels = true; //show/hide labels
        this.rotateLabels = false; //rotate labels

        this.tickIncrements;
        this.maxValue;
        this.tickSpacing;
        this.barWidth;
        this.availableHeight;

        this.colors = [color(114, 194, 159), color(221, 97, 85), color(176, 99, 99), color(206, 189, 93)];

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
    this.drawLegend();
    pop()
    }


    scaledData(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }
    
    drawAxis(){
        stroke(238, 238, 238);
        strokeWeight(2);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }
    
    drawTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //ticks
            stroke(238, 238, 238);
            strokeWeight(1);
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);
    
            //numbers (text)
            textFont(fontRoboto);
            fill(238, 238, 238);
            noStroke();
            textSize(this.fontSize);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
        }
    }
    
    drawHorizontalTicks(){
            for(let i=0; i<=this.numTicks; i++){
                //horizontal lines
                stroke(238, 238, 238);
                strokeWeight(0.4);
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
                fill(238, 238, 238);
                textSize(this.fontSize);
                textAlign(CENTER, BOTTOM);
                textFont(fontRoboto);
                text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaledData(-this.data[i].total));
            }
    
            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill(113, 112, 112);
                    textSize(this.fontSize);
                    textAlign(LEFT, CENTER);
                    textFont(fontRoboto);
    
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 2);
                    text(this.data[i].name, 0, 0);
                    pop();
                }    else{
                    noStroke();
                    fill(238, 238, 238);
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
                stroke(238, 238, 238);
                strokeWeight(5);
                vertex(i * 117, -this.scaledData(this.data[i].average))
            }
        endShape();
        
        for(let i=0; i<this.data.length; i++){
            fill(238, 238, 238);
            stroke(113, 112, 112);
            strokeWeight(0.5);
            ellipse(i * 117, -this.scaledData(this.data[i].average), 10, 10);
        }
        pop();
    }

    drawTitle(){
        fill(238, 238, 238);
        textSize(this.titleSize);
        textAlign(CENTER, BOTTOM);
        textFont(fontTitle);
        text(this.title, this.chartWidth / 2, -this.chartHeight - 20);
    }

    drawLegend(){
        //Y Axis Legend
        push();
        translate(this.chartWidth / 2, 50);
        fill(238, 238, 238);
        textAlign(CENTER, CENTER);
        textFont(fontRoboto);
        textSize(this.fontLegend);
        text(this.xLegend, 0, 0);
        pop();

        //X Axis Legend
        push();
        translate(-80 , -this.chartHeight / 2);
        rotate(PI / -2)
        fill(238, 238, 238);
        textAlign(CENTER, CENTER);
        textFont(fontRoboto);
        textSize(this.fontLegend);
        text(this.yLegend, 0, 0);
        pop();
    }
}
