// Relational Operator -> >, >=, <, <=, ==, ===, !=, !==
// Logical Operator -> &&, ||, !

var num1 = 20;
var num2 = 20;
console.log(num1 >= num2); //num1 er boro ba num1 er soman hole true

var num1 = 50;
var num2 = 100;
console.log(num1 <= num2); //num1 er choto ba num1 er soman hole true

console.log(20 == 20);
console.log(20 == "20"); //(==) mane value check korbe datatype check korbe na
console.log(20 === "20"); //(===) er kaj value and datatype check kora
// != value check korbe
// !== value and datatype check korbe
console.log(10 != 15); 


var num1 = 50;
var num2 = 30;
var num3 = 20;
console.log(num1>num2 && num1>num3); //sb value true hole taholei true return korbe nahole false
console.log(num1>num2 && num3>num2);
console.log(num3 > num1 || num3 > num2); //j kono ekta condition true hole true return korbe

console.log(!true);
console.log(!false);
console.log(!(25>22));
console.log(!(25<22));