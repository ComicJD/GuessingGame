/*  guessing between 1 to 100  with 5 guesses 
make sure we have button to submit there guess
out put if they win or loose or have already used a number
game will tell if the number is bigger or smaller
*/

// geting the input
const inputNum = document.querySelector('input');

//pulling in submut button
const submit = document.querySelector('.submit');
submit.append(inputNum);
const h1Header = document.querySelector('.guessNumber');

//asigning input value

//gen random number
const userValue = inputNum.value;

const randomNum = Math.floor(Math.random() * userValue);
 //comparing ran to input   
const distanceBetween = 100 - randomNum;

 function compareRanNum () {
   
    
    if(randomNum === randomNum){

console.log("You won!");

}
else if (randomNum > randomNum) {
    
    
}
}

submit.addEventListener('click', compareRanNum);




