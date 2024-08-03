// One dimensional (1D) Array
let motorCycle = ["Tarform Motorcycles", "Janus Motorcycle", 
    "Cleveland CycleWerks", "Damon Motorcycles", "Harley-Davidson"];

    for(Top = 0; Top < 5; Top++) {
        console.log(motorCycle[Top]);
    }


function highestScore(scores){ 
        let high = scores[0];
        for(x = 1; x < scores.length; x++) {
            if(high < scores[x]) {
                high = scores[x];
            }
        }
        return high;
    }
    let scores = [34, 54, 200, 75, 43, 12, 90, 100];
    let highScore = highestScore(scores); 
    console.log(highScore);      
    
