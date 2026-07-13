//q1
let heading=document.querySelector("#heading");
heading.textContent="This is heading tag";

let lis=document.querySelectorAll("li");
lis.forEach(function(val){
  console.log(val.textContent);
});

let p=document.querySelector("p");
p.innerHTML="<b>This is paragraph tag</b>";

let a=document.querySelector("a");
a.href="https://www.google.com";

let ul=document.querySelector("ul");
ul.appendChild(document.createElement("li")).textContent="This is new li tag";
let pp= document.querySelectorAll("p");
pp.forEach(function(val){
  val.style.fontSize="18px";
})