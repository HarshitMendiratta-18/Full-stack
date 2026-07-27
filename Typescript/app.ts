//primitive types:
//data kw different types such as number,character,string,boolean,undefined,null,symbol,bigint
//ye sare data-types divided hai primitives and reference me.

// [],{},() ye honge to  refernce vrna primitive.
//primitive copy ho sakte hai but reference nhi copy ho skte.

let a=12;
let b="harshit";

//array:
let arr= [1,2,3,"harshit"];
//string or number ka array hai.

//tuples:
let arr1: [string,number]=["harshit",4];
//aisa array jiska type fix ho and kis location pe kya aayga woh fix ho to woh array tuple kahlata hai.

//Enums: enumeration 
enum UserRoles{
  ADMIN="admin",
  GUEST="guest",
  SUPER_ADMIN="superadmin"
}
UserRoles.GUEST;
//enums me ham kitni bhi properties and uski values add kr skte hai and usse use kar skte hai.

//any,unknown,void & more:
//type batana:
let x:number; //yha phle declarekr diya ki x ek number hai  and baad me agr usme string assign krdiya to error aayega.

let y;
//yha mane y ka type kuch define nahi kiya hhai toh iska type "ANY" hoga.any ke case me koi bhi type ka value assign kr skte hai. but unknown me aisa nhi hoga. unknown me phle type define krna hoga fir uske baad hi value assign kr skte hai.

let z:unknown;
z=9;
z="ayush";
if(typeof z==="string"){
  z.toUpperCase();
}
//void:aisa function jo kuch return na kare toh uska return type void hoga. void ka use mostly function me hota hai. void ka use variable me nhi hota hai.

function add():void{
  console.log("hello");
}

//null:aisa kli user jo database me nahi ho toh uska type null hoga , 
let a1:null=null;

//undefined:agr kisi variable ko vakue nahi denge toh undefined hoga woh.

//never:kabhi return nahi hoga
function abc():never{
  while(true){}
}
abc();
console.log("hello");//ye kabhi print nhi hoga kyuki function kabhi return nahi hoga.

//type inference:agr variable ka type define nhi kiya hoga toh typescript khud hi uska type infer kr lega. but agr variable ka type define kiya hoga toh wohi type hoga aur usme dusra type ka value assign nhi kr skte.
let a2="22";

//type annotation:agr variable ka type define karna hoga toh uske liye type annotation ka use krte hai. type annotation me variable ke baad : lagate hai aur uske baad type likhte hai.
let a3:number=99;

//interfaces:mtlb ek trh ki shakal
interface User{
  name:string,
  email:string,
  password:string
}
function GetUser(obj:User){
  obj.name;
}
GetUser({name:"Harsh",email:"hars@22.com",password:"hhhh"})  // ab jab bhi function chalana hoga to hame usme saari details dalni hogi name ,email,or password sab


//extending interfaces:
interface User1{
  name:string,
  email:string,
  password:string
}
interface Admin extends User1{
  admin:boolean;
}
function abcd(obj:Admin){
  obj.admin;
}
//two interfaces of same name are merged together and we can use them as one interface.

//type aliases: mtlb khud ka type banana
type value=string|number|null;
let a4:value;

//union and intersection types:
//intersection types:agr hame do alag alag types ko combine krna hoga to uske liye intersection type ka use krte hai. intersection type me dono types ke properties honge.


//classes and objects:
class Device{
  name="laptop";
  price=222222;
  category="electronics";
}
let d1=new Device();
let d2=new Device();

//constructor:
//ek aisi machine jo provide kare ke consumbale product use ham constructor kahte hai, aisa kuch jiske andr real data nhi hoga blki real data ka shape hoga.

class bottle{
  constructor(public name:string,public price:number){

  }
}
let b1=new bottle("coke",22);//class jab bhi run ho sbse phle constructor chalega.

//this ka clearly mtlb hai class ke andar kisi method me aa pay.
class Abcd{
  name="Adit";
  changeName(){
    this.name="Ayush";
  }
  changeName1(){
    console.log(this.name);
  }
}//this ka use mostly class ke andar hi hota hai. class ke bahar this ka use nhi hota hai.


