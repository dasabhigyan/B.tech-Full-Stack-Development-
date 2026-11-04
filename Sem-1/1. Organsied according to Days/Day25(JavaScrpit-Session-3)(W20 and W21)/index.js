let array1 = [1,2,3,4,5];

let absenteeRollNumber = [1,2,3,4,5];

let rollNumberToCall = absenteeRollNumber[2];

console.log(rollNumberToCall);


let moviesILike = ['Hailmarry','The Averange', 'Dhurandar', 'Ramayan'];

let moviesTowatchNext = ['Hailmarry','The Averange', 'Dhurandar', 'Ramayan'];

console.log(moviesILike == moviesTowatchNext);

moviesTowatchNext[0] = "Pushpa";

console.log(moviesTowatchNext)

let array2 = [1,2,3,4,5,6];
let lengthofArray2 = array2.length; // length function of the array
console.log(lengthofArray2);

//5. Functions
let tvShows = ["mentalist","breakingbad","dark","gameofthrons"];
console.log(tvShows);
tvShows.push("moneyhoest","suits");  //adds the element to the last of the arrey.
console.log(tvShows);
tvShows.pop();      // pop revomes element form the last of the arrey
let movieDelete = tvShows.pop();        // function to remove last element from the array
console.log(movieDelete)
let movieFirstdelete = tvShows.shift();     //Remove the first element in the array
console.log(movieFirstdelete);

// splice and CRUD

let nameinClass = ["Aditya","Abhigyan","Manas","Divyanshini"];
nameinClass.splice(1,2,"Shivam","Anshuman","Vishnu"); // 2 element removed from the index 1, then add values from there.
console.log(nameinClass)        // it can be used as shift,unshift,push and pop.

// Shallow Copy and Deep Copy 





/*                                       Worksheet-21                    */

//loops

//Printing my name 10 times.
let a = 0;
while (a<10) {
    console.log("Abhigyan",a);
    a++;
}
console.log(i)

// This is counts from 10-20 backward
let b = 20;
while (b>9){
    console.log(b)
    b--;
}

// making table of 5
let c = 0;
let d = 0;
while (c<10){
    c++;
    d+=5;
    console.log(`5 x ${c} = ${d}`);
}

// cover do while loop



// Taking input 
let e = Number(prompt("Enter your age"))
let f = parseInt("Enter ypur age")
let g = parseFloat("Enter your height in decimal")
