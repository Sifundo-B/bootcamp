//Simple calculator using js and switch case

//We need this library model to accept user input
const prompt = require('prompt-sync')();

let results;
//acceot the operator input
const operator = prompt('enter operator (either +, -, *, or /):  ');

//accept an operator input
const num1 = parseFloat(prompt('Enter the first number '));
const num2 = parseFloat(prompt('Enter the next number '));

switch(operator){
    //formular for addition
    case '+':
        results= num1 + num2;
        console.log(`${num1} + ${num2} = ${results}`);
        break;

    //formular for substraction
    case '-':
        results= num1 - num2;
        console.log(`${num1} - ${num2} = ${results}`);
        break;

    //formular for multiplication    
    case '*':
        results= num1 * num2;
        console.log(`${num1} * ${num2} = ${results}`);
        break;

    //formular for division
    case '/':
        results= num1 / num2;
        console.log(`${num1} / ${num2} = ${results}`);
        break;

}