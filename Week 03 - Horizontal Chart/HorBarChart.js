class HorBarChart{
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
        this.title = "Horizontal Bar Chart";
        this.fontSize = 12;
        
        this.tickIncrements;
        this.maxValue;
        this.tickSpacing;
        this.barHeight;
        this.availableHeight;


        this.showValues = true; //show values above each bar chart
        this.rotateValues = true; //rotate values
        this.showLabels = true; //show name of each bar chart

        this.colors = [color('#6a89cc'), color('#82ccdd'), color('#b8e994'), color('#38ada9')];

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
    this.drawTitle();
    pop()
    }


    scaledData(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 0, this.chartWidth);
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
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 10);
    
            //numbers (text)
            fill('#747d8c');
            noStroke();
            textSize(this.fontSize);
            textAlign(CENTER, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 20);
        }
    }

    drawVerticalTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //vertical lines
            stroke('#a4b0be');
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
                if(this.rotateValues){
                    push();
                    noStroke();
                    fill('#747d8c');
                    textSize(this.fontSize);
                    textAlign(RIGHT, CENTER);

                    translate(((this.barHeight + this.spacing) * -i) + (this.barHeight / -2), this.scaledData(-this.data[i].total) - 20)
                    rotate(PI / -2)
                    text(this.data[i].total, 0, 0);
                    pop();
                } else{
                    noStroke();
                    fill('#747d8c');
                    textSize(this.fontSize);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].total, ((this.barHeight + this.spacing) * -i) + this.barHeight / -2, this.scaledData(-this.data[i].total));
                }
            
            }

            //text
            if(this.showLabels){
                    push();
                    noStroke();
                    fill('#747d8c');
                    textSize(this.fontSize);
                    textAlign(RIGHT, CENTER);
    
                    translate(((this.barHeight + this.spacing) * -i) + this.barHeight / -2, 10);
                    rotate(PI / -2);
                    text(this.data[i].name, 0, 0);
                    pop();
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