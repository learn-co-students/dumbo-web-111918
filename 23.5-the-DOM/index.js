// Pass in tags, classes, id's (with the correct CSS identifiers)
const burgersArray = burgers()
const goodBurger = burgersArray[0]
const header = document.querySelector("h1")
// document.querySelectorAll()

// Pass in ID as string
// document.getElementById('id')

// returns an HTML Collection, which is not iterable via forEach
// document.getElementsByClassName('className')
// document.getElementsByTagName('tagName')
// document.getElementsByName('name')


// Helper Methods
function renderBurgerHTML(burger){
  return `<h4>${burger.name}</h4><p>Category: ${burger.category}</p> <img src=${burger.imgURL}>`
}

// burgersArray.forEach(appendBurger)
burgersArray.forEach(function(burger){
  appendBurger(burger)
})

function appendBurger(burger){
  // 1.Create the element
  const burgerDiv = document.querySelector("#burgers")
  const burgerCard = document.createElement("div")
  // 2. Stylize the element
  burgerCard.innerHTML = renderBurgerHTML(burger)
  // 3. Slap it on the DOM
  burgerDiv.append(burgerCard)
}

header.setAttribute("id", "heading")
// header.id = "heading"

// burgerCard.innerText = `${goodBurger.name}`
// *---*
// *----*
// const burgerName = document.createElement('p')
// burgerName.innerText = `${goodBurger.name}`
// burgerCard.append("This is some silly string")






















console.log(goodBurger);
