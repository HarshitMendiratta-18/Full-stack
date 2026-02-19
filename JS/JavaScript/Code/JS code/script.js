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
//Loops-> repeat karne ko loop kahte hai
//for while do-while forof forin foreach
