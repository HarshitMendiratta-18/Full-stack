//hume sikhna hai oops me factories banana , mtlb ki aap ek baar blueprint bana do ki hjar objetc kaisa dikhega and hum log naye naye objetcs with different values bana payenge , yahi upar upar se poora kam hai oops me 
function CreatePencil(name,price,color){
  this.name = name;
  this.price = price;
  this.color = color;
 

  this.write=function(text){
    let h1=document.createElement("h1");
    h1.textContent=text;
    h1.style.color=color;
    document.body.append(h1);
  };
}
CreatePencil.prototype.company="Natraj"; 
let pencil1=new CreatePencil("Natraj",10,"yellow");
let pencil2=new CreatePencil("Apsara",15,"red");

//agar hamara constructor function koi field apne prorotype pr attach krle toh us constructor se banne vale sabhi new instances yaani ki objects ke paas wo filed automatically chali jaati hai.



//classes:
class CreatePen{
  constructor(name,company,price,color){
    this.name=name;
    this.company=company;
    this.price=price;
    this.color=color;
  }
  erase(){
    document.body.querySelector("h1").forEach((elem)=>{
      if(elem.style.color===this.color){
        elem.remove();
      }
    });
  }
  write(text){
    let h1=document.createElement("h1");
    h1.textContent=text;
    h1.style.color=this.color;
    document.body.append(h1);
  }
}

let pen1=new CreatePen("Natraj","Natraj",10,"green");
let pen2=new CreatePen("Apsara","Apsara",15,"blue");



//prototypal vs classical inheritance:
//classical inheritance : classes banana and unhe extend karna like parent se chize extract krna .

//prototypal inheritance : sirf js me hoti hai, object dusre object se inherit karta hai.
let coffee={
  color:"black",
  drink:function(){
    console.log("drinking coffee");
  }
}

let coffee2=Object.create(coffee);
coffee2.taste="bitter";
coffee2.drink();//inherit kiya coffee ka drink method