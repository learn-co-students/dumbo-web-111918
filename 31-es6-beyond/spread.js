

// What is the spread operator and why would I want to use it?

/*
  const graham2018 = {
    name: "Graham",
    employer: "Flatiron School",
    borough: "Brooklyn",
    cooksAtHome: false
  }

  const goodHabits = {
    exercises: true,
    publicRadioMember: true,
    cooksAtHome: true,
  }

  const graham2019 = {
    ...goodHabits,
    ...graham2018,
    // cooksAtHome: true,



    // name: graham2018.name,
    // employer: graham2018.employer,
    // borough: graham2018.borough,
    // exercises: goodHabits.exercises,
    // publicRadioMember: goodHabits.publicRadioMember
  }

  // Object.assign({}, { foo: "bar" })

  console.log(graham2019)

  const newYearSameMe = {
    ...graham2018
  }
  console.log(newYearSameMe)
  console.log(graham2018)
  console.log(newYearSameMe === graham2018)

  */
// Could I do it to an array?
  
  /*
  const bodyParts = ["shoulders", "knees", "toes", "knees"];

  const funSong = ["head", ...bodyParts, "toes"];
  // const funSong2 = funSong.slice()
  const funSong2 = [ ...funSong ]

  console.log(funSong2)
  console.log(funSong2.join(" and "))
  console.log(funSong === funSong2)
  */

// Could I do it to the parameters of a function?
// Is that called rest parameters?

  /*
  const extendedRemix = ["head", "shoulders", "knees", "toes", "knees", "toes"]

  function first2(first, second) {
    return `${ first } and ${ second }`;
  }

  function first4(first, second, third, fourth) {
    return [first, second, third, fourth].join(" and ")
  }

  function all(...bodyParts) {
    console.log(bodyParts)
    return bodyParts.join(" and ")
  }

  // console.log(first2(extendedRemix[0], extendedRemix[1]))
  // console.log(first2.apply(null, extendedRemix))
  // console.log(first4.apply(null, extendedRemix))
  console.log(all("head", "shoulders", "elbows", "hips"))
  console.log(all.apply(null, extendedRemix.slice(4)))
  */