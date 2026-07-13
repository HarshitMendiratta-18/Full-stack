let obj={
  name:"Harshit",
  age:26,
  pass:true //key value pair me key string me bhi ho sakta hai aur number me bhi ho sakta hai aur boolean me bhi ho sakta hai
}

const user={
  name:"Harshit",
  address:{
    city:"Delhi",
    pin:456001,
    location:{
      lat:23.2, //nesting of object
      long:45.8
    }
  }
}

let{lat,long}=user.address.location; //destructuring of object


for(let key in obj){
  console.log(key,obj[key]);
}
console.log(Object.keys(obj)); //ye object ke sare keys ko array me return karta hai
console.log(Object.entries(obj)); //ye object ke sare key value pairs ko array me return karta hai

let obj2={...obj};

let obj3=Object.assign({},obj); //ye bhi ek naya object banata hai jo obj ke sare key value pairs ko copy kar leta hai

//deep clone:
let user1={
  name:"Harshit",
  address:{
    city:"Delhi",
    pin:456001,
    location:{
      lat:23.2, //nesting of object
      long:45.8
    }
  }
}
let obj4=JSON.parse(JSON.stringify(user1));
console.log(obj4);


//optional chaining:
console.log(obj4?.address?.city);


//q1
let ob1={
  name:"Harshit",
  age:26,
  isEnrolled:true
}

//q2
const user2={
  "first-name":"Mohit",
};
user2["first-name"];

//q3
let key="age";
const user3={
  age:25,
};
user3[key];