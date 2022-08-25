/*  guessing between 1 to 100  with 5 guesses 
make sure we have button to submit there guess
out put if they win or loose or have already used a number
game will tell if the number is bigger or smaller
*/

// geting the input
const inputNum = document.querySelector('input');
inputNum.append(submit);
//pulling in submut button
const submit = document.querySelector('.submit');

const h1Header = document.querySelector('.guessNumber');

//asigning input value
const userValue = inputNum.value;
//gen random number
const randomNum = Math.floor(Math.random() * userValue);
console.log(userValue);

 //comparing ran to input   
function compareRanNum () {
   
    
    if(randomNum == userValue){

console.log("You won!");

}else {

    console.log ("your wrong")
}
}

submit.addEventListener('click', compareRanNum);




