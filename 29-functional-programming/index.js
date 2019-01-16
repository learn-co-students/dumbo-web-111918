

function wrapper() {
  const potato = "🥔";

  return function(){
    const greeting = "Hello"
    console.log(`${ greeting }, ${ potato }`)
    return `${ greeting }, ${ potato }`
  }
}

// console.log(hello())
// console.log(greeting)

// function addCallbackToSquirrelList(callback){
//   squirrelList.addEventListener("click", callback);
// }


// function makeLiFromSquirrelJson(squirrel, squirrelList) {
//   squirrelList.append(createSquirrelLi(squirrel));
// }

function putSquirrelsInList(squirrelListJson, ulElement){
  ulElement.innerHTML = turnSquirrelListIntoHTML(squirrelListJson)
}


function turnSquirrelListIntoHTML(squirrels) {
  // let htmlListItems = "";
  // squirrels.forEach(squirrel => {
  //   htmlListItems += createSquirrelLi(squirrel)
  // })
  // return htmlListItems;

  return squirrels.map(createSquirrelLi).join("")
}

// const turnSquirrelListIntoHTML = squirrels => squirrels.map(createSquirrelLi).join("")

function createSquirrelLi(squirrel) {
  return `
    <li class="squirrel">
      ${ squirrel.name }
    </li>
  `
}

// function createSquirrelLi(squirrelJson) {
//   let li = document.createElement("li");
//   li.className = "squirrel";
//   setSquirrelInfoOnExistingLi(li)
//   return li;
// }

// function setSquirrelInfoOnExistingLi(li){
//   li.innerText = squirrel.name;
// }


document.addEventListener("DOMContentLoaded", function(){
  let squirrelListElement;
  squirrelListElement = document.getElementById("squirrels");
  // addCallbackToSquirrelList(wrapper())
  fetch("http://localhost:3000/squirrels")
    .then(res => res.json())
    .then(listOfSquirrels => {
      putSquirrelsInList(listOfSquirrels, squirrelListElement)
      // listOfSquirrels.forEach(function(squirrel){ 
      //   makeLiFromSquirrelJson(squirrel, squirrelList) 
      // })
    });

})