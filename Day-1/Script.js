// Array loop

// let num = [10, 20, 30, 40];
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);

// let num = [10, 20, 30, 40];
// let sum = 0;
// for(let i=0; i <= 5; i++) {

//     console.log(num[i]);
//     sum = sum + num[i];
// }
// console.log(sum);

let num = new Array();
for(var i = 0; i < 5; i++){
    num[i] = parseFloat(prompt("Enter the number : "));
}

// let sum = 0;

// for (let i = 0; i < num.length; i++) {  // Change i <= 5 to i < num.length
//     console.log(num[i]);
//     sum = sum + num[i];
// }
// console.log(sum); 

let mul = new Array();

for(i = 0; i < 5; i++){
    mul[i] = parseFloat(prompt("Enter a number : "));
}

let sum = 0;
for(i =0; i < 5; i++){
    console.log(mul[i]);
    sum = sum + mul[i];
}
console.log(sum);


// 40, 20, 10, 60, 90;
// length 4
let arr = new Array();
for(i=0; i < 4; i++){
    arr[i] = parseInt(prompt("Enter a number : "));
    console.log(arr[i]);
}
console.log(arr);
console.log(arr.length);


// let sum = 0;
// for(i=1; i <= 5; i++){
//     sum = sum + i;
//     console.log(sum);
// }



