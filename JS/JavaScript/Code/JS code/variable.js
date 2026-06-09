// // // console.log("Harshit"); //console hamara output print krta hai screen pe
// // // console.log(3+8);
// // // // comments in js : just for refernce of understanding: //-sinle line , /* */-multi line
// // // console.log("Hello")
// // // console.log("Hello1")
// // // console.log("Hello2")
// // // console.log("Hello3")
// // // console.log("Hello4")



// // // let age;
// // // age=19;
// // // console.log(age);
// // // let name="Harshit";
// // // console.log(name);
// // // let a;
// // // let b;
// // // let c;
// // // a=10;
// // // b=22;
// // // c=33;
// // // console.log(a,b,c);

// // let age=5;
// // let age=22; // we cannot declare a variable with same name more than once in js

// // while with char we can redeclare the variable but with let we cannot redeclare the variable.
// //let is block scope variable hai, iska matlab hai ki hum is variable ko us block ke andar hi access kr sakte hain jahan pe humne usko declare kiya hai, while var ek global scope hai jisse hum khin bhi access kr sakte hain.

// const pi=3.14; // const is a constant variable, we cannot change its value once it is assigned
// console.log(pi);
// let alpha;
// console.log(alpha); 
// //case-sesitive hota hai, iska matlab hai ki age aur Age do alag variables hain.
// let school="ABC";
// let School="ABC";
// console.log(school);
// console.log(School); // dono variables alag hain kyunki unke naam me case difference hai but output same hai bcz value same di hai.
//in naming only 2 special characters are allowed: underscore(_) and dollar sign($)
//strating me number se variable name nahi start kar sakte hain, but hum variable name me number use kar sakte hain, but starting me nahi.
//reserved keywords like let, var, const, if, else, for, while, function, return etc. cannot be used a s variable name

//Datatypes:primitive and non-primitive
//primitive: number,null, string, symbol , boolean , big int , undefined (NNSSBBU)
//non-primitive: object, array, function

//use case1:
let price1=490;
let price2=500;
let total=price1+price2;
console.log(total);
//use case2:
let firstName="Harshit";
let lastName="Mendiratta";
let fullName=firstName + " " + lastName;
console.log(fullName);
//js is dynamically typed language
let a=1;
console.log(typeof a);
a="Harshit";
console.log(typeof a);
a=true;
console.log(typeof a);

console.log("2"+2); //concatenation,type is string
console.log("2"-2); //subtraction,type is number


//if we use the variable without dclaring it then it will give an reference error ,but if we use the variable without initializing it then it will give us undefined.
//default value of uninitialized variable in javascript is undefined
//type of null is object in javascript
let name2=null;
console.log(name2,typeof name2);
//nan is a special value in javascript which stands for "Not a Number", it is the result of an invalid mathematical operation like dividing a number by zero or trying to convert a non-numeric string to a number.if we want to check if a value is nan or not then we can use isNaN() function in javascript.