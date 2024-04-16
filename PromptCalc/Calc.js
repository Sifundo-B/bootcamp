const prompt = require('prompt-sync')();
const number1 = parseInt(prompt('Enter the first number '));
const number2 = parseInt(prompt('Enter the second number '));
const operator = prompt('Enter on of these operators +, -, *, /, % : ');
let results =0;

switch(operator){
    case ('+'):
        results = number1 + number2;
        console.log(`${number1} + ${number2} = ${results}`)
        break;
        case ('-'):
        results = number1 - number2;
        console.log(`${number1} - ${number2} = ${results}`)
        break;
        case ('*'):
        results = number1 * number2;
        console.log(`${number1} * ${number2} = ${results}`)
        break;
        case ('/'):
            results = number1 / number2;
            if(results=="Infinity" || isNaN){
                console.log("Invalid input");
                break;
            }
            console.log(`${number1} / ${number2} = ${results}`)
            break;
        case ('%'):
            results= number1 % number2;
            console.log(`The remainder when dividing the two number is ${number1} % ${number2} = ${results}`) 
            break;
            default:
            console.log("Invalid input");
}