//access modifiers:public,private,protected

class BottleMaker{
  constructor(public name:string){
    this.name=name;//public ka mtlb hai ki ye property class ke bahar bhi access ho skti hai.
  }
  changing(){
    this.name="pepsi";
  }
}
let b2=new BottleMaker("coke");

class BottleMaker1{
  protected name="milton";
}
class MetalBottleMaker extends BottleMaker1{
  public material="metal";
}
let b3=new MetalBottleMaker();
//private ka mtlb hai ki ye property class ke bahar access nhi ho skti hai. and protected ka mtlb hai ki ye property class ke bahar access nhi ho skti hai but agr kisi class me extend kiya hoga to usme access ho skti hai.

class users{
  constructor(public readonly name:string){}
  changing(){
    this.name="ayush";
  }
}
let u1=new users("harshit");//readonly ka mtlb hai ki ye property class ke bahar access ho skti hai but usme value change nhi ho skti hai. readonly ka use mostly class ke andar hi hota hai. class ke bahar readonly ka use nhi hota hai.


//parameter properties:agr hame class ke andar kisi property ko define karna hoga to uske liye parameter properties ka use krte hai. parameter properties me hame constructor me hi property ko define krna hota hai. parameter properties me hame access modifier ka use krna hota hai. access modifier me public,private,protected ka use kr skte hai.

//getters and setters:
//class ke andar ek aisa method jo value nikal ke de usse getter kahte hai and ek aisa method jo tumse value le and class ke andar ki value change kr de usse setter kahte hai.
class Userr{
  constructor(public _name:string,public age:number){}
  get name(){
    return this._name;
  }
 
}
let u2=new Userr("harshit",22);


//static members:
class Hero{
  static heroName="superman";
}//bina new kiye bhi class ke andar ki property ko access kr skte hai. isliye static ka use krte hai. static ka use mostly class ke andar hi hota hai. class ke bahar static ka use nhi hota hai.


//Abstract class:
//abstract means chupa hua
abstract class Vehicle{
  constructor(protected amount:number){}
  isPaymentValid(amount:number){
    return this.amount>0;
  }
}



//Functions:
function login(name:string,age:number,cb:(arg:string)=>void){
  cb("Hey");
}
login("harsh",23,(arg:string)=>{
  console.log("login");
})
//optional parameter: ?: lagake use kiya jata hai.

//rest parameter:
// ... yew three dots ka mtlb hai ya to rest operator ya to spread operator.

function sum(...arr:number[]){
  console.log(arr);
}
sum(1,2,3,4,5,6,7,8,9);
//array ke bhut sare elemnts hame agr use karne hai to ham rest operator lagatae hai .
//spread operator woh hota hai jab hame array given hota and hame uski copy banani pade tab ham spread operator ka use krte hai. 

//function overloading:
//function overloading ka mtlb hai ki ek hi function ke multiple signatures ho skte hai. function overloading me hame function ke name same rakhna hota hai but uske parameters alag hone chahiye. function overloading me hame function ke return type same rakhna hota hai.


function one(a:string):void;
function one(a:string,b:number):number;

//generics:
//hum ek function ko use karte wkt bata skte hai ki function argument ko kis type se treat kare.
//yha hum template ka use krte hai
function identit<H>(a:H,b:string,c:number){}
identit<string>("harshit","hello",22);

//modules :export from one file and import in another file. modules ka use mostly code ko organize krne ke liye kiya jata hai. modules ka use mostly code ko reuse krne ke liye kiya jata hai. modules ka use mostly code ko share krne ke liye kiya jata hai.


//type assertion:agr hame kisi variable ka type change krna hoga to uske liye type assertion ka use krte hai. type assertion me hame variable ke baad as lagate hai aur uske baad type likhte hai. type assertion me hame variable ke baad <type> lagate hai aur uske baad variable ka naam likhte hai. type assertion me hame variable ke baad as lagate hai aur uske baad type likhte hai. type assertion me hame variable ke baad <type> lagate hai aur uske baad variable ka naam likhte hai.
let a5:any="harshit";


//type guards:agr hame kisi variable ka type check krna hoga to uske liye type guards ka use krte hai. 
