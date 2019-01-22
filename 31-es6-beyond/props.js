
// Is there a shorthand way to create properties in an object literal 
// that have the the same names as variables I have in scope?
  /*
  const name = "Graham";
  const age = 32;
  const foodsDeepFriedAtHomeThisYear = [
    {
      name: "Shrimp Chips",
      vegan: false
    },
    {
      name: "Pierogis",
      vegan: true
    }
  ];

  const graham = {
    name,
    age,
    foods: foodsDeepFriedAtHomeThisYear
  };
  // graham.name = name;
  // graham["age"] = age

  // let's make ⬆️ this object have some props!

  console.log(graham)
  */

// Is there a way to dynamically define (or compute) property names 
// in an object literal e.g. based on the value of a variable?

  /*  
  const propName = "attainability"

  const newYearsResolution = {
    body: "Write code every day",
    // could we assign attainability here instead?
    [propName]: true
  }

  // newYearsResolution.year = 2018
  // newYearsResolution["year"] = 2019

  console.log(newYearsResolution)
  */

