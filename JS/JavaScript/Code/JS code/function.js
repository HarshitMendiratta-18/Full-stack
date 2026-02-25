//functions
//agar code likh diya to wo turant chal jaata hai but hame chaiye ki wo turant na chale jab call kiya jay tab chale that is caleed function.
function dance(v1){
  console.log(`${v1} is dancing.`);
}
dance("Horse");
function add(v1,v2){
  console.log(v1+v2);
}
add(3,4);
function add(v1,v2){
  console.log(v1,v2);
}
add();
// jab arguments kai saare ho to humein utne hi parameter banane padenge ,isse bachne ke liye ham rest k use krte hai(... =>rest or spread). agr ... function ke parameter space mein lage to wo rest operator hai or agr woh arrays and objects me lage to wo spread operator hai.
function abcd(...val){
  console.log(val);
}
abcd(1,2,3,4,5,6);
//return matlab jaha se aaya hai whi daal denge
//first class function: functions ko value ki trh treat kr skte hain 
function abcd(val){
  val();
}
abcd(function (){
  console.log("hey");
});
//high order function(hof): aise function jo ki return kare function ya fir accept kre ek function apne parametere me 
//pure vs impure function:
//pure: aisa function jo bahar ki value ko naa badle wo hai pure function
let a =12;
function ab(){
  console.log("hey");//pure
}
function ac(){
  a++; //impure
}
//impure: aisa function jo bahar ki value ko badal de woh hai impure function
//closures: ek function jo return karega ek aur function aur return hone vala function hmesha use krega parent function ka koi variable.
function abc(){
  let a=12;
  return function(){
    console.log(a);
  }
}
//lexical scoping: function ke andar function ke andar function
function abcd(){
  let a=12;
  function defg(){
    let b=11;
    function ghij(){
      let c=10;
    }
  }
}
//IIFE:(Immediately Invoke function expression)
(function(){
  console.log("Hi");
})(); // this is called IIFE.
//Hoisting: ek variable ko likhne se phle chala pa rhe ho ,called hoisting
abcd();


function abcd(){
  console.log("Hello");
}

//q1 diff between function declarationa nd expression in terms of hoisting

greet();
function greet(){
  console.log("Hello!");
}
//q2
function sayHi(name="Guest"){
  console.log("Hi",name);
}
sayHi();