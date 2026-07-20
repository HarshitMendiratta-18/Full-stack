
  // dets.preventDefault();
  // if(nm.value.length<=2){
  //   document.querySelector("#hide").style.dsiplay="initial";
  // }
  // else{
  //   document.querySelector("#hide").style.display="none";
  //}
  //regex code is basically the code for pattern 



  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
  dets.preventDefault();
  document.querySelector("#emailError").textContent="";
  document.querySelector("#passwordError").textContent="";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans=emailRegex.test(email.value);
  let passwordans=passwordRegex.test(password.value);
  let isValid=true;
  if(!emailans){
    document.querySelector("#emailError").textContent="Email is incorrect";
    document.querySelector("#emailError").style.display="initial";
    isValid=false;
  }
  if(!passwordans){
    document.querySelector("#passwordError").textContent="Password is incorrect";
    document.querySelector("#passwordError").style.display="initial";
    isValid=false;

  }
  
});
