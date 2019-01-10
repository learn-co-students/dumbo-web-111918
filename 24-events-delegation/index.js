

function itemClickHandler(event){
  console.log("asdfjkasdfjh")
  removeSound()
  let thingWeClickedOn = event.target;
  thingWeClickedOn.remove()
}

function tacoClick(event){

  addSound();
  // find (query select the items ul)
  let itemsUl = document.querySelector(".items")

  // createNode li 
  let li = document.createElement("li")

      // innerText of that li
      // to be a taco emoji
  li.innerText = "🌮"

  // li.setAttribute("class", "item")
  // li.classList.add("item")
  // li.className = "foo";
  li.className = "item";

  // li.addEventListener("click", itemClickHandler)

    // append child to the list (ul)
  itemsUl.prepend(li)
}

// console.log("1st hello from LINE 8")


// function itIsAListItem(domElement){
//   // console.log(domElement.className)
//   return domElement.classList.contains("item")
// }


document.addEventListener("DOMContentLoaded", function(){
  // console.log("3rd dcl")
  // let firstItem = document.querySelector(".items li")
  // firstItem.addEventListener("click", itemClickHandler)

  // let allTheItems = document.querySelectorAll(".item");
  // allTheItems.forEach(function(item){
  //   item.addEventListener("click", itemClickHandler)
  // })
  // allTheItems.addEventListener("click", itemClickHandler);


  let ulItemsDomNode = document.getElementById("items")

  ulItemsDomNode.addEventListener("click", function(event){
    console.log(event.target);

    if (event.target.classList.contains("item")){
      // console.log("It is a list item!!!!")
      itemClickHandler(event)
    } else {
      // console.log("It is not.")
    }

    // event.target.remove()
  })

  // document.querySelectorAll(".item").forEach(function(item){
  //   item.addEventListener("click", function(){
  //     console.log("li was clicked")
  //   });
  // });


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



