

// function introduce() {
//   return `Hello, good morning, I'm ${ this.preferredName }`;
// }

// function sayGoodbye() {
//   return `BYE, I'M ${ this.preferredName.toUpperCase() }`;
// }

// const gigi = {
//   legalName: "Georgina Hoagland",
//   preferredName: "Gigi",
//   introduce: introduce,
//   sayGoodbye: sayGoodbye
// }

// const graham = {
//   legalName: "Graham Troyer-Joy",
//   preferredName: "Graham",
//   introduce: introduce,
//   sayGoodbye: sayGoodbye
// }

// const thompson = {
//   legalName: "Thompson Plyler",
//   preferredName: "Thompson",
//   introduce: introduce,
//   sayGoodbye: sayGoodbye
// }


// function Person(legalName, preferredName){
//   this.legalName = legalName;
//   this.preferredName = preferredName;
// }


// Person.prototype.introduce = function() {
//   return `Hello, good morning, I'm ${ this.preferredName }`;
// }


// aGrande = new Person("Ariana Grande", "AG")

// console.log(aGrande.introduce())


// function Instructor(name, preferredName, subjectTaught) {
//   this.name = name;
//   this.preferredName = preferredName;
//   this.subjectTaught = subjectTaught;
// }

// Instructor.prototype = Object.create(Person.prototype)

// // console.log(Person.prototype)
// gigi = new Instructor("Georgina Hoagland", "Gigi", "JavaScript");
// graham = new Instructor("Graham Troyer-Joy", "Graham", "JavaScript");

// Instructor.prototype.teach = function(){
//   return `blah blah blah ${ this.subjectTaught }`
// }


// console.log(gigi.introduce())
// console.log(graham.introduce())



class Person {

  constructor(legalName, preferredName){
    this.legalName = legalName
    this.preferredName = preferredName
  }

  introduce(){
    return `Hello, good morning, I'm ${ this.preferredName }`;
  }

}

class Instructor extends Person {

  constructor(legalName, preferredName, subjectTaught) {
    // super(legalName, preferredName)
    super("Instructor" + legalName, "Teacher" + preferredName)
    this.subjectTaught = subjectTaught
  }

  teach(){
    return `blah blah blah ${ this.subjectTaught }`
  }

}

gigi = new Instructor("Georgina Hoagland", "Gigi", "JavaScript");
graham = new Instructor("Graham Troyer-Joy", "Graham", "JavaScript");


console.log(graham.introduce())
console.log(graham.teach())
console.log(gigi.introduce())








