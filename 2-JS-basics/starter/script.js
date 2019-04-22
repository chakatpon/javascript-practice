
/*
console.log('CONNECTED');

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
var johnMark = 'John and Mark';
*/

/****************************************************************
 * Variable mutation and type coercion
 */

/*
// Type coercion
 var firstName = 'John';
 var age = 28;

 console.log(firstName + ' ' + age);
 
 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 // variable mutation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 var lastName = prompt('what is his last Name ?');
 console.log(firstName + ' ' + lastName);
 */

 /*************************************************************
  * Basic operators
  */


/*
var year, yearJohn, yearMark
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
console.log(typeof johnOlder === 'boolean');
var x;
console.log(typeof x);
*/

/***********************************************************************
 * Operator precedence
 */

 /*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge; // true
 console.log(isFullAge);

 // Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average)

 // multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x,y);

 // More operators

 x = x * 2;
 console.log(x);
 x *= 2;
 console.log(x);
 x += 1;
 console.log(x);
 x++;
 console.log(x);
 x--;
 console.log(x);
 */

 
//  var markMass = 60;
//  var johnMass = 70;

//  var markHight = prompt('How hight is mark ?');
//  var johnHight = prompt('How hight is john ?');

//  var markBMI = markMass / (markHight*markHight);
//  var johnBMI = johnMass/ (johnHight*johnHight);

//  if (markBMI > johnBMI) {
//      console.log('Mark\' BMI is higher than John\'s.');
//  } else {
//     console.log('John\' BMI is higher than Mark\'s.');
//  }
// var BMIFlag = markBMI > johnBMI;
// console.log("Is Mark's BMI higher than John's? " + BMIFlag);
 

 /********************************************************************
  * If / else statementss
  */

//   var firstName = 'John';
//   var civilStatus = 'single';

//   if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
//   } else {
//     console.log(firstName + ' will hopefully marry soon :) ');
//   }

//   var isMarried = true;
//   if (isMarried) {
//     console.log(firstName + ' is married!');
//   } else {
//     console.log(firstName + ' will hopefully marry soon :) ');
//   }

/**********************************************************************
 *  Boolean logic
 */

//  var firstName = 'John';
//  var age = 20;

//  if (age < 13) {
//      console.log(firstName + ' is a boy.');
//  } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teen.');
//  } else if (age >= 20 && age <30) {
//     console.log(firstName + ' is a young man.');
//  } else {
//     console.log(firstName + ' is a man.');
//  }

/************************************************************************
 * The Ternary Operator and Switch Statements
 */

//  var firstName = 'John';
//  var age = 26;

//  // Ternary Statements
//  age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drink juice.');
 
//  var drink = age >= 18 ? 'beer' : 'juice';
//  console.log(drink);

//  if (age >= 18) {
//      var drink = 'beer';
//  } else {
//      var drink = 'juice';
//  }

// var job = 'instructor';
// switch(job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teacher kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' dose something else.');
// }

// switch(true) { 
//     case age < 13: 
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teen.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + 'is a man');
// }

/***************************************************************************
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

// var height;

// height = '23' ;

// if (height || height === 0) {
//     console.log('Variabled is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// // Equality operators
// if (height == 23) {
//     console.log('The == operator does type coercion!');
// }

// var johnFirstScore = 89;
// var johnSecondScore = 120;
// var johnThirdScore = 103;

// var johnAverageScore = (johnFirstScore + johnSecondScore + johnThirdScore)/3;

// var mikeFirstScore = 116;
// var mikeSecondScore = 94;
// var mikeThirdScore = 123;

// var mikeAverageScore = (mikeFirstScore + mikeSecondScore + mikeThirdScore)/3;

// var maryFirstScore = 97;
// var marYSecondScore = 134;
// var maryThirdScore = 105;

// var maryAverageScore = (maryFirstScore + marYSecondScore + maryThirdScore)/3;

// console.log(johnAverageScore, mikeAverageScore, maryAverageScore);

// if(johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore){
//     console('John is winner average score is :' + johnAverageScore);
// }else if(mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore){
//     console('Mike is winner average score is :' + mikeAverageScore);
// }else if(maryAverageScore > johnAverageScore && maryAverageScore > mikeAverageScore) {
//     console.log('Mary is winner average score is :' + maryAverageScore);
// }else {
//     console.log('There is a drew.')
// }

/********************************************************************************
 * Functions
 */

