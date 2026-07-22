//api ke url hota hai jaha jaane pe hame data milta hai. API ki full form hoti hai Application Programming Interface. Ye ek aisa interface hai jisse do applications ek dusre ke sath communicate karte hai. Fetch API ka use karke hum easily data ko fetch kar sakte hai.
//json format:javascript object notation. Ye ek lightweight data interchange format hai jo human readable hota hai aur easily parse kiya ja sakta hai. Ye primarily data ko transmit karne ke liye use hota hai. Ye text format me hota hai aur programming languages me easily convert kiya ja sakta hai.

// fetch("https://randomuser.me/api/?results=7")
// .then((rawdata)=>{
//  return rawdata.json();
// })
// .then((data)=>{
//   console.log(data.results);
// })
// .catch((err)=>{
//   console.log(err);
// });



//mini-project:
fetch("https://randomuser.me/api/?results=3")
  .then((raw) => raw.json())
  .then((data) => {

    const container = document.querySelector("#cards");
    container.innerHTML = "";

    data.results.forEach((user) => {

      // Card
      const card = document.createElement("div");
      card.className =
        "w-[320px] bg-[#1E293B] rounded-lg p-5 flex items-center gap-4 shadow-lg hover:scale-105 transition-all duration-300";

      // Image
      const img = document.createElement("img");
      img.src = user.picture.large;
      img.alt = user.name.first;
      img.className =
        "w-14 h-14 rounded-full border-2 border-zinc-500 object-cover";

      // Content
      const content = document.createElement("div");

      // Name
      const name = document.createElement("h2");
      name.textContent = `${user.name.first} ${user.name.last}`;
      name.className = "text-white text-xl font-bold";

      // Email
      const email = document.createElement("p");
      email.textContent = user.email;
      email.className = "text-gray-400 text-sm";

      // Status
      const status = document.createElement("span");
      status.textContent = "Active";
      status.className =
        "inline-block mt-3 bg-blue-600 px-3 py-1 rounded-full text-[11px] text-white";

      content.appendChild(name);
      content.appendChild(email);
      content.appendChild(status);

      card.appendChild(img);
      card.appendChild(content);

      container.appendChild(card);
    });
  });
