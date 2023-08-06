console.log(even_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// null means its not defined but intentionally
// undefined is unintentional
// NaN similar to null but the type is number

/*
STRING METHODS

let name = "Timmy"
name[0]; name.charAt(0);
name.slice(0,3);
name.indexOf("m");


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

function even_number(nums) {
    even_nums = 0;
    i = 0;
    while (nums.length = i - 1) {
        if (nums[i] % 2 == 1) {
            i += 1;
        }
        else {
            i += 1;
            even_nums += 1;
        }

    }
}

// Create a function that accepts a list of numbers as the parameter and returns the number of even numbers found in the list //


function replaceElement() {
    let electric = document.getElementById("electric").value;
    let gas = document.getElementById("gas").value;
    let oil = document.getElementById("oil").value;
    let mileage = document.getElementById("mileage").value;
    let less = document.getElementById("flightsless").value;
    let more = document.getElementById("flightsmore").value;
    let newspaper = document.getElementById("newspaper").value;
    let tin = document.getElementById("tin").value;

    let sum = (electric * 105) + (gas * 105) + (oil * 113) + (mileage * 0.79) + (less * 1100) + (more * 4400);
    if (newspaper == "off") {
        sum += 184
    }
    if (tin == "off") {
        sum += 166
    }
    var newElement = document.createElement('h4');
    h4.setAttribute('style', 'white-space: pre;');
    newElement.textContent = "Your Carbon Footprint is " + sum;
    if (sum < 15999) {
        newElement.textContent += "\r\nYour Carbon Footprint is Ideal"
    }
    else if (sum < 22000) {
        newElement.textContent += "\r\nYour Carbon Footprint is Average"
    }
    else {
        newElement.textContent += "\r\nYour Carbon Footprint is above average"
    }
    var calculatorform = document.getElementById('calculatorform');
    calculatorform.replaceWith(newElement);

}

