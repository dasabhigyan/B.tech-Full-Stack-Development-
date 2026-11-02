// const studentname = "Aarush"
// const studentcity = "Kanpur"
// const studentcollege = "zenith"
// const studentroll = "125"
const student = {
    name: "Aarush",
    city: "kanpur",
    college: "zenith",
    roll: "125"
}
console.log(student);
console.log(typeof student);
console.log(student.name);
console.log(student["name"]);
console.log(student.phone);
student["country"] = "India";
console.log(student)
student["city"] = "Mumbai";
console.log(student);
student.college = "Zenith School of AI";
console.log(student)
delete student["name"];
console.log(student);

// premetive
let x = "hello";
let y = x;
y = "world";
console.log(x);

// non-premetive
let p = { score: 5 };
let q = p;
q.score = 10;
q = { score: 99 };
console.log(p.score);