var greetings ="Hello FS Cohort";
const times = 5.1;
// block scope 
if (times  > 5 && times == 5) {
     greetings= "Hi there instead";
    console.log(greetings );
}
else{
    console.log(greetings+ ' The value is false');
}
var hello = "welcome note";
 if (times == 5 || times > 5) {
    hello = 'Welcome to JavaScript'
    console.log(greetings + " : " + hello );
}
// end of block scope
else{
    console.log(hello + "  value is true")
}

if (times!=5) {
    console.log(greetings + " tiredness");
} else {
 console.log("I knew it!!")   
}