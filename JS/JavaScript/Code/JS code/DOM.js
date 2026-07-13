//DOM:Document object model
//dom=body part in html
//dom manipulation: html se elemnst selct krna , text badalna, html badalna, css badalna, attribute,event listeners add krna

// agr id hai to getElementById use karna hai and agr class hai to getElementByClassName use karna hai and agr tag name hai to getElementByTagName use karna hai
console.dir(document.querySelector("h1")); //dir krne se woh tag form me aayga 


console.dir(document.querySelectorAll("h1"));

let h1 =document.querySelector("h1");
h1.textContent="Hello World"; //text content se text change hoga 
h1.innerHTML="<i>Hi</i>"; //innerHTML se html change hoga

//attribute woh hota hai jo tag ke alawa likha hota hai html me
let a=document.querySelector("a");
console.log(a.setAttribute("href","https://www.google.com")); //setAttribute se attribute change hoga
console.log(a.getAttribute("href")); //getAttribute se attribute ka value milega
a.removeAttribute("href"); //removeAttribute se attribute remove hoga

let h2=document.createElement("h2");
h2.textContent="This is h2 tag";
document.body.appendChild(h2); //appendChild se h2 tag body me add hoga, append mltb baad me prepend mtlb phle add krna 

//js se css badalna 
h1.style.color="green";
h1.style.backgroundColor="yellow";
h1.style.fontFamily="cursive";
h1.style.textTransform="uppercase";
h1.classList.add("abcd");
//remove krne ke liye classList.remove("class name") use karna hai and toggle krne ke liye classList.toggle("class name") use karna hai toggle agr class lgi hui to remove kr dega and agr class nahi lagi hui to add kr dega
