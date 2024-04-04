let courses =["JavaScript","Java","Angular", "React"]; // predefined array
courses.length =6;

courses[4]="TypeScript"
courses[5] = "Vue"
console.log("Number of Courses: " , courses);

//check if the array is string or object
console.log(typeof courses)


//INjecting multiple values into a single array
courses.push('C++','Flutter','C#','Python');
console.log(courses);

//Check if array is an array method
console.log('Array is a method ' , courses instanceof Array)
console.log('is this still an array? ', Array.isArray(courses))


let Faculty=courses.toString();
console.log(`Courses are a method : ${Faculty instanceof Array}`)
console.log("Courses as a string " , Faculty);
console.log(typeof Faculty)
console.log(Faculty.toUpperCase())