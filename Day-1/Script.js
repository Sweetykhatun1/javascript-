// String relative Library function

var text = "sweety Khatun";
var len = text.length;
document.write("Number of character = " + len);

var text = "sweety Khatun";
document.write("Number of character = " + text.length);

var text = prompt("Enter your name : ");
document.write("Number of character = " + text.length);

var text = "Bangladesh";
document.write(text.charAt(2));

var text = "Bangladesh";
document.write(text.toUpperCase());

var text = "Bangladesh";
document.write(text.toLowerCase());

var text1 = "Bangladesh";
var text2 = " Is a beautiful country.";
document.write(text1.concat(text2));

var text1 = "Bangladesh";
var text2 = " Is a beautiful country.";
var text = text1.concat(text2);
document.write(text);

var text1 = "Bangladesh";
var text = text1.slice(0, 2);
document.write(text);

var text1 = "Bangladesh";
var text = text1.slice(2, 5);
document.write(text);

var firstName = prompt("Enter your first name ");
var lastName = prompt("Enter your last name <br>");
var fullName = firstName + lastName;
document.write(fullName); 

document.write(fullName.length);

document.write(fullName.toUpperCase());

document.write(fullName.charAt(2));