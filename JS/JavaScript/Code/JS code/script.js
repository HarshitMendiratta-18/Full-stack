//Opeartors
//Arithmetic,comparison,logical,assignment,unary,ternary
// == only checks the value but === checks both value and type.
//assignment operator(=,+=,-=,/=,*=,%=)
//logical(&&,||,!)
//unary(applied on single operands(+,-,!,typeof,++,--))
//(?:) ternary operator -> condition ? true code : false code
//Q1:
/*let x=10;
let y=20;
if(x>5 && y<25){
  console.log("A");
} else{
  console.log("B");
}*/
//q2:
/*let isAdmin=true;
let isLoggedin=false;
if(isAdmin||isLoggedin){
  console.log("Access granted");
}else{
  console.log("Access denied");
}*/
/*let temp=35;
if(!(temp<30)){
  console.log("Hot");
} else{
  console.log("pleasant");
}*/
/*let a=0;
if(a){
  console.log("Truthy");
}
else{
  console.log("Falsy");
}*/
//control flow
//if,else,else-if,switch case,early return pattern
//q1:
/*function getGrade(score){
  if(score >=90 && score<=100){
    return "A+";
  }
  else if(score>=80 && score<=89){
    return "A";
  }
  else if(score>=70 && score<=79){
    return "B";
  }
  else if(score>=60 && score<=69){
    return "C";
  }
  else if(score>=33 && score<=59){
    return "D";
  }
  else if(score>=0 && score<=32){
    return "Fail";
  }
  else{
    return "Invalid Marks";
  }
}
console.log(getGrade(55));*/
//Rock-paper-scissor logic
/*function rps(user,computer){
  if(user===computer) return "draw";
  if(user==="rock" && computer==="scissor") return "user";
  if(user==="scissor" && computer==="paper") return "user";
  if(user==="paper" && computer==="rock") return "user";
  return "computer";

}
console.log(rps("rock","scissor"));*/

//console.log("Starting JS");
//document.getElementById("myH1").textContent=`Hello`;
//document.getElementById("myP").textContent=`Welcome my friend!`;
//window.alert("This is an alert box");

//Variables: it is a container that holds data in memory. It has a name and a value. We can use variables to store and manipulate data in our programs.
//declarartion : let x;
//assignment or initialization: x=5;
/*let x=5;
console.log(x);
//Numbers datadtype:
let age=21;
let price=10.99;
let gpa=2.1;
console.log(`You are ${age} yeras old.`);
console.log(`The price of the product is $${price}.`);
console.log(`Your gpa is ${gpa}.`);
//strings:
let firstName="Harshit";
console.log(`My name is ${firstName}.`);
let favSport="Football";
console.log(`My favourite sport is ${favSport}.`);
//Boolean:
let online=true;
console.log(`Bro is online: ${online}.`);

let fullName="Harshit Mendiratta";
let age1=21;
let student=true;/*
//document.getElementById("p1").textContent=`My name is ${fullName}`;
//document.getElementById("p2").textContent=`You are ${age1} years old`;
//document.getElementById("p3").textContent=`Are you student:${student}`;
//arithmetic operator
/*let a=10;
a=a+5;
console.log(a);
a=a-4;
console.log(a);
a=a*2;
console.log(a);
a=a/2;
console.log(a);
//operator precedence : parenthesis, exponents, multiplication and divison and modulo , and addition and subtraction
let result= 1+2*3+4**2; // 23/*


// accept some user input



/*let num1=Number(window.prompt("Enter first number:"));
let num2=Number(window.prompt("Enter second number:"));
let sum=num1+num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);*/

/*let username;
document.getElementById("mySubmit").onclick=function(){
  username=document.getElementById("myText").value;
  document.getElementById("myH1").textContent=`Hello ${username}`;
}
*/
//type conversion:converting one type of data into another 
/*let age=window.prompt("Enter your age :");
age=Number(age);
age+=1;
console.log(age);*/

let x="pizza";
let y="pizza";
let z="pizza";

x=Number(x);
y=String(y);
z=Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

let runs=100;
runs+=50;
console.log(runs);