
// What are some key differences / gotchas 
// surrounding arrow functions?
// How do arrow functions treat `this` 
// differently than traditional functions?

/*
  
class Lightswitch {

  constructor({ colorHex, colorName }) {
    this.button = document.createElement("button");
    this.button.innerText = colorName;
    this.colorHex = colorHex;

    const body = document.querySelector("body")
    body.appendChild(this.button)

    // this.eventListener = eventListener

    this.button.addEventListener("click", this.eventListener)
  }

  eventListener = () => {
    console.log(this);
    document.body.style.backgroundColor = this.colorHex;
  }

}

document.addEventListener("DOMContentLoaded", () => {
  new Lightswitch({ colorHex: "#00f", colorName: "Blue" });
  new Lightswitch({ colorHex: "#fa0", colorName: "Orange" });
})
  
*/

// When do I need { } curly braces with an arrow function? 
// When can I skip them?


// const foo = () => ({ foo: "bar" })

// // setTimeout(() => console.log("yep"), 1000)
// // return 5;


// console.log(foo());

// Under what circumstances will an arrow function implicitly return?

  // const spiceGirls = ["Scary", "Baby", "Ginger", "Posh", "Sporty"]

  // const callback = function(adjective) { adjective.toUpperCase() + " SPICE" }
  // const callback = adjective => { adjective.toUpperCase() + " SPICE" }
  // const callback = (adjective) => { adjective.toUpperCase() + " SPICE" }
  // const callback = (adjective) => adjective.toUpperCase() + " SPICE"
  // const callback = adjective => adjective.toUpperCase() + " SPICE"
  
  // const bigNastyString = spiceGirls.map(callback).join("\r\n")

  // console.log(bigNastyString);

// an I define a default parameter for a JS function?

// function greet(name = "Ginger Spice") {
//   return `Hello, ${ name }`
// }
// const greet = (name = "Ginger Spice") => `Hello, ${ name }`
const greet = name = "Ginger Spice" => `Hello, ${ name }`

console.log(greet("Graham"))
console.log(greet())















