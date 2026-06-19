//Number knock game
// let computerNumber=6;
// let guess;
// while(guess!==computerNumber){
//   guess=Number(prompt("Guess the number:"));
// if(isNaN(guess)){
//   alert("Please enter a valid number");
// }else if (guess<computerNumber){
//   alert("Number is low,please try again later");
// }else if(guess>computerNumber){
//   alert("Number is high,please try again later")
// }else{
//   alert("Congratulations! You guessed the number correctly.");
// }
// }


//Password checker:
// let password="alpha";
// let noOfAttempts=0;
// let userPassword=null;
// while(password!==userPassword && noOfAttempts<3){
//   userPassword=prompt("Enter the password:");
//   noOfAttempts++;
//   if(password===userPassword){
//     alert("Password is correct");
//   }else if (noOfAttempts>=3){
//     alert("Sorry,your attempts are over, please try again later");
//   }
//   else{
//     alert("Password is incorrect, please try again");
//   }
// }


//story game:
let playAgain='yes';
while(playAgain==='yes'){
  
alert("You wake up in a dark forest...");
let userChoice=prompt("Do you want to go left or right? ");
if(userChoice=='left'){
  alert("You walk into a swamp...,You see something shiny in the mud!");
  userChoice=prompt("Do you want to pick it up? (yes/no)");
  if(userChoice==='yes'){
    alert("it is a magical stone! you are teleported to safety,you win!");
  }else{
    alert("You die in the swamp,Game over!");
  }
}
else{
  alert("you find a cave");
  userChoice=prompt("Do you want to enter the cave? (yes/no)");
  if(userChoice==='yes'){
    alert("You find a treasure chest! You win!");
  }else{
    alert("You are attacked by a bear,Game over!");
  }
}

userChoice=prompt("Do you want to play again? (yes/no)");
if(userChoice==='no'){
  playAgain='no';
  alert("Thanks for playing!")
}
}