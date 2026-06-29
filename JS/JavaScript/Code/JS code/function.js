// //function is reusable block of code which can be called anywhere in the program. It is used to perform a particular task. It is executed when it is called or invoked.

// function alpha(){ // function declaration
//   console.log("Hello") //function body
// }
// alpha(); //function call


// function gamma(name){
//   console.log("Hello "+name);
// }
// gamma("Harshit");


// function greet(name){
//   return "Hello bro "+ name;
// }
// let a=greet("Harry");
// console.log(a);


// function sum(x,y){  // x and y are the parameters of the function sum, parameteres have the block scope.
//   let s=x+y;
//   return s;
// }
// console.log("Sum  is: "+sum(7,8));  // 7 and 8 are the arguments of the function sum 

// //default parameter:
// function greet1(name = "Guest"){
//   console.log("Hello, "+ name + "!");
// }
// greet1("Sarthak");
// greet1();


//normal function:
// function sum(a,b){
//   return a+b;
// }
// console.log(sum(2,9));

//function expression:
// let sum1=function(a,b){
//   return a+b;
// }
// console.log(sum1(8,8));

//fat-arrow function:
// let a=()=>{
//   console.log("hi");
// }
// a();

//function wihtout nme:ananymous function:
//setTimeout(()=>{},3000); //it will run after 3 seconds(function,time in milliseconds)

//IIFE:Immediately invoked function expression: it is a function which runs as soon as it is defined.,call nahi karna padta automatically apne aap call ho jata hai.

// (function(){
//   console.log("Hello");
// })();



//q1:
// function captializeFirstLetter(str){
//   console.log(str.charAt().toUpperCase()+str.slice(1));
// }
// captializeFirstLetter("harshit");

//q2:
// setTimeout(()=>{
//   alert("Please Login");
// },5000);

//q3:
