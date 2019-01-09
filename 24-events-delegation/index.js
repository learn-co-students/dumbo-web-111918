

function itemClickHandler(event){
  let thingWeClickedOn = event.target;
  thingWeClickedOn.remove()
}

function tacoClick(){
  // find (query select the items ul)
  let itemsUl = document.querySelector(".items")

  // createNode li 
  let li = document.createElement("li")

      // innerText of that li
      // to be a taco emoji


    // append child to the list (ul)
    itemsUl.append(li)
}

// console.log("1st hello from LINE 8")



document.addEventListener("DOMContentLoaded", function(){
  // console.log("3rd dcl")
  // let firstItem = document.querySelector(".items li")
  // firstItem.addEventListener("click", itemClickHandler)

  let allTheItems = document.querySelectorAll(".items li");
  allTheItems.forEach(function(item){
    item.addEventListener("click", itemClickHandler)
  })
  // allTheItems.addEventListener("click", itemClickHandler);

  document.querySelector("#taco").addEventListener("click", tacoClick)
});

// console.log("2nd hello from LINE 16")



// document.addEventListener("DOMContentLoaded", function(){
//   let taco = document.querySelector("#taco")

//   function callback(){
//     console.log("HELLO")
//   }

//   taco.addEventListener("click", callback)

//   taco.addEventListener("click", function(){
//     console.log("POATAO")
//   })

// })



