//setTimeout ek baar chalta hai and setInterval bar bar chalta hai
// setTimeout(function(){
//   console.log("Hello World");
// },3000)

// let count=10;
// let inv=setInterval(function(){
//   if(count>=1){
//     count--;
//     console.log(count);
//   }
//   else{
// clearInterval(inv);
//   }
// },1000);

let count=0;
let prg=document.querySelector(".progress-bar");
let prctext=document.querySelector("#percentText");
let h2=document.querySelector("h2");
let inv=setInterval(function(){
  if(count<100){
    count++;
    prg.style.width=`${count}%`;
    prctext.textContent=`${count}%`;
  }
  else{
    h2.textContent="Downloaded";
    clearInterval(inv);
  }
},50);
