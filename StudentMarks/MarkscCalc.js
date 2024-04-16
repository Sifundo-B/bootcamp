const prompt = require('prompt-sync')();
var FirstName=''
var Mark1=0;
var Mark2 = 0;
var Mark3 =0;
let sum =0;
let average=0;
var Status = '';
let NumStudents = 0;
NumStudents = parseInt(prompt('Enter the number of students you using'));
for (let i =0; i<NumStudents; i++ )
{
FirstName = prompt('Enter your name :');

 Mark1 = parseFloat(prompt('Enter the first mark '));

 Mark2 = parseFloat(prompt('Enter the second mark '));

 Mark3 = parseFloat(prompt('Enter the third mark '));

sum = Mark1 + Mark2 + Mark3;

average=sum / 3;

if(average<50 && average>=0){
    Status = 'Fail';
}
else if(average >=50 && average <75){
   Status = 'Pass';
}
else if(average >=75 && average <= 100){
    Status = 'Pass with Distinction';
}
else if(average>100){
    Status ='Check your inputs';
}
else {
   Status= 'Enter positive numbers only..';
}
console.log(`Your total mark is ${average}, ${Status}`);
}