
// What is the spread operator and why would I want to use it?

/*

  const graham2018 = {
    name: "Graham",
    employer: "Flatiron School",
    borough: "Brooklyn",
    shopsAtUniqloTooMuch: true,
    cooksAtHome: false
  }

  const goodHabits = {
    exercises: true,
    publicRadioMember: true,
    cooksAtHome: true,
  }

  const graham2019 = {
    ...graham2018,
    ...goodHabits,
    cooksAtHome: "sometimes"
  }

    // name: graham2018.name,
    // employer: graham2018.employer,
    // borough: graham2018.borough,
    // exercises: goodHabits.exercises,
    // publicRadioMember: goodHabits.publicRadioMember,
    // cooksAtHome: true


  // console.log(graham2019)
  
  const newYearSameMe = {
    ...graham2018
  }

  console.log(graham2018)
  console.log(newYearSameMe)
  console.log(newYearSameMe === newYearSameMe)
  console.log(newYearSameMe === graham2018)
*/
  
// Could I do it to an array?
  
  /*
  const bodyParts = ["shoulders", "knees", "toes", "knees"];

  const funSong = [...bodyParts, "head", ...bodyParts, "toes"];
  const funSong2 = [ ...funSong ]; //funSong.slice()


  console.log(funSong2)
  console.log(funSong.join(" and "))
  console.log(funSong2.join(" and "))
  console.log(funSong === funSong2)
  
  */

// Could I do it to the parameters of a function?

 
 /*
  // 1.
  function canTakeSixArguments(baz, quux, blat) {
    console.log(baz, quux, blat)
  }

  const extendedDanceRemix = ["head", "shoulders", "knees", "toes", "knees", "toes"];
  // spread
  canTakeSixArguments(...extendedDanceRemix)
  
  
  // 2.
  function canTakeAllTheArguments(head, shoulders, ...bodyParts) { // rest parameters
    console.log(head)
    console.log(shoulders)
    console.log(bodyParts)
  }
  canTakeAllTheArguments("head", "shoulders", "knees", "toes", "knees", "toes")

  //3. 🤯

  function tinderProfile({ favoriteColor, name }, ...rest) {
    console.log(name)
    console.log(favoriteColor)
    console.log(rest)
  }
  
  const muriel = {
    name: "Muriel Worthington",
    favoriteColor: "puce",
    tailCount: 1
  }

  tinderProfile(muriel, { acornCount: 5 }, true, "tree")
  

  //or..,
  function canTakeAllTheArguments2(...potato) {
    console.log(potato)
  }
  const extendedDanceRemix2 = ["head", "shoulders", "knees", "toes", "knees", "toes"];
  canTakeAllTheArguments2(...extendedDanceRemix2)

  //but you could just...
  function justTakesAnArray(arr) {
    console.log(arr)
  }

  justTakesAnArray(extendedDanceRemix2)

  */

