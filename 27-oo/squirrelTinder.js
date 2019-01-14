
const squirrels = [
  "Melba", 
  "Bartholomew", 
  "Etienne", 
  "Bob", 
  "Chad"
]

document.addEventListener("DOMContentLoaded", function(){
  squirrelList = new SquirrelList(squirrels)
  document.querySelector(".currentSquirrel").innerHTML = squirrelList.random().render()
});


