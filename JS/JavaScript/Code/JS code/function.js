//function is reusable block of code which can be called anywhere in the program. It is used to perform a particular task. It is executed when it is called or invoked.

function alpha(){ // function declaration
  console.log("Hello") //function body
}
alpha(); //function call


function gamma(name){
  console.log("Hello "+name);
}
gamma("Harshit");


function greet(name){
  return "Hello bro "+ name;
}
let a=greet("Harry");
console.log(a);