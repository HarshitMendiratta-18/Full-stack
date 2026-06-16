console.log("Lets learn about operators in js");
let result=5+3;
console.log(result);
let result1=5-3;
let result2=5*3;
let result3=5/3;
let result4=5%3;
let result5=5**3; 
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

//use case1:
let price=150;
let quantity=3;
let totalCost=price*quantity;
let discount=totalCost*0.1;
let finalCost=totalCost-discount;
console.log(price);
console.log(totalCost);
console.log(discount);
console.log(finalCost);
console.log("The final cost is: " + finalCost);

//assignment operator:
let x=10;
x+=3;
console.log(x);
x-=4;
console.log(x);
x*=7;
console.log(x);
x/=5;
console.log(x);
x%=2;
console.log(x);
x**=6;
console.log(x);

//comparison operators:
console.log(5=="5");
console.log(5==="5");
console.log(5!="5");
console.log(5!=="5");
console.log(5>2);
console.log(5<2);
console.log(5>=5);
console.log(5<=3);


//logical operators:
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(!true)
console.log(!false)
console.log(!(5>3))
console.log(!(5<3))
console.log(!(5==5))
console.log(!(5!=5))


//ternary operator:
let age=20;
let canVote=age>=18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);



let num1=10;
let num2=20;
let max=num1>num2 ? num1 : num2;
console.log("The maximum number is: " + max);

let score=18;
let message=score>=18?"Eligible for booking":"Not eligible for booking";
console.log(message);

let username="";
let password="";
let loginMessage=username && password ? "Login successful" : "Please enter username and password";
console.log(loginMessage);


//increment and decrement 
let a=5;
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);
console.log("");
let b1=7;
console.log(b1)
console.log(b1--);
console.log(b1);
console.log(--b1);
console.log("");
let c1=10;
let result= c1++ + ++c1 -10;
console.log("Result is:"+result);


//Bitwise operator:
// 0 and 1 ki form me numbers represent krna
//imp:2's compliment 
//shortcut trick: -(x+1)
console.log(5&3);
console.log(4&7);
console.log(8|11);
console.log(26|15);
console.log(~3);
console.log(~0);
console.log(~(-5));

//truthy and falsy values:
//falsy value:false,undefined,null,0,-0,0n,"",NaN
//truthy value:anything which is not false
//Short circuiting in js refers tpo way logical operators evaluate expressions.It allows us to control thr flow and return values based on truthiness without writing full if statements.
console.log(""||undefined||"harry"||0);
console.log("sarthak"||123||null||0);
console.log("rohan"&&null&&123&&0);