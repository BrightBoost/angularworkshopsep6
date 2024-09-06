// Declare variables
let x = "6";
console.log(typeof x);

x = true;
console.log(typeof x);

// Writing a function
function sayHi(name) {
    console.log("Hi " + name);
}
sayHi("Gibson");
sayHi("Bertus");

// Conditionals and loops
let y = 15;
if(y < 10) {
    console.log("Y is kleiner dan 10");
} else {
    console.log("Y is niet kleiner dan 10");
}

let lijst = ["garnaal1", "garnaal2", "vis1", "vis2", "grasparkiet1", "grasparkiet2"];
for(let i = 0; i < lijst.length; i++) {
    console.log(lijst[i]);
}
