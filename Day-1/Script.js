// Date object
let date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);
let month = date.getMonth();
console.log(month);
let curr = date.getDay();
console.log(curr);
let currHour = date.getHours();
console.log(currHour);
let currS = date.getSeconds();
console.log(currS);
let botton = document.getElementById("click");
botton.addEventListener(click);


let h1 = document.getElementById("heading1");
h1.innerHTML = "Hello";
console.log(h1);

let p = document.getElementById("para");
p.innerHTML = "Bye";
console.log(p);

let H1 = document.getElementById("heading2");
H1.innerHTML = "Good Bye";
console.log(H1);

let tag = document.getElementsByTagName("h1")[1];
tag.innerHTML = "My name";
console.log(tag);

let para = document.getElementsByClassName("para1")[0];
para.innerHTML = "MYself";
console.log(para);

querySelector
let pa = document.querySelector(".pag");
pa.innerHTML = "Institute";
console.log(pa);
let pa = document.querySelector("p");
pa.innerHTML = "Institute";
console.log(pa);

let a = document.querySelector("li a").innerHTML = "House";

let div = document.querySelector(".my-div a").innerHTML = "Communication";

let all = document.querySelectorAll("p")[0].innerHTML = "New Paragraph";
console.log(all);
