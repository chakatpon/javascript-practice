// Lecture: let and const 

// // ES5 
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// console.log(name6);

// // ES5
// function driversLicence5(passedTest) {
//     if (passedTest) {

//         var firstNmae = 'John';
//         var yearOfBirth = 1990;   
//     }

//     console.log(firstNmae + ', born in ' + yearOfBirth + ', is no officially allowed to drive a car.');
// }

// driversLicence5(true);

// // ES6
// function driversLicence6(passedTest) {
//     let firstNmae;
//     const yearOfBirth = 1990;
//     if (passedTest) {
//         firstNmae = 'John';
        
//     }

//     console.log(firstNmae + ', born in ' + yearOfBirth + ', is no officially allowed to drive a car.');
// }

// driversLicence6(true);


// let i = 23;
// for (let i = 0; i < 5; i++ ) {
//     console.log(i);
// }
// console.log(i);

////////////////////////////////////////////////
// Lecture: Blocks and IIFEs

// // ES6
// {
//     const a = 1;
//     let b = 2;
//     var c = 3;

// }

// // console.log(a + b);
// console.log(c)

// // ES5
// (function() {
//     var c = 3;
// })();

// console.log(c);

//////////////////////////////////////////////////
// Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2016 - year;

// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' +
//              yearOfBirth + '. Todat, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in 
// ${yearOfBirth}. Todat, he is ${calcAge(yearOfBirth)} years old.`)

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes(' '));
// console.log(`${firstName} `.repeat(5));

///////////////////////////////////////////////////////
// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5

var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map( el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => {
   return `Age element ${index + 1}: ${2016 - el}.`
})
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
})
console.log(ages6)