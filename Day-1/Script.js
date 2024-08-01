// IIFEs (Immediately Invokeable Functin Expressions)

function display () {
    console.log('hello');
}
display();

(function display (message) {
    console.log(message);
})("Hello");

// Task 7
(function sum(a, b){
    console.log(a + b);
})(5, 9);

// Function Expression
const display2 = function displayMessage(msg) {
    console.log(msg);
}
display2('I am message');

// () => "parantasis",
// {} => "karli braket",
// [] => "square braket",
// <> => "andor braket";

