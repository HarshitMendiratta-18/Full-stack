// //this keyword special keyword hai , kyuki jaise ki baaki saare keyword ki value ya unka nature same rhta hai this ki value ya nature badal jata hai is baat se ki aap usey kaha use karte ho

// //global scope 
// console.log(this);// global me this ki value window hoti hai. 

// //function scope
// function abcd(){
//   console.log(this);//function me this ki value window hoti hai .
// }
// abcd();

// //method scope: method-> aisa function jo object ke andar ho use method kahte hai .
// let obj={
//   name:"sachin",
//   sayname:function(){ // not arrow function vrna this ki value window ho jati hai, and method ke andar ke or function bana diya then also value loose ho jatit his ki,agr function banana hai to use arrow function, arrow function hamesha athis ki value parent fucntion se leta hai.
//     console.log(this);
//     console.log(this.name);
//   },
// };
// obj.sayname();//method me this ki value obj hoti hai.


// //event handler:
// document.querySelector("h1").addEventListener("click",function(){
//   console.log((this.style.color="red"));//event handler me this ki value event target hoti hai.
// });

// //class :
// class Person{
//   constructor(name,age){
//     console.log("hi");
//     this.a=12;// class ke andar this ki value blank object hoti hai jiske andar ham properties add karte hai.
//   }
// }
// let val=new Person();




// //call apply bind:
// //function ko call krte wkt aap set kr skte ho ki uski this ki value kya ho, iske liye call apply bind use hote hai.
// let obj1={
//   name:"sachin",
// };

// function abcd(a,b,c){
//   console.log(this,a,b,c);
// }
// abcd.call(obj1,1,2,3);//call me aap directly function ko call krte ho aur uske sath this ki value set kr dete ho.
// abcd.apply(obj1,[1,2,3]);//apply me aap function ko call krte ho aur uske sath this ki value set kr dete ho, but arguments array ke form me dena padta hai.
// abcd.bind(obj1,1,2,3)();//bind me aap function ko call nahi krte ho, but uske sath this ki value set kr dete ho, and bind function ko return krta hai, so aapko usko call krna padta hai.




//mini-project:

const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const roleInput = document.querySelector("#role");
const bioInput = document.querySelector("#bio");
const photoInput = document.querySelector("#photo");

const cards = document.querySelector("#cards");

const userManager = {

   users: [
  {
    name: "John Doe",
    role: "Frontend Developer",
    bio: "Loves building beautiful UIs and learning new technologies.",
    photo: "https://i.pravatar.cc/300?img=12"
  },
  {
    name: "Jane Smith",
    role: "Backend Engineer",
    bio: "Enjoys solving complex problems and optimizing APIs.",
    photo: "https://i.pravatar.cc/300?img=32"
  },
  {
    name: "Alex Lee",
    role: "UI/UX Designer",
    bio: "Passionate about user experience and clean design.",
    photo: "https://i.pravatar.cc/300?img=15"
  }
],

    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
        this.renderUi();
    },

    submitForm: function (e) {
        e.preventDefault();

        this.addUser();
        this.renderUi();
    },

    addUser: function () {

        this.users.push({
            name: nameInput.value,
            role: roleInput.value,
            bio: bioInput.value,
            photo: photoInput.value
        });

        form.reset();
    },

    renderUi: function () {

        cards.innerHTML = "";

        this.users.forEach((user, index) => {

            const card = document.createElement("div");

            card.className =
                "relative bg-[#252525] border border-zinc-700 rounded-2xl p-8 text-center transition hover:-translate-y-2";

            card.innerHTML = `
            
                <img
                    src="${user.photo}"
                    class="w-28 h-28 rounded-full object-cover border-[6px] border-zinc-600 mx-auto"
                >

                <h2 class="text-3xl font-bold mt-6">
                    ${user.name}
                </h2>

                <h4 class="text-zinc-300 text-lg mt-2">
                    ${user.role}
                </h4>

                <p class="text-zinc-400 mt-5 leading-7">
                    ${user.bio}
                </p>

                <button
                    class="deleteBtn mt-6 px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700"
                    data-index="${index}"
                >
                    Delete
                </button>

            `;

            cards.appendChild(card);

        });

        this.removeUser();
    },

    removeUser: function () {

        const deleteBtns = document.querySelectorAll(".deleteBtn");

        deleteBtns.forEach((btn) => {

            btn.addEventListener("click", (e) => {

                const index = e.target.dataset.index;

                this.users.splice(index, 1);

                this.renderUi();

            });

        });

    }

};

userManager.init();