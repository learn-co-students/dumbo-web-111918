

// students.each do |student|
//   p student
// end



function callback(student){
  // console.log(greet(student))
  // console.log(`Hello, ${ student }`)
  return greet(student)
}

// function greet(who) {
//   return `Hello, ${ who }`
// }

var greet = function(who) {
  return `Hello, ${ who }`
}


var someStudents = ["Ana", "Jarrian", "Stephen", "Gigi"]


var arrayOStrings = someStudents.map(greet)
var otherArrayOfStrings = someStudents.map(function(student) {
  return student.toUpperCase()
})

// var otherArrayOfStrings = someStudents.map(student => student.toUpperCase())

console.log(someStudents)
console.log(arrayOStrings)
console.log(otherArrayOfStrings)




// function saluda(who) {
//   return `Hola, ${ who }`
// }

// function greetNTimes(greetCallback, who, numberOfTimes) {

  // for (var i = 0; i < numberOfTimes; i++) {
  //   console.log(greetCallback(who))
  // }

// }

// greetNTimes(greet, "Ana", 5);
// greetNTimes(saluda, "Ana", 15000);


// function next(what){
//   // debugger
//   // console.log("Inside Next")
//   return `${ what }, next!`;
// }


// function thank(who, secondThingThatGetsPassedIn){
//   var thankedString = `Thank ${ who }`;

//   console.log(secondThingThatGetsPassedIn)
//   console.log(typeof secondThingThatGetsPassedIn)

//   var thankedAndCalledBack = secondThingThatGetsPassedIn(thankedString);
//   // console.log(thankedAndCalledBack)

//   // console.log("Inside Thank")
//   // console.log(callback())
//   return thankedAndCalledBack;
// }

// var returnValue = thank("you", next)

// console.log(returnValue)

// console.log(thank())
// console.log(thank)

// var somethingElse = thank();

// console.log(somethingElse)

// console.log(somethingElse("Thompson"))


// "Thank undefined"("Thompson")

// console.log(thank("you"))
// var whatever = next(thank("you"))
// console.log(whatever)




