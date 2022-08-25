/*  guessing between 1 to 100  with 5 guesses 
make sure we have button to submit there guess
out put if they win or loose or have already used a number
game will tell if the number is bigger or smaller
*/

// geting the input
const inputNum = document.querySelector('input');

//pulling in submut button
const submit = document.querySelector('.submit');

const h1Header = document.querySelector('.guessNumber');

//asigning input value

//gen random number


    //comparing ran to input   
 
   


 function compareRanNum() {
    let randomNum = 1 + Math.floor(Math.random() * 100);
    
    let userValue = inputNum.value;
    let distanceBetween = Math.abs(randomNum - userValue);
    console.log(userValue);
    console.log(randomNum);
    console.log(distanceBetween);
    if(userValue == randomNum){
    h1Header.innerText = "You did it!";
    return h1Header;
    }else{
        if(distanceBetween <= 10){
        h1Header.innerText = "Getting Hotter!"
        }else if(distanceBetween <= 25){
        h1Header.innerText = "Getting Warmer!"
        }
        else if(distanceBetween < 50){
            h1Header.innerText = "Getting Colder!"
            }
    }

   
    // console.log(distanceBetween);
    // console.log(randomNum);
    
}


submit.addEventListener('click', compareRanNum);




