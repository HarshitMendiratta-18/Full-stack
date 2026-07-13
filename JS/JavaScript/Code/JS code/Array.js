//array is list of items that can store multiple values in one place.
// let arr=[1,2,3,4];
// let marks=[10,40,52,37,92];
// let runs = new Array(2,3,4,56,6); // a way of creating array
// arr[2]=12;


let arr=[1,2,3,4,5];
arr.push(7000); //push me value dalti hai
arr.pop();//pop last value ko remove karta hai
arr.shift(); //shift first value ko remove karta hai
arr.unshift(0); //unshift first value me dalta hai
arr.splice(2,1);// (index, number of elements to remove) ye index se start karke kitne elements remove karne hai
let newArr=arr.slice(1,4); // ye index 1 se start karke index 4 tak ke elements ko copy karke new array me dalta hai

//slice and splice me diff ye hota hai ki slice me original array change nahi hota hai aur splice me original array change ho jata hai

let arr1=[12,23,2,10,56];
arr1.reverse();
arr1.sort(function(a,b){
  return a-b; // ye ascending order me sort karta hai or b-a descending order me sort karta hai
})


let arr2=[12,23,45,66,78];
arr2.forEach(function(val){
  console.log(val+5);
})

//map sirf tab use krna hai jab hume ek naya array banana hai pichle array ke data ke basis pe
//map dekhte hi man me ek blank array bna lena chaiye
//jab  bhi aapko aisa koi case dikh jaye jaha par array se naya array banega and wo naya array kuch vaalues ko rakhega tab map lagega 

let newarr=arr2.map(function(val){
  if(val>40) return val;
})


let arr3=[12,23,45,66,78];
let na=arr3.filter(function(val){
  if(val>23){
    return true;
  }
})

let arr4=[1,2,3,4,1,5,6,7,8,9];
let ans=arr4.reduce(function(accumulator,val){
  return accumulator+val;
},0);

let va=arr4.find(function(val){
  return val===1;
})

let arr5=[10,30,50,70,90];
let any=arr5.some(function(val){
  return val>50;
})


let a=arr5.every(function(val){
  return val>9;
})



//destructuring and spread opeartor
let arr6=[1,2,3,4,5,6];
let [x,y, ,z]=arr6; //destructuring array me hum array ke elements ko alag alag variables me assign kar sakte hai
let newar=[...arr6];
