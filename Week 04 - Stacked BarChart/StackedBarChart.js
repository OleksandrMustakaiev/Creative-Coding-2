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
        this.numTicks = 10; //number of ticks and numbers(text)
        this.numPlaces = 0; //number of decimal numbers of ticks
        this.title = "Horizontal Stacked Bar Chart";
        this.fontSize = 12;
        
        this.tickIncrements;
        this.maxValue;
        this.tickSpacing;
        this.barHeight;
        this.availableHeight;


        this.showValues = true; //show values above each bar chart
        this.rotateLabels = true; //rotate values
        this.showLabels = true; //show name of each bar chart

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

    drawTitle(){
        fill('#747d8c');
        textSize(this.fontSize);
        textAlign(CENTER, BOTTOM);
        text(this.title, this.chartWidth / 2, -this.chartHeight - 20);
    }




}
