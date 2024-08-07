// let val = Math.sqrt(25);
// console.log(val);
// let valu = Math.abs(-5);
// console.log(valu);
// let value = Math.sin(2);
// console.log(value);
// let value1 = Math.pow(2,4);
// console.log(value1);
// let value2 = Math.floor(9);
// console.log(value2);
// let value3 = Math.ceil(2.1);
// console.log(value3);
// let value4 = Math.round(3.5);
// console.log(value4);
// let value5 = Math.max(3,9,7);
// console.log(value5);
// let value6 = Math.random() * 6;
// console.log(value6);
// let value7 = Math.floor(Math.random() * 6);
// console.log(value7);
// let value8 = Math.floor(Math.random() * 6);
// console.log(value8);
// let value9 = Math.floor(Math.random() * 6);
// console.log(value9);
// let value10 = Math.floor(Math.random() * 6);
// console.log(value10);
// let value11 = Math.floor(Math.random() * 11) + 10;
// console.log(value11);
// let value12 = Math.floor(Math.random() * 11) + 10;
// console.log(value12);
// let value13 = Math.floor(Math.random() * 11) + 10;
// console.log(value13);
// let value14 = Math.floor(Math.random() * 11) + 10;
// console.log(value14);
// let value15 = Math.floor(Math.random() * 11) + 10;
// console.log(value15);
// let value16 = Math.floor(Math.random() * 11) + 10;
// console.log(value16);
// let value17 = Math.floor(Math.random() * 11) + 10;
// console.log(value17);

let Win = 0;
let Lost = 0;

for(let i = 1; i <= 5; i++){
    let guessNumber = parseInt(prompt("Enter a number from 1  to 5 : "));
console.log(guessNumber);

let ranNumber = Math.floor(Math.random( ) * 5) + 1;
if(guessNumber === ranNumber){
    console.log("you have won");
    Win++;
}else{
    console.log("you have lost. Random number was ", ranNumber);
    Lost++;
}
};
console.log("Number of won =",Win);
console.log("Number of lost =",Lost);
