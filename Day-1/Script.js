var num = 5;
var result = num * num;
console.log(result, "<br>");

var num = 6;
var result = num * num;
console.log(result, "<br>");

var num = 7;
var result = num * num;
console.log(result, "<br>");

// creating a function
function sqaure(num1, num2) {
    var result = num1 * num2;
    return result;
}
console.log(sqaure(5,6));

function sum(num3, num4, num5){
    let res = num3 + num4 - num5;
    return res;
};
console.log(sum(30, 20, 5));

// add function
function addition(x, y){
    let res = x + y;
    console.log(res, "<br>");
}
addition(30, 20);
// sub function
function subtraction(z, x){
    let res = z - x;
    console.log(res, "<br>");
}

subtraction(30, 20);
subtraction(60, 30);
subtraction(80, 5);

// create a function
// calling a function
// how to pass value in function
// returning a value
