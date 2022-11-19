console.log("hello world");

// null means its not defined but intentionally
// undefined is unintentional
// NaN similar to null but the type is number

/*
STRING METHODS

let name = "Timmy"
name[0];
name.slice(0,3);
name.charAt("m");


COMPARISONS
let num = 4
let string = "4"

if (num == string) --> True because == values but not the type
!=

if (num === string) --> False because values and type are not the same
!==

*/
/*a = prompt("How old are you ? ")
function age_allowed(age) {// this will in string type
    age = parseInt(age);
    if (age >= 18) {
        alert("welcome to my page");
    }
    else {
        alert("youre too young")
    }
}
age_allowed(a)*/
// create a function that accepts age as a parameter and if the age is >= 18, alert the end user ("welcome to my page")
// otherwise alert the end user ("you're too young to enter")
// using prompt, collect the age to pass as an argument into your function