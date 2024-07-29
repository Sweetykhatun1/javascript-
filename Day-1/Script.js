// Control Statement 
// Conditional Control Statement.
// Loop Control Statement.
var num = 6;
if(num % 2 == 0) {
    console.log("even");
}if(num % 2 != 0){
    console.log("odd");
};

var num = 5;
if(num % 2 == 0) {
    console.log("even");
}else {
    console.log("odd");
}

var mark = prompt("Enter your marks : ");

if(mark >= 100 || mark <= 0) {
    console.log("Invalid marks");
}else if(mark >= 80 && mark <= 100) {
    console.log("A+");105
}else if (mark >= 70 && mark <= 79) {
    console.log("A");
}else if(mark >= 60 && mark <= 69) {
    console.log("A-")
}else if(mark >= 50 && mark <= 59) {
    console.log("B");
}else if(mark >= 40 && mark <= 49) {
    console.log("C");
}else if(mark >= 33 && mark <= 39) {
    console.log("D");
}else{
    console.log("Fail");
};



var num = prompt("Enter a Number : ");
if(num > 0) {
    console.log("Positive");
}
else if(num < 0) {
    console.log("Negative");
}
else{
    console.log("Zero");
}


// Large number create.
var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num2 : ");

if(num1 >= num2 && num1 > num3){
    console.log(num1,"Large number =",num1 );
}else if(num2 >= num1 && num2 >= num3){
    console.log("Large number =",num2 );
}else{
    console.log("Large number =", num3);
};

// Vowel / Consonant
var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    console.log("Vowel");
}else {
    console.log("Consonant");
}