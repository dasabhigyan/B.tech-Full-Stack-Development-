let i = 1
while(i <=10){
    console.log("hello");
    i ++;
}
i = 0
do{
    console.log("hello");
    i++;
}while(i<10);

let userName = (prompt("Enter your name"))
console.log(userName)
console.log(typeof userName)
// number
// parseint
// parsefloat
alert(`hello ${userName}`)


// let amount
// let total = 0
// while (true){
//     amount = prompt("Enter amount")
//     if (amount == "done"){
//         break
//     }
//     else{
//         total = (total+Number(amount))
//     }
// }
// console.log(total)
let amt = prompt("Enter amount")
let t = 0
while(amt != "done"){
    t = t + Number(amt)
    amt = prompt("enter amount")
}
alert(`total is ${t}`)

console.log(Math.round(12.5))
console.log(Math.floor(-12.5))
console.log(Math.ceil(-12.5))
console.log(Math.min(-1,-2,-3))

