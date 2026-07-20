//browser me kuch bhi harkat karo event raise ho jayga , kuch screen par ho aur aapko reaction dena ho toh us time aapko event handle karn aana chaiye 
// event means kuch action hua
//event listener mtlb jo action uska uska reaction dena that is called event listener



// let p=document.querySelector("p");
// function click(){
//   p.style.color="red";
// }
// p.addEventListener("click",click);
// p.removeEventListener("click",click);

// let input=document.querySelector("input");
// input.addEventListener("input",function(value){
//   if(value.data!==null){
//     console.log(value.data);
//   }
// });


//change event jab chalta hai jab aapka koi input ya textarea me koi chnage ho jaye

// let sel=document.querySelector("select");
// let device=document.querySelector("#devices");
// sel.addEventListener("change",function(dets){
//   device.textContent=`${dets.target.value} Device Selected`;
// })




// let h1 =document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//   if(dets.key===" "){
//     h1.textContent="Spc";
//   }
//   else{
//   h1.textContent=dets.key;}
// })


// let btn=document.querySelector("#btn");
// let input=document.querySelector("#file");
// btn.addEventListener("click",function(){
//   file.click();
// });
// file.addEventListener("change",function(dets){
//   if(dets.target.files){
//   const files=dets.target.files[0];
//   if(files){
//     btn.textContent=files.name;
//   }
// }
// });


// let form=document.querySelector("form");
// let input=document.querySelectorAll("input");
// let main=document.querySelector("#main");


// form.addEventListener("submit",function(dets){
//   dets.preventDefault();
//   let card=document.createElement("div");
//   card.classList.add("card");

//   let profile=document.createElement("div");
//   profile.classList.add("profile");

//   let img=document.createElement("img");
//   img.setAttribute("src",input[0].value);

//   let h3=document.createElement("h3");
//   h3.textContent=input[1].value;
//   let h5=document.createElement("h5");
//   h5.textContent=input[2].value;
//   let p=document.createElement("p");
//   p.textContent=input[3].value;

//   profile.appendChild(img);
//   card.appendChild(profile);

//   card.appendChild(h3);
//   card.appendChild(h5);
//   card.appendChild(p);

//   main.appendChild(card);
  
//  input.forEach(function(inp){
//   if(inp.type!=="submit"){
//     inp.value="";}
//   })
  
 
// });
// let abcd=document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//   abcd.style.backgroundColor="yellow";
// });
// abcd.addEventListener("mouseout",function(){
//   abcd.style.backgroundColor="red";
// });

// let abcd=document.querySelector("#abcd");
// window.addEventListener("mousemove",function(dets){
// abcd.style.top=`${dets.clientY}px`;
// abcd.style.left=`${dets.clientX}px`;

// });

// let form=document.querySelector("form");
// form.addEventListener("submit",function(dets){
//   dets.preventDefault();
// });


// jispe event aayaga agar uspr listener nahi hua to hamar event uske parent par listener dundega aur aisa krte krte upr ki trf move krega.

// let nav=document.querySelector("#nav");
// nav.addEventListener("click",function(dets){
//   alert("clicked");
// });


// let ul=document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//  dets.target.classList.toggle("lt");
// });

let input=document.querySelector("input");
let span=document.querySelector("span");
input.addEventListener("input",function(){
 let left=20-input.value.length;
 if(left<0){
    span.textContent=left;
    span.style.color="red";
 }
 else{
  span.textContent=left;
  span.style.color="black";
 }
});