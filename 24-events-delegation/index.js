function deleteElement(event){
  removeSound();
  event.target.remove()
}
// function bindEventListenerToItem(singleItem, index, fullArray){ // not using these other two 🤔
//   console.log(index)
//   singleItem.addEventListener("click", deleteElement)
// }

let itemsUl;

function addEmojiToList(){
  addSound();
  // document.querySelector(".items")
  const domNode = document.createElement("li")
  domNode.className = "item";
  domNode.innerText = "🌮"
  // domNode.addEventListener("click", deleteElement)
  itemsUl.prepend(domNode);
}
function dclCallback(){
  itemsUl = document.querySelector(".items")
  document.querySelector("body").addEventListener("click", function(event){
    console.log("body got clicked, event.target is: ", event.target)
  })
  itemsUl.addEventListener("click", function(event){
    console.log("ul got clicked")
    if (event.target.className === "item"){ // clicked on an li and it bubbled up to the UL
      console.log("...because the li originally got clicked")
      deleteElement(event)
    } 
    else {
      // it's a click directly to the UL probably
    }
  })
  document.getElementById("taco").addEventListener("click", addEmojiToList);
  // document.querySelectorAll(".item").forEach(bindEventListenerToItem);
}
document.addEventListener("DOMContentLoaded", dclCallback)




// items