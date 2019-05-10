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

// const years = [1990, 1965, 1982, 1937];

// // ES5

// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });
// console.log(ages5);

// // ES6
// let ages6 = years.map( el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//    return `Age element ${index + 1}: ${2016 - el}.`
// })
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// })
// console.log(ages6)

class Element { 
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;

    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }



}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)}`);
    }

}

const allParks = [new Park('Green Park', 1987, 0.2, 215), 
                  new Park('National Park', 1894, 2.9, 3541), 
                  new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), 
                    new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('4th Street', 2015, 0.8),
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur)

    return [sum, sum/arr.length];
}

function reportParks(p) {

    console.log('-----PARKS REPORT------');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Whice park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`)

}

function reportStreets(s) {

    console.log('-----STREETS REPORT-----');

    // Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength}km, 
    with an average of ${avgLength}km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet())



}

reportParks(allParks);
reportStreets(allStreets);
