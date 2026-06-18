
// console.log("Conditional Statement");
// let productinStock=3;
// if(productinStock<=0){
//   console.log("Product is out of stock");
// }else{
//   console.log("Product is available");
// }

// let weather="rainy";
// if(weather==="rainy"){
//   console.log("Take an umbrella");
//   }
//   else{
//     console.log("Enjoy the weather");
//   }

//   //if statement :
//   let temperature=60;
//   if(temperature>30){
//     console.log("It is hot outside");
//   }

//   //if-else:
//   let age=20;
//   if(age>=18){
//     console.log("You can drive");
//   }
//   else{
//     console.log("You cannot drive");
//   }

//   //if-else-if:
//   let score=77;
//   if(score>=90){
//     console.log("Grade A");
//   }
//   else if(score>=80){
//     console.log("Grade B");
//   }
//   else if(score>=70){
//     console.log("Grade C");
//   }
//   else{
//     console.log("You need to study more");
//   }

//   //switch statement:
//   let color="yellow";
//   switch(color){
//     case "red":
//       console.log("Color is red");
//       break;
//     case "blue":
//       console.log("Color is blue");
//       break;
//     case "yellow":
//       console.log("Color is yellow");
//       break;
//     default:
//       console.log("Color is not recognized");
//   }

//   //ternary operator:
//   let isloggedin = true;
//   let message =isloggedin?"Welcome back":"Please log in";
//   console.log(message);

//   //challenge1:
//   let cartValue=122;
//   let finalcartValue;
//   if(cartValue<50){
//     finalcartValue=cartValue;
//     console.log("No discount is applied.");
//   }
//   else if(cartValue>=50 && cartValue<=100){
//     finalcartValue=cartValue-(cartValue*0.1);
//     console.log("10% discount is applied.");
//   }
//   else{
//     finalcartValue=cartValue-(cartValue*0.2);
//     console.log("20% discount is applied.");
//   }
//   console.log(`Final cart value is : ${finalcartValue.toFixed(2)}`);


//   //challenge 2:
//   let hasSubscription =true;
//   let subscriptionType="premium";
//   if(hasSubscription){
//     if(subscriptionType==="premium"){
//       console.log("Acces to all content");
//     }
//     else if(subscriptionType==="standard"){
//       console.log("access to standard content");
//     }
//     else {
//       console.log("Unknown subscription type");
//     }
//   } else{
//     console.log("Please susbscribe to accesss content");
//   }

//q1:
// let themecolor=prompt("Enter the color:");
// if(themecolor==="light"){
//   console.log("white");
// }else if(themecolor==="dark"){
//   console.log("black");
// }
// else{
//   console.log(themecolor);
// }

//q2:
// let num1=prompt("Enter the first number:");
// let num2=prompt("Enter the second number:");
// let num3=prompt("Enter the third number:");
// if(num1<num2 && num1<num3){
//   console.log(`The smallest number is ${num1}`);
// }
// else if(num2<num1 && num2<num3){
//   console.log(`The smallest number is ${num2}`);
// }
// else{
//   console.log(`The smallest number is ${num3}`);
// }

//q3:
let userrole="admin";
switch(userrole){
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("edit access");
    break;
  case "viewer":
    console.log("read-only");
    break;
  default:
    console.log("no access");
}

//q4:
let number=30;
if(number%3==0 && number%5==0){
  console.log("FizzBuzz");
}
else if(number%3==0){
  console.log("Fizz");
}
else if(number%5==0){
  console.log("Buzz");
}
else{
  console.log("Nothing");
}

//q5:
let num1=23;
let num2=33;
let operator="*";
switch(operator){
  case "+":
  console.log(num1+num2);
  break;
  case "-":
  console.log(num1-num2);
  break;
  case "*":
  console.log(num1*num2);
  break;
  case "/":
  console.log(num1/num2);
  break;
  default:
  console.log("Invalid operator");
}

//q6:
let totalBalance=100000;
let usersChoice=Number((prompt("Enter userschoice [1. Check balance 2. Deposit 3. Withdraw 4. Exit")));
if(usersChoice===1){
  console.log(`Your total balance is ${totalBalance}`)
}else if(usersChoice==2){
  let depositamount=Number(prompt("Enter the amount to deposit"));
  if(depositamount>0){
    totalBalance+=depositamount;
    console.log(`Deposit successful. Your new balance is ${totalBalance}`);
  }else{
    console.log("Invalid deposit amount");
  }
}else if(usersChoice==3){
  let withdrawamount=Number(prompt("Enter the amount to withdraw"));
  if(withdrawamount>0 && withdrawamount<=totalBalance){
    totalBalance-=withdrawamount;
    console.log(`Withdrawal successful. Your new balance is ${totalBalance}`);
  }
}

let runs=300;
runs>=300?console.log("You are a good player"):console.log("You need to improve your game");