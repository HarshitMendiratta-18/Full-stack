let users = [
  {
    name: "Ananya Gupta",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    bio: "making memories one sunset at a time 🌅"
  },
  {
    name: "Rohan Verma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    bio: "coffee ☕ | travel ✈️ | photography 📷"
  },
  {
    name: "Sneha Malhotra",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
    bio: "kind heart. sharp mind. brave soul 🤍"
  },
  {
    name: "Kabir Singh",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    bio: "building my future one day at a time 🚀"
  },
  {
    name: "Mehak Arora",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    bio: "music 🎵 | coding 💻 | chai ❤️"
  },
  {
    name: "Yash Khanna",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500",
    bio: "less talking, more doing ⚡"
  }
];

function showUsers(arr){
  arr.forEach(function(user){
    const card = document.createElement("div");
card.classList.add("card");

// Image
const img = document.createElement("img");
img.src =user.pic;
img.classList.add("bg-img");

// Blurred Layer
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = `url(${user.pic})`;
blurredLayer.classList.add("blurred-layer");

// Content
const content = document.createElement("div");
content.classList.add("content");

// Heading
const heading = document.createElement("h3");
heading.textContent = user.name;

// Paragraph
const paragraph = document.createElement("p");
paragraph.textContent =user.bio;

// Append elements
content.appendChild(heading);
content.appendChild(paragraph);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Add to the page

document.querySelector(".cards").appendChild(card);
// or document.querySelector(".flex.gap-10").appendChild(card);
  })
}
showUsers(users);
let inp=document.querySelector(".inp");
inp.addEventListener("input",function(){
  let newUsers=users.filter((user)=>{
     return user.name.toLowerCase().includes(inp.value.toLowerCase());
  });

  document.querySelector(".cards").innerHTML="";
  showUsers(newUsers);
});