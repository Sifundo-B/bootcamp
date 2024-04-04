//Works with true or false
//Let create a solution that calculates positive numbers only
//If a user enters a negative number that number is skipped
let prompt = require('prompt-sync')();

//Negative numbers -> loop must terminate
//Non numeric characters -> skip iteration

let sum =0;
let num1 =0.1;
while(num1 >0){
    sum+=num1;

    //accept input from user
    num1=parseInt(prompt('Enter a Number: '));

    //Continue condition NaN = not a number
    if(isNaN(num1)){
         console.log("You must enter a positive number");
         num1=0;
         continue;
        }
    }
    console.log(`The sum is ${sum}`);
    