//Loops-> repeat karne ko loop kahte hai
//for while do-while forof forin foreach
// 1 1 1 1 1 1 1 1
//1 2 3 4 5 6 7 8 9(print krna repeat ho rha hai)
//kaha se jana hai -> kaha tak jana hai -> kaise jana hai (for loop)
//kaha se jana hai -> kab rukna hai > kaise jana hai(while loop)
//1-40 -> for loop
//20-30 -> for loop
// hello na aa jay ->while loop
/*for(let i=1;i<22;i++){
  console.log(i);
}
//while loop
let i=1;
while(i<10){
  console.log(i);
  i++;
}
//do-while loop
let j=12;
do{
  console.log(j);
  j++;
}
while(j<2)
*/

//q1
for(let i=1;i<=10;i++){
  console.log(i);
}
//q2
let i=10;
while(i>=1){
  console.log(i);
  i--;
}
//q3
for(let i=2;i<=20;i+=2){
  console.log(i);
}
//q4
let j=1;
while(j<16){
    console.log(j);
    j+=2;
}
//q5
for(let i=1;i<11;i++){
    console.log("5 *",i,"=",(5*i));
}
//q6
let sum=0;
for(let i=1;i<101;i++){
    sum = sum+i;
}
console.log(sum);
//q7
for(let i=2;i<51;i++){
    if(i%3==0){
        console.log(i);
    }
}
//q8
let num= prompt("Enter the number: ");
for(i=1;i<=num;i++){
  if(i%2===0){
    console.log(`${i} is even.`);
  }
  else{
    console.log(`${i} is odd.`);
  }
}
//q9
let count=0;
for(let i=1;i<101;i++){
    if(i%3===0 && i%5===0){
        count++;
    }
}
console.log(count);
