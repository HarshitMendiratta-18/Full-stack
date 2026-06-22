//Loops:
//loops are way to repeat a block of code multiple times.


//for loop:
//for(initialization; condition; iterator){
//code}
// for(let i=1;i<=10;i++){
//   console.log("Harshit");
// }
//while loop:
/*while(condition){
//code
}*/
// let i=1;
// while(i<=10){
//   console.log("Good morning");
//   i++;
//}

//do-while loop:
//first run the task then check the condition
// let i=10;
// do{
//   console.log(i);
// }while(i<=5);

let str="Harshit Mendiratta";
// for(let ch of str){
//   console.log(ch);
// }
// for(let ch in str){
//   console.log(ch);
// }

//Challenge1:
// for(let i=0;i<=100;i++){
//   if(i%2===0){
//     console.log(i)
//   }
// }

//challenge2:
// let string="harshit";
// let vowel=0,consonant=0;
// for(let ch of string){
//   if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"||ch==="A"||ch==="E"||ch==="I"||ch==="O"||ch==="U"){
//     vowel++;
//   }else{
//     consonant++;
//   }
// }
// console.log("Vowels: ",vowel);
// console.log("Consonants: ",consonant);


//q1:
// let num=prompt("Enter the nnumber:");
// let sum=0;
// for(let i=1;i<=num;i++){
//   sum=sum+i;
// }
// console.log("Sum of first "+num+" natural numbers is: ",sum);

//q2:
// let m=Number(prompt("Enter start"));
// let n=Number(prompt("Enter end:"));
// let sum=0;
// for(let i=m;i<=n;i++){
//   sum=sum+i;
// }
// console.log("The sum from "+ m + " to " + n + "is: " , sum);

//q3:
// let num=Number(prompt("Enter the number:"));
// for(let i=0;i<=num;i++){
//   if(i%2!==0){
//     console.log(i);
//   }
// }

//q4:
// let n=Number(prompt("Enter the number:"));
// let fact=1;
// for(let i=1;i<=n;i++){
//   fact=fact*i;
// }
// console.log("Factorial of "+n+" is: ",fact);

//q5:
let n=5;
for(let i=1;i<=n;i++){
  let str="";
  for(let j=1;j<=i;j++){
    str=str+j;
  }
  console.log(str);
}
//q6:
let runs=100;
for(let i=1;i<=runs;i++){
  if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
  }else if(i%3===0){
    console.log("Fizz");
  }else if(i%5===0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}

//q7:
let n=5;
for(let i=1;i<=n;i++){
  let str="";
  for(let j=1;j<=i;j++){
    str=str+"*";
  }
  console.log(str);
}