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
