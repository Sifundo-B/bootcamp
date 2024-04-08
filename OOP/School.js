let  School = {
    name: "Germiston High School",
    established: "1995",
    location: "Germiston",
    learner: 130,

    // Creat a function that fetches school properties and attributes
    //This is a function
    displayIndo: function() {
        // The callback method function
        console.log(`The name of school is ${School.name} located at
        ${School.location} ${"\n"} established in ${School.established}`);
    },
    hardData: function(){
        //object iteration function
        console.log("The name of school is " + School.name + "\n"
    + "located at " + School.location)
    },

    notationData: function(){
        console.log("The name of school is " + School['name']);
    }
}
// Access functions
School.displayIndo()
School.hardData()
School.notationData()