let prompt = require('prompt-sync')();
// Write a program to check if the user is old enough to access the site
function checkAge(age){
    if(age>=18){
        return true;
    }
    else{
        return console.log("Failed Access...");
    }
}
    let age= prompt("How old are you? ",18);

    if(checkAge(age)){
        console.log("Access is granted");
        showMovie();
    }
    else{
        console.log("Access is denied...");
    }


    function showMovie(){
        // while loop test

        // while((checkAge(age))){           
        //     console.log('Movie playing');
        //     break;
        // }

        // for loop test
        let d = 20; //duration 
        let i =0; // counter
        for(i =50; i>=d; i--){
            console.log("Access granted");
            console.log("Movie Playing", i);
        }
    }