//  function calculateAge(birthYear){
//     return 2019 - birthYear;
//  }

//  var ageJohn = calculateAge(1990);
//  var ageMike = calculateAge(1948);
//  var ageJane = calculateAge(1969);

//  console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(birthYear, firstName) {
//     var age = calculateAge(birthYear);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName +' retires in '+ retirement + ' years.');
//     } else { 
//         console.log(firstName + ' is already retired.');
//     }

    
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/********************************************************************************
 * Function Statements and Expression
 */

 // Function declaration
 // function whatDoYouDo(job, firstName) {}

 // Function expression

//  var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default: 
//             return firstName + ' does something else';
//     }
//  }

//  console.log(whatDoYouDo('teacher', 'John'));
//  console.log(whatDoYouDo('designer', 'Jane'));
//  console.log(whatDoYouDo('retired', 'Mark'));


/**********************************************************************************
 * Arrays
 */

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names);
// console.log(names.length);

// // Mutate array date
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);
// console.log(names.length)

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a desiger';
// console.log(isDesigner);

// function tipCalculate(paid) {

//     if(paid < 50) {
//         return paid * 0.2;
//     }else if( 50 <= paid && paid <= 200) {
//         return paid * 0.15;
//     }else if( paid > 200 ){
//         return paid * 0.1 ;
//     }
// }

// var firstPaid = 124;
// var secondPaid = 48;
// var thridPaid = 268;

// var firstTip = tipCalculate(firstPaid);
// var secondTip = tipCalculate(secondPaid);
// var thridTip = tipCalculate(thridPaid);

// var tips = [ firstTip, secondTip, thridTip ];
// var paids = [ firstTip+firstPaid, secondTip+secondPaid, thridTip+thridPaid];

// console.log(tips);
// console.log(paids);

/***************************************************************
 * Objects and properties
 */

//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1990,
//      family: ['Jane', 'Mark', 'Bob', 'Emily'],
//      job: 'teacher',
//      isMarried: false
//  };
//  console.log(john);

//  console.log(john.firstName);
//  console.log(john['lastName']);
//  var x = 'birthYear';
//  console.log(john[x]);

//  john.job = 'designer';
//  john['isMarried'] = true;
//  console.log(john);


//  var jane = new Object();
//  jane.name = 'Jane';
//  jane.birthYear = 1969;
//  jane['lastName'] = 'Smith';
//  console.log(jane);

/********************************************************************
 * Objects and methods
 */

//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1993,
//      family: ['Jane', 'Mark', 'Bob', 'Emily'],
//      job: 'teacher',
//      isMarried: false,
//      calcAge: function(birthYear) {
//          this.age = 2018 - this.birthYear;
//      }
//  };

//  console.log(john);
//  console.log(john.calcAge());

//  john.calcAge();

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1993,
    mass: 85,
    hight: 181,
    calculateBMI: function() {
        this.BMI = this.mass/(this.hight*this.hight);
    }
};

var mark = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1993,
    mass: 74,
    hight: 181,
    calculateBMI: function() {
        this.BMI = this.mass/(this.hight*this.hight);
    }
};

john.calculateBMI();
mark.calculateBMI();

console.log(100^2)
console.log(john.BMI);
console.log(mark.BMI)
if(john.BMI > mark.BMI){
    console.log('john has highest BMI');
}else if(mark.BMI > john.BMI) {
    console.log('mark has highest BMI');
}