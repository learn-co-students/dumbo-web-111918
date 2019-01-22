
// What are some key differences / gotchas surrounding arrow functions?
// How do arrow functions treat `this` differently than traditional functions?


  // class Lightswitch

  //   def initialize(args)
  //     self.color_hex = args[:color_hex]
  //   end


  // end
/*
  const eventListener = function() {
    console.log(this);
    // body.style.backgroundColor = this.colorHex;
  }
  
  class Lightswitch {

    constructor({ colorHex, colorName }) {
      this.button = document.createElement("button");
      this.button.innerText = colorName;
      this.colorHex = colorHex;

      const body = document.querySelector("body")
      body.appendChild(this.button)

      this.eventListener = eventListener
      // 
      // console.log(this);
      this.eventListener();
      eventListener()
      // console.log(this);

      this.button.addEventListener("click", eventListener)
    }


    turnOn(){
      console.log(this)
    }



  }

  document.addEventListener("DOMContentLoaded", () => {
    new Lightswitch({ colorHex: "#00f", colorName: "Blue" });
    new Lightswitch({ colorHex: "#fa0", colorName: "Orange" });
    new Lightswitch({ colorHex: "#f00", colorName: "Red" });
  })
  */

// When do I need { } curly braces with an arrow function? When can I skip them?
// Under what circumstances will an arrow function implicitly return?
  
  /*
  const spiceGirls = ["Scary", "Baby", "Ginger", "Posh", "Sporty", "undefined"]

  const callback = adjective => adjective.toUpperCase() + " SPICE"

  // spice_girls.map do |adjective, |
  //   adjective.upcase + " spice"
  // end

  const bigNastyString = spiceGirls.map(callback).join("\r\n")

  console.log(bigNastyString);
  */

// an I define a default parameter for a JS function?

/*
greet = (name = "Ginger Spice") => `Hello, ${ name }`

console.log(greet("Graham"))
console.log(greet())



*/


