 const gpa = 7;
//const pass_mark = 60;
const exp = 70;
const dist=85;
const avg = 50;
const fail = 49;
const dnw = 0;
 if (gpa >=avg &&  gpa<exp ) {
    console.log("you are an average ")
 }
 else if(gpa<=fail && gpa!=dnw){
console.log("You failed");
 }
 else if(gpa>=exp && gpa <dist){
console.log("You have passed with an exemption ")
 }
 else if(gpa>=dist){
    console.log("You Passed with Distinction ");
 }
 else{
console.log("you did not write ");
 }