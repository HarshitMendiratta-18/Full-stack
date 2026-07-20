//localStorgae: aapke browser ke andar ek storage hota hai jisme aap data ko store kar sakte ho. Ye data tab tak store rehta hai jab tak aap manually delete na kare ya browser ke cache clear na kare.

//sessionStorage: ye bhi localStorage ki tarah hi hota hai lekin ye data tab tak store rehta hai jab tak aapka browser session chal raha hota hai. Jaise hi aap browser ko close karte ho ye data delete ho jata hai.

//cookies: ye bhi data ko store karne ka ek tarika hai lekin ye data server ke sath bhi share hota hai. Cookies ka size limit hota hai aur ye data ko tab tak store karte hai jab tak aap manually delete na kare ya cookies ke expiry date na aa jaye.


localStorage.setItem("name", "Harshit");//save or store
let name=localStorage.getItem("name");//get or retrieve
localStorage.removeItem("name");//remove
localStorage.setItem("name", "Ayush");//overwrite

//sessionStorage bhi similar syntx me hota

//localStorage me array store nahi kar sakte ho directly. Aapko array ko string me convert karna padega using JSON.stringify() aur retrieve karne ke liye JSON.parse() ka use karna padega.

