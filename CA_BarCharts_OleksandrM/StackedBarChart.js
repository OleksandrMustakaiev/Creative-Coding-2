class StackedBarChart{
    constructor(_data){
        this.data = _data;

        //set
        this.chartHeight = 200; //chart height
        this.chartWidth = 200; //chart width
        this.posX = 100; //position x value
        this.posY = 400; //position y value
        this.spacing = 10; //space between each bars
        this.margin = 20; //space bars between chart
        this.numTicks = 4; //number of ticks and numbers(text)
        this.numPlaces = 0; //number of decimal numbers of ticks
        this.title = "New Private Cars Licensed by Colors from: 2017"; //name of the title
        this.titleSize = 20; //size for title
        this.xLegend = "YEAR"; //name of x axis legend
        this.yLegend = "AMOUNT OF VEHICLES"; //name of y axis legend
        this.fontLegend = 16; //size for legend
        this.fontSize = 14; //size for the rest of text

        this.nameLegend1 = "Black";
        this.nameLegend2 = "Grey";
        this.nameLegend3 = "White";
        this.nameLegend4 = "Other";
        
        this.tickIncrements;
        this.maxValue;
        this.tickSpacing;
        this.barHeight;
        this.availableHeight;


        this.rotateLabels = false; //rotate values
        this.showLabels = true; //show name of each bar chart
        this.showLegend = true; //show legend under bar chart

        this.colors = [color(45, 52, 54), color(189, 195, 199), color(238, 238, 238), color(194, 187, 169)];

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
    this.drawLines();
    this.drawTitle();
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
            fill(238, 238, 238);
            noStroke();
            textSize(this.fontSize);
            textAlign(RIGHT, CENTER);
            textFont(fontRoboto);
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
            push();
            for(let j=0; j<this.data[i].values.length; j++){
                let colorNumber = j % 4;
                //bars
                fill(this.colors[colorNumber]);
                noStroke();
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaledData(-this.data[i].values[j]));
                translate(0, this.scaledData(-this.data[i].values[j]));
            }
            pop();

            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill(238, 238, 238);
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
                    textFont(fontRoboto);
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
                stroke(176, 99, 99);
                strokeWeight(3);
                vertex(i * 75, -this.scaledData(this.data[i].average))
            }
        endShape();
        
        for(let i=0; i<this.data.length; i++){
            fill(176, 99, 99);
            stroke(238, 238, 238);
            strokeWeight(1);
            ellipse(i * 75, -this.scaledData(this.data[i].average), 7, 7);
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
        if(this.showLegend){
            //legend 1
            push();
            translate(this.chartWidth + 30, (-this.chartHeight / 2) - 40);
            fill(46,52,54);
            stroke(238, 238, 238);
            strokeWeight(0.2);
            rect(0, 0, 10, 10);
            fill(238, 238, 238);
            textAlign(LEFT, CENTER);
            textSize(this.fontSize);
            textFont(fontRoboto);
            text(this.nameLegend1, 15, 5);
            pop();

            //legend 2
            push();
            translate(this.chartWidth + 30, (-this.chartHeight / 2) - 20);
            fill(189,195,199);
            stroke(238, 238, 238);
            strokeWeight(0.2);
            rect(0, 0, 10, 10);
            fill(238, 238, 238);
            textAlign(LEFT, CENTER);
            textSize(this.fontSize);
            textFont(fontRoboto);
            text(this.nameLegend2, 15, 5);
            pop();

            //legend 3
            push();
            translate(this.chartWidth + 30, (-this.chartHeight / 2));
            fill(238,238,238);
            stroke(238, 238, 238);
            strokeWeight(0.2);
            rect(0, 0, 10, 10);
            fill(238, 238, 238);
            textAlign(LEFT, CENTER);
            textSize(this.fontSize);
            textFont(fontRoboto);
            text(this.nameLegend3, 15, 5);
            pop();

            //legend 4
            push();
            translate(this.chartWidth + 30, (-this.chartHeight / 2) + 20);
            fill(194,188,169);
            stroke(238, 238, 238);
            strokeWeight(0.2);
            rect(0, 0, 10, 10);
            fill(238, 238, 238);
            textAlign(LEFT, CENTER);
            textSize(this.fontSize);
            textFont(fontRoboto);
            text(this.nameLegend4, 15, 5);
            pop();

            //Y Axis Legend
            push();
            translate(this.chartWidth / 2, 40);
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


}
