//This where the object begins
const Person = {
    //data property
    //Key       Value
    firstName: 'Sifundo',

    //Accessor property (gettter)
    get getName(){
        return this.firstName;
    },

    set changeNames(newName){ // A parameter for re-assigning or mapping new values
        this.firstName = newName;
    }
}

//This part for the get method whis for readonly
    console.log(Person.getName); //This is just an object
    console.log(Person.firstName); //This is called accessing the data property
    console.log(Person.getName); //This is called accessing using the getter method
// This is the end of the object
//end of get method



// Set method starts
Person.changeNames= "Sondiya";
console.log(Person.firstName);