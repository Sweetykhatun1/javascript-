// Two dimensional (2D) Array Creating

function highestScore (scores){
    let max = scores[0];
    for(let x = 1; x < scores.length; x++) {
        if(max < scores[x]) {
            max = scores[x];
        }
    } 
    return max;                                                                       
}
let scores = [23, 20, 25, 67, 100, 34, 75,43];
let maxScore = highestScore(scores);
console.log(maxScore);


function info(Scores) {
    let highersScore = Scores[0][0];
    let higherScore = Scores[0][1];

    for(let x = 1; x < Scores.length; x++){
        if(higherScore < Scores[x][1]) {
            higherScore = Scores[x][1];
            highersScore = Scores[x][0];
        }
    }
    return highersScore;
}

let Scores = [ 
    ["Ashraful", 95],
    ["Sakib", 19],
    ["Mushfiq", 103],
    ["Mahmudullah", 45],
    ["Mashrafee", 98]
   ];

   let name = info(Scores);
   console.log(name);


function totalResult (playersInfo){
    let highestScorerName = playersInfo[0][0];
    let highestScore = playersInfo[0][1];

    for(let x = 1; x < playersInfo.length; x++){
        if(highestScore < playersInfo[x][1]){
            highestScore = playersInfo[x][1];
            highestScorerName = playersInfo[x][0];
        }
    }
    return highestScorerName ;
};

let playersInfo = [
    ["Lionel Messi", 49], 
    ["Cristiano Ronaldo", 180], 
    ["Neymar", 89], 
    ["Robert Lewandowski", 59],
    ["KylianMbappe", 69], 
    ["Kevin De Bruyne", 70], 
    ["Virgil van Dijk", 87],
];

let playerHighestScore = totalResult(playersInfo);
console.log(playerHighestScore);