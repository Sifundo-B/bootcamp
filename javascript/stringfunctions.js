let username= "Ace";
let message = "Welcome, ";
from = "";
text = "";

function sendmessage(){
    let message = "Welcome, " + username;
    console.log(message);
}
sendmessage();

console.log(message)
function showmessage(){
    username = "Steven";
    console.log(message,username)
}
showmessage();
console.log(message,username);

function sendmessage(from,text){
    from = "Annonymous, ";
    text = "Welcome to the scam learnership, send 500 ";
    return from + text;
}
console.log(sendmessage(from,text));


