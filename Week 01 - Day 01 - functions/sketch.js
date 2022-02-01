//let distance = 23;

//-------------------
clap(3, 8); //we can have multiple parameters 

function clap(startNum, endNum){
    let loopCount = endNum-startNum
    for(let i=0;i<loopCount;i++){
        console.log("Hi " + (startNum+i))
    }
}
//-------------------