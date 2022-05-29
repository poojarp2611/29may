let age = 19
if (age > 18) {
    console.log("eligible for vote")
} else {
    console.log("not eligible")
}

// to check odd or even number 

let num = 9;
if (num % 2 == 0) {
    console.log("even number")
} else {
    console.log('odd number')
}

//largest number between two numbers
let a = 7;
let b = 4;
if (a > b) {
    console.log('a is greater than b')
} else if (a < b) {
    console.log('b is greater than a')
}
//var declaration
var f = 10

{
    console.log(f)
}
//let declaration
let a1 = 19; {
    let b1 = 9
    console.log(a1);
    console.log(b1);
}
/*Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
const PI = 3.14*/



/*null !== undefined Null Null means an empty or non - existent value.Null is assigned, and explicitly means nothing.*/
var test1 = null; {
    console.log(test1);
}


let name;
console.log(name); //undefined


let v = 10; {
    console.log(v); //defined
}


//switch case
let day = 6;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Tuesday