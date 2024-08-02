// Array methods

var fruits = ["Olive", "OrAnges", "Ramphal", "Papaya", 
    "Peach", "Rose apple"];
console.log(fruits);

// shift opposite of pop
fruits.shift();
console.log(fruits);

// unshift opposite of push
fruits.unshift("Apple");
console.log(fruits);

// Add elements
fruits.splice(2, 2, "Mastrad","Tamarind");
console.log(fruits);

// remove
fruits.splice(1,2);
console.log(fruits);

// slice
let Newarr = fruits.slice(1);
console.log(Newarr);
console.log(fruits);

var sortedNames = fruits.sort();
fruits.reverse();
console.log(sortedNames);

var num = [34, 12, 65, 75, 90, 5, 10];
num.sort(function(a,b){
    return a - b;
});
console.log(num);

let Fruits = ["Water apple", "Pomegranate", "Pineapple",
     "Rambutan", "Raspberries", "Strawberries" ];
// "Water apple", "Pomegranate" "onion", "Rambutan", "Raspberries", "Strawberries" ;

    Fruits.unshift("Tamarind");
    console.log(Fruits);
