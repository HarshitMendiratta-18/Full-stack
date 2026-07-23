//module pattern
//module pattern ek design pattern hai jisme ham apna code ek self executing function (IIFE) ke andar likhte hai , taki variables aur functions private rahen.
//iske andar se hum sirf whi cheeze return karte hai jo bahar use krni hai.
//is pattern ka mian fayda hai data hiding(encapsulation)aur clean structure , taaki code secure , reusable aur managebale ban sake.


//IIFE:Immediately invoke function expression.
//iife ke andar hi ham function access karte hai aur uske andar ke variables aur functions ko bahar access nahi kar sakte and hame iife ke andar ek obejct specify karna hota hai taki ham uske andar ke functions aur variables ko bahar access kar sake.

let fnc=(function(){
  return 12;
})();
//revealing module pattern me ham kuch modification karke ham apne module ke andar ke functions aur variable ko bahar access kar skte hai.


//factory function pattern:
//ek fucntion banate hai jo objects create karta hai (fcatory=object banane ki machine)

//factory function ek aisa design pattern hai jisme hum ek simple function likhte hain jo naye objects bankar return karta hai , bina class ya new keyword use kiye.
//is pattern ka main idea hai -> object creation ko ek function ke through control karna .
//har baar jab tm factory function call karte ho , tumhe ek naya object milta hai jisme apne methods aur (agar chaho to) private data ho skata hai.

//yeh pattern specially useful hai jab tumhe ke hi type ke bhut saare objects chaiye jaise uswers , prodcuts, tasks etc.


function factory(name,price){
  let stock=10;
  return {
    name,
    price,
    checkStock(){
      console.log(stock);
    },
    buy(qty){
      if(qty<=stock){
        stock-=qty;
        console.log(` ${qty} pieces booked : ${stock} pieces left`);
      }
      else{
        console.error(`Sorry, only ${stock} pieces left`);
      }
    },
    refill(qty){
      stock+=qty;
      connsole.log(`Refilled the stock -${stock} pieces now`);
    }
  }
};
let f1=factory("laptop",1000);
f1.buy(2);





//Observer pattern:
class YoutubeChannel{
  constructor(){
    this.subscribers=[];
  }
  subscribe(user){
    this.subscribers.push(user);
    user.update(`${user.name} You have subscribed to the channel`);
  }
  unsubscribe(user){
     this.subscribers=this.subscribers.filter(sub=>sub!==user);
    user.update(`You have unsubscribed to the channel`);
  }
  notify(message){
    this.subscribers.forEach(sub=>sub.update(message));
  }
}
class User{
  constructor(name){
    this.name=name;
  }
  update(data){
    console.log(`${this.name} received notification: ${data}`);
  }
}

let Codex=new YoutubeChannel();
let user1=new User("John");
let user2=new User("Jane");
Codex.subscribe(user1);
Codex.subscribe(user2);
Codex.notify("New video uploaded");



//Performance optimization :
//debouncing->aap koi action kar rhe ho and aap ye nahi chteb har action pe kuch ho , jab mere actions ke beech mein ki specific gap aa jaye to fir action ya reaction perform ho.
function debounce(fnc, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(function () {
            fnc(...args);
        }, delay);
    };
}

document.querySelector("input").addEventListener(
    "input",
    debounce(function () {
        console.log("hey");
    }, 1000)
);

//throttling->aap koi action kar rhe ho and aap ye nahi chteb har action pe kuch ho , jab mere actions ke beech mein ki specific gap aa jaye to fir action ya reaction perform ho.
function throttle(fnc, delay) {
    let lastCall = 0;

    return function (...args) {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fnc(...args);
        }
    };
}

document.querySelector("input").addEventListener(
    "input",
    throttle(function () {
        console.log("hey");
    }, 1000)
);

//lazy loading:
//intersection observer: 
let imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const img = entry.target;

                img.src = img.dataset.src;

                img.onload = function () {
                    img.classList.add("loaded");
                };

                observer.unobserve(img);

            }

        });

    },

    {
        root: null,
        threshold: 0.1,
    }

);

imgs.forEach(function (img) {
    observer.observe(img);
});