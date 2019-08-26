// Code your solutions in this file
function writeCards(namesArray, event){

const thankYouCards = [];


  for (let i = 0; i < namesArray.length; i++) {
  thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  
  
return thankYouCards;
}



writeCards(["Lisa", "Kaitlin", "Jan"], thankYouCards);


<<<<<<< HEAD
function countdown(countdown) {
  while (countdown > 0) {
    console.log(countdown);
    countdown -= 1 
  }
  console.log (countdown);
  
  
=======
function countdown() {
  for (let i = 0; i < 10; i--) {
    console.log(i);
  }
>>>>>>> 7e07676a93854ed220cf744a4bac50b4fac21a35
  
  
}















