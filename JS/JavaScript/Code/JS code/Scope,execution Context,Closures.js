//Scope hai ke aap apne created variables and functions kaha tak use kar skte ho.
//scope types: functional scope,global scope,block scope.
//function scope: function ke andar hi use ho skti hai .
//global scope: poore code me kahi bhi use ho skti hai.
//block scope-{} curly braces me hi use ho skti hai 
// agar mera code kisi bhi {} ke andar nahi hai to woh global scope me hai.


//execution context:js sbse phle jaise hi aapka function dekhta hai sabse phle js banata hai execution context, ye ek process hai jisme do diferent phases chalte hai ,memory phase and execution phase .


//in js we follow lexical scoping not dynamic scoping
//js-lexical scoping-> ki aap kaha par physically available ho ye poori tareeke se depend krta hai ki aap kya access kr paoge 
// function abcd(){
//   let a=12;
//   function defg(){
//     console.log(a); // a is lexically scoped in abcd function bcz it is physically available at line number 15
//   }
// }

//dynamic scoping: kahah se fake call kr rhe ho wha se depend krta hai ki kya value milegi.

//closures hote hai functions jo kisi parent function ke andar ho aur andar vala function return ho rha ho , and returning function use kre ,parent function ka koi variable
// function ab(){
//   let x=2;
//   return function(){
//     console.log(x);
// }
// }

//ye sach hai ki funciton ke khtm hone pe aapka function and uske variable khtm ho jaate hai ,par jab bhi closure banta hai to aapka function aur uske variables ke ke backlink banaya jata hai aur uska naam hota haii : [[environment]]
// function countForme(){
//   let c=0;
//   return function(){
//     c++;
//     console.log(c);
//   }
// }
// let fnc=countForme();
// fnc();
// fnc();
// let fnc2=countForme();
// fnc2();
// fnc2();
// fnc2();


//encapsulation: encapsulation ka matlab hai ki aapke function ke andar jo bhi variables hai woh bahar se access na ho paaye , aur aapke function ke andar hi use ho.

// function clickLimiter(){
//   let click=0;
//   return function(){
//     if(click<5){
//       click++;
//       console.log(`Clicked ${click} times`);

//     }else{
//       console.error("Click limit exceeded");
//     }
//   };
// }
// let fnc=clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();



//Toaster Project:
function createToaster(config){
  return function(notification){
    let div=document.createElement("div");
    div.className=`inline-block ${config.theme==="dark"?"bg-gray-800 text-white": "bg-gray-100 text-black"} px-6 py-3 rounded-lg shadow-lg pointer-events-none `;
    div.textContent=notification;
    document.querySelector(".parent").appendChild(div);
    setTimeout(()=>{
      document.querySelector(".parent").removeChild(div);
    },config.duration*1000);
  };
}
let toaster=createToaster({
  positionX :"left",
  positionY:"top",
  theme:"dark",
  duration: 3,
});
toaster("This is a dummy notification");