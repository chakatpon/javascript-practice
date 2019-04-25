/************************************************************************
 * Function contructor
 */

//  var john = {
//      name: 'John',
//      yearOfBirth: 1990,
//      job: 'teacher'
//  };

//  var Person = function(name, yearOfBirth, job) {
//      this.name = name;
//      this.yearOfBirth = yearOfBirth;
//      this.job = job;

//  }

//  Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// }

//  Person.prototype.lastName = 'Smith';

//  var john = new Person('John', 1990, 'teacher');
//  var jane = new Person('Jane', 1969, 'desinger');
//  var mark = new Person('Mark', 1948, 'retired');

//  john.calculateAge();
//  jane.calculateAge();
//  mark.calculateAge();

//  console.log(john.lastName);
//  console.log(jane.lastName);
//  console.log(mark.lastName);

/***************************************************************
 * Object.create
 */

//  var personProto = {
//      calculateAge: function() {
//          console.log(2016 - this.yearOfBirth);
//      }
//  };

//  var john = Object.create(personProto);
//  john.name = 'John';
//  john.yearOfBirth = 1990;
//  john.job = 'teacher';

//  var jane = Object.create(personProto, {
//      name: { value: 'Jane'},
//      yearOfBirth: { value: 1969},
//      job: { value: 'designer'}
//  })

/******************************************************************
 * Primitives vs objects
 */

// Primitive type
//  var a = 23;
//  var b = a;
//  a = 46;
//  console.log(a);
//  console.log(b);

//  // Objects
//  var obj1 = {
//      name: 'John',
//      age: 26
//  };

//  var obj2 = obj1;

//  obj1.age = 30;
//  console.log(obj1.age);
//  console.log(obj2.age);

//  // Functions
//  var age = 27;
//  var obj = {
//      name: 'Jonas',
//      city: 'Lisbon'
//  };

//  function change(a, b) {
//      a = 30;
//      b.city = 'San Francisco';
//  }

//  change(age, obj);

//  console.log(age);
//  console.log(obj.city);

// (function () {

//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function () {
//         console.log(this.question);

//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function (ans) {
//         if (ans === this.correct) {
//             console.log('Correct answer !')
//         } else {
//             console.log("Wrong answer. Try again.")
//         }
//     }

//     var q1 = new Question('Is JavaScript the coolest programming language in the world!',
//         ['Yes', 'No'], 0);

//     var q2 = new Question('What is the name of this course\'s teacher?',
//         ['John', 'Micheal', 'Jonas'], 2);

//     var q3 = new Question('What does best describe coding?',
//         ['Bording', 'Hard', 'Fun', 'Tediuos'], 2);

//     var questions = [q1, q2, q3];

//     var n = Math.floor(Math.random() * questions.length);

//     questions[n].displayQuestion();

//     var answer = parseInt(prompt('Please select the correct answer.'));

//     questions[n].checkAnswer(answer);

// })();


// (function () {

//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function () {
//         console.log(this.question);

//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function (ans, callback) {
//         var sc;

//         if (ans === this.correct) {
//             console.log('Correct answer !')
//             sc = callback(true);
//         } else {
//             console.log("Wrong answer. Try again.")
//             sc = callback(false);
//         }

//         this.displayScore(sc);
//     }

//     Question.prototype.displayScore = function(score) {
//         console.log('Your current score is: ' + score);
//         console.log('--------------------------------');
//     }

//     var q1 = new Question('Is JavaScript the coolest programming language in the world!',
//         ['Yes', 'No'], 0);

//     var q2 = new Question('What is the name of this course\'s teacher?',
//         ['John', 'Micheal', 'Jonas'], 2);

//     var q3 = new Question('What does best describe coding?',
//         ['Bording', 'Hard', 'Fun', 'Tediuos'], 2);

//     var questions = [q1, q2, q3];

//     function score() {
//         var sc = 0;
//         return function(correct) {
//             if (correct) {
//                 sc++;
//             }
//             return sc;
//         }
//     }

//     var keepScore = score();

//     nextQuestion();

//     function nextQuestion() {

//         var n = Math.floor(Math.random() * questions.length);

//         questions[n].displayQuestion();

//         var answer = prompt('Please select the correct answer.');

//         if(answer !== 'exit') {

//             questions[n].checkAnswer(parseInt(answer), keepScore);
//             nextQuestion();
//         }
//     }


// })();