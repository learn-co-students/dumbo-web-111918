// What is destructuring and why would I want to do it?
  /*
  const borough = {
    name: "Brooklyn",
    population: 2636735,
    founded: 1643,
    baseballTeam: "Nets"
  }

  // const name = borough.name;
  // const population = borough.population;
  // const founded = borough.founded;

  let { 
    name,
    population,
    founded,
    baseballTeam: basketballTeam 
  } = borough;

  console.log(basketballTeam)


  // could we do all of the above in one line?

  console.log((new Date()).getFullYear() - founded + " years ago")
  */

// Could I rename variables as I destructure them?

// Could I do it to an array?
  
  /*
  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // const bestBorough = boroughNames[0]
  // const boroughWithAlltheAirports = boroughNames[3]

  const [ bestBorough, , , boroughWithAlltheAirports ] = boroughNames

  console.log(bestBorough)
  console.log(boroughWithAlltheAirports)
  */

// Could I do it to the parameters of a function?

  /*
  const spiceGirls = [
    {
      spicyName: "Ginger",
      legalName: "Geri Halliwell",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Scary",
      legalName: "Melanie Brown",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Baby",
      legalName: "Emma Bunton",
      successfulSoloCareer: "😬", 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Posh",
      legalName: "Victoria Beckham (née adams)",
      successfulSoloCareer: false, 
      participatingIn2019ReunionTour: false
    },
    {
      spicyName: "Sporty",
      legalName: "Melanie Chisolm",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
  ]

  function greet({ spicyName, participatingIn2019ReunionTour: touring }, banana) {
    // can we make this function shorter?

    // console.log(spice)
    // const spicyName = spice.spicyName;
    // const touring = spice.participatingIn2019ReunionTour;

    // const { spicyName, participatingIn2019ReunionTour: touring } = spice;

    const reunionTourBit = touring ? ":D" : "-_-";
    return `Hello, ${ spicyName } Spice! ${ reunionTourBit }`
  }

  const me = { 
    spicyName: "Graham", 
    participatingIn2019ReunionTour: "hell yeah",
  };

  console.log(spiceGirls.map(greet).join("\r\n\r\n"))
  console.log(greet(me, true))




*/














