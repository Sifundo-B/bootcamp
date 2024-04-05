let courses =["JavaScript","Java","Angular", "React"]; // predefined array

let i; //counter for loop
let length = courses.length;// total num of courses array
let space = ' ' ; //homemade space
for(i=0;i<length;i++){
     courses[i] += space;
     //i++;
    }
    console.log(courses);

//lets display five times according to working days
const n =5;
for(let i=1; i<=n; i++){
    console.log("Lets show number of days " + i + ' day(s) of the week')
}
// for each loops
// courses.forEach(element => {
//     console.log(element);
// });