// console.log(x);
// let x = 10;      //error

// console.log(x);
// const x = 10;        //erroe

// console.log(x);
// var x = 10;         //undefined 

//-------------------------------------------------------------Worksheet-20------------------------------------------------------------
let student1Details = {                             // This is teh object.
    "firstName":"Abhigyan",
    "age":18,
    "height":"5 and 10",
    "isLegal":true,
    "marks": {
        "fsd":90,
        "python":70,
        "maths":40,
    }
};

console.log(student1Details.height);    // how to take output way 1

console.log(student1Details["age"]);    // how to take output way2 

console.log(student1Details.marks.fsd);

console.log(student1Details["marks"].python);   

student1Details["gender"] = "M";        // adding an key to the Object way 1

console.log(student1Details.gender)

student1Details["marks"]["comms"] = 100;        // adding a key to the Object way 2 

console.log(student1Details.marks.comms)

delete student1Details.marks;           // deleting a key from the object 

console.log(student1Details)



//-------------------------------------------

let stud1 = {
    "firstName":"abc",
    "rollNumber": 21,
};

let stud2 = {
    "firstName1":"abc",             
    "rollNumber": 21,
};

console.log(stud1==stud2)           // the output is false because the Object address are different.

//-----------------------------------------------

let stud3 = {
    "firstName":"abc",
    "rollNumber": 21,
};

// let stud4 = {
//     "firstName1":"abc",             
//     "rollNumber": 21,
// };

let stud4=stud3;
console.log(stud3==stud4)   // here the outpu is true because the Object address is same.