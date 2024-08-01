// Ternary operator
var num = Number(prompt("Enter a number : "));
if(num > 0) {
    console.log("Positive");
}else{
    console.log("negative");
};

var result = num > 0? "positive" : "negative";
console.log(result);

// ternary operator a 2 er othik condition thakle ki hob?
if(num > 0) {
    console.log("Positive");
}else if(num < 0 ){
    console.log("negative");
}else{
    console.log("Zero");
};

var num = Number(prompt("Enter a number : "));
var result = num > 0 ? "positive" : num < 0 ? "negative" : "Zero";
console.log(result);