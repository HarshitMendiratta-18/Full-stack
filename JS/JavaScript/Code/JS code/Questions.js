//Q1:
// let numa=Number(prompt("Enter number 1:"));
// let numb=Number(prompt("Enter number 2:"));
// console.log(numa+numb);
// console.log(numa-numb);
// console.log(numa*numb);
// console.log(numa/numb);
// console.log(numa%numb);
// console.log(numa**numb);

//Q2:
//yes we can chain assignment operator:
// let a=b=c=13;
// console.log(a);
// console.log(b);
// console.log(c);

//Q3:
// let x=prompt("Enter a number:");
// console.log(x%2==0?"Even Number":"Odd Number");

//Q4:
// let y=5;
// y +=3;
// y -=2;
// y *=4;
// y /=6;
// y %=3;
// console.log(y);

//Q5:
// let a=Number(prompt("Enter a number:"));
// console.log(a>=10 && a<=20?"Number is within range":"Number is out of range");

//Q6:
// let a=Number(prompt("Enter a number:"));
// let b=Number(prompt("Enter a number:"));
// let c=Number(prompt("Enter a number:"));
// console.log(a>b && a>c?"a is greatest":b>a && b>c?"b is greatest":"c is greatest");

//Q7:
// let a=5,b=3,c=2;
// let result= a++ + --b * c-- - ++a + b-- / --c;
// console.log("a:",a);
// console.log("b:",b);
// console.log("c:",c);
// console.log("Result:",result);
//Q8:
// console.log(~0);

//Q9:
// let username ="admin";
// let password="123";
// let databaseUser="admin";
// let databasePassword=123;
// let result= username===databaseUser && password===databasePassword?"Login successful":"Login failed";
// console.log(result);

//Q10:
let x=10;
let y=5;
let z="10";
x+=y*2;
let isEqual=x==z;
let isStrictEqual=x===z;
let logicTest=(isEqual||isStrictEqual)&&!(y>10);
let reuslt=logicTest?++x:--y;
console.log("x:",x);
console.log("y:",y);
console.log("z:",z);
console.log("isEqual:",isEqual);
console.log("isStrictEqual:",isStrictEqual);
console.log("logicTest:",logicTest);
console.log("Result:",reuslt);
console.log("Type of z:",typeof z);