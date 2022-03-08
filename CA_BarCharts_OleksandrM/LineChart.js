class LineChart{ //object
    constructor(_data){
        this.data = _data;

        //set
        this.chartHeight = 200; //chart height
        this.chartWidth = 200; //chart width
        this.posX = 100; //position x value
        this.posY = 400; //position y value
        this.spacing = 10; //space between each bars
        this.margin = 20; //space bars between chart
        this.numTicks = 6; //number of ticks and numbers(text)
        this.numPlaces = 0; //number of decimal numbers of ticks
        this.title = "New Private Cars licenced by traditional and alternative fuel"; //name of the title
        this.titleSize = 20; //size for title
        this.nameLegend1 = "Petrol";
        this.nameLegend2 = "Diesel";
        this.nameLegend3 = "Hybrid / Electric";
        this.xLegend = "YEAR"; //name of x axis legend
        this.yLegend = "AMOUNT OF VEHICLES"; //name of y axis legend
        this.fontLegend = 16; //size for legend
        this.fontSize = 14; //size for the rest of text
        
        this.tickIncrements;
        this.maxValue;
        this.tickSpacing;
        this.barHeight;
        this.availableHeight;

        this.showLabels = true; //show/hide name of each bar chart
        this.showLegend = true; //show/hide legend

        this.colors = [color('#6a89cc'), color('#82ccdd'), color('#b8e994'), color('#38ada9')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(){ //some calculating, to get tick spacing, available width and bar width
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar width
    }

    calculateMaxValue(){ //to calculate maximum value from data, to have maximum value in tick numbers
        let listValues = this.data.map(function(x) {return x.total});
        this.maxValue = max(listValues);
        this.tickIncrements = (this.maxValue / this.numTicks);
    }
    


    render(){ //to render object by calling funcions
    push()
    translate(this.posX, this.posY);
    this.drawAxis();
    this.drawTicks();
    this.drawHorizontalTicks();
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
    
    drawLines(){
        //Lines
        //Petrol
        beginShape();
        for(let i=0; i<this.data.length; i++){
                noFill();
                stroke(255, 216, 122);
                strokeWeight(3);
                vertex(i * 37, -this.scaledData(this.data[i].values[0]));
                
            //text
            if(this.showLabels){
                push();
                noStroke();
                fill(238, 238, 238);
                textSize(this.fontSize);
                textAlign(LEFT, CENTER);
                translate((37 * i) - 5, 10);
                rotate(PI / 3);
                textFont(fontRoboto);
                text(this.data[i].name, 0, 0);
                pop();
            }
        }
        endShape();
        //Diesel
        beginShape();
        for(let i=0; i<this.data.length; i++){
                noFill();
                stroke(255, 101, 101);
                strokeWeight(3);
                vertex(i * 37, -this.scaledData(this.data[i].values[1]));
        }
        endShape();
        //Hybrid/Electric
        beginShape();
        for(let i=0; i<this.data.length; i++){
                noFill();
                stroke(95, 183, 241);
                strokeWeight(3);
                vertex(i * 37, -this.scaledData(this.data[i].values[2]));
        }
        endShape();

        //Ellipses
        //Petrol
        for(let i=0; i<this.data.length; i++){
            fill(255, 216, 122);
            noStroke();
            ellipse(i * 37, this.scaledData(-this.data[i].values[0]), 8, 8);
        }
        //Diesel
        for(let i=0; i<this.data.length; i++){
            fill(255, 101, 101);
            noStroke();
            ellipse(i * 37, this.scaledData(-this.data[i].values[1]), 8, 8);
        }
        //Hybrid/Electric
        for(let i=0; i<this.data.length; i++){
            fill(95, 183, 241);
            noStroke();
            ellipse(i * 37, this.scaledData(-this.data[i].values[2]), 8, 8);
        }
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
            //legend 1 - petrol
            push();
            translate((this.chartWidth / 2) - 200, 90);
            fill(255, 216, 122);
            ellipse(0, 5, 10, 10);
            textAlign(LEFT, CENTER);
            textFont(fontRoboto);
            textSize(this.fontSize);
            text(this.nameLegend1, 15, 5);
            pop();

            //legend 2 - diesel
            push();
            translate((this.chartWidth / 2) -70, 90);
            fill(255, 101, 101);
            ellipse(0, 5, 10, 10);
            textAlign(LEFT, CENTER);
            textFont(fontRoboto);
            textSize(this.fontSize);
            text(this.nameLegend2, 15, 5);
            pop();

            //legend 3
            push();
            translate((this.chartWidth / 2 ) + 75, 90);
            fill(95, 183, 241);
            ellipse(0, 5, 10, 10);
            textAlign(LEFT, CENTER);
            textFont(fontRoboto);
            textSize(this.fontSize);
            text(this.nameLegend3, 15, 5);
            pop();
        
            //Y Axis Legend
            push();
            translate(this.chartWidth / 2, 60);
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
