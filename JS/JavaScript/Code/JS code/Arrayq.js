//q1
let fruits=['apple','banana','grapes'];
console.log(fruits[1]);
//q2
fruits.push('mango');
fruits.unshift('pineapple');
console.log(fruits);
//q3
fruits[2]="kiwi";
console.log(fruits);

//q4
let numbers=[1,2,3,4];
numbers.pop();

//q5
let colors=["Green","Yellow"];
colors.splice(1,0,"Red","Blue");
console.log(colors);

//q6
let items=[1,2,3,4,5,6];
let newitems=items.slice(1,4);

//q7
let names=["Zara","Arjun","Mira","Bhavya"];
console.log(names.sort());
console.log(names.reverse());

//q8
let arr=[1,2,3,4];
let newarr=arr.map(function(val){
  return val*val;
})

//q9
let arr1=[5,12,8,20,3];
let filarr=arr1.filter(function(val){
  return val>10;
})

//q10
let arr2=[10,20,30];
let sumarr=arr2.reduce(function(accumulator,val){
  return accumulator+val;
},0);

//q11
let arr3=[12,15,3,8,20];
let findarr=arr3.find(function(val){
  return val<10;
})

//q12
let arr4=[45,60,28,90];
let somearr=arr4.some(function(val){
  return val<35;
})

//q13
let arr5=[2,4,6,8];
let ans=arr5.every(function(val){
  return val%2===0;
});

//q14
let fullname=["John","Doe"];
let [firstname,lastname]=fullname;
//q15
let a=[1,2];
let b=[3,4];
let c=[...a,...b];