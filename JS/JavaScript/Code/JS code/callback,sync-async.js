//koi bhi code js mein line by line chalega aur ye natural pattern bhi hota hai ki code line by line chale but kabhi kabaar aise cases aate hai life mein jaha par aapka code wait krta hai aur aapka code wait krta hai and utni der mein agla code chal jata hai.

//aisa code jo line by line chale woh sync code hota hai and jo code chalne ke liye ready ho jaaye and jab chale woh hai async code hai.


// function runafterSometime(val){
//   setTimeout(()=>{
//     console.log(val)
//   },3000);
// }
// runafterSometime(22);



// function kuchderbaadchal(fnc){
//   setTimeout(fnc,Math.floor(Math.random()*20)*1000);
// }
// kuchderbaadchal(function(){
//   console.log("Hello");
// })//example of callback:ek function ko ek or function bhej de rhe ho paramtere mein to wo parameter vala function kahlata hai callback.


// function profilelekaraao(username,cb){
//   setTimeout(()=>{
//     cb({ username ,age:26,email:"har@.com"});
//   },2000);
// }
// function savedPostNikalo(id,cb){

// }
// profilelekaraao("sachin",function(data){
//   saarePostlekaraao(data._id,function(posts){
//     savedPostNikalo(data._id,function(saved){
//       //...
//     })
//   });
// });


//promises: aap ek promise banate ho jo ki do states mein se ek state me jaa skta hai and wo yaa to resolve hota hoga ya to reject hoga ab wo kya hoga ye to waqt batayga par hume dono ke liye code likhna padta hai .

//Promsie ek asynchronous code hota hai jo ki resolve ya reject hone ke baad hi chalega.

// let pr= new Promise(function(res,rej){
//   setTimeout(()=>{
//     let rn=Math.floor(Math.random()*10);
//     if(rn>5){
//       res("Resolved with:"+rn);
//     } else rej("Rejcted with:"+rn);
//   },3000)
// });
// pr.then(function(val){
// console.log(val);
// })//resolve hone pe then chalta hai
// .catch(function(val){
// console.log(val);
// })//reject hone pe reject chalta hai



//async wait:jyada cleaner way of handling promises is async wait. async wait ka use karne ke liye aapko function ke aage async lagana padta hai aur await ka use karne ke liye aapko await lagana padta hai.

let pr= new Promise(function(res,rej){
  setTimeout(()=>{
    let rn=Math.floor(Math.random()*10);
    if(rn>5){
      res("Resolved with:"+rn);
    } else rej("Rejcted with:"+rn);
  },1000)
});
async function abcd(){
  try{
  let val=await pr;
  console.log(val);
  }catch(err){
    console.log(err);
  }
}
abcd();