const arr = [1,2,3,4,"abc",{name:"aarush",roll:123}];
console.log(arr[5].roll);

arr.splice(2,2,8,9)
// first value -> inedx i want to start
// second value -> how many index i want to delete after first value
// third value -> values that i want to add after deleting

let arr5 = ["apple", "orange", "mango"]
arr5.splice(1,1,'banana', "papaya")
console.log(arr5)
arr5.splice(4,0,'fruits')
console.log(arr5)


let a = 10;
let b = 10;
b = 20;
console.log(a);
console.log(b);
console.log(a == b);

let a1 = [1,2,3,4];
let a2 = a1;
a2[2] = "a";
console.log(a1);
console.log(a2);
console.log(a1 == a2);

// a == b compares values: 10 vs 20, so FALSE.
// a1 == a2 compares addresses for objects and arrays. Both point to the same place so TRUE     
   
let c = 10;
let d = 10;
console.log(c == d);    
// True

let a3 = [1,2,3,4];
let a4 = [1,2,3,4];
console.log(a3 == a4);   
// False


let i = 0;
while(i<10){
    console.log(i);
    while(i<10){
        i++;
    }
}