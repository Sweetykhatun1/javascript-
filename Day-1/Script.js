// Task 5 - Input a letter and check it is vowel or consonant using switch

var letter = prompt("Enter any letter : ");
switch(letter){
    case "a" : {
        console.log("vowel");
        break;
    }case "e" : {
        console.log("vowel");
        break;
    }case "i" : {
        console.log("vowel");
        break;
    }case "o" : {
        console.log("vowel");
        break;
    }case "u" : {
        console.log("vowel");
        break;
    }default : {
        console.log("letter a consonant");
    }
};

var letter = prompt("Enter any letter : ");
switch(letter){
    case "a" : 
    case "e" : 
    case "i" : 
    case "o" : 
    case "u" : 
        console.log("vowel");
        break;
    default : {
        console.log("consonant");
    }
};