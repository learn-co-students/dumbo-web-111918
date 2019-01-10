
document.addEventListener("DOMContentLoaded", function(){

  let bg = document.querySelector(".art-background");

  for (let y = 0; y < 7; y++) {
    for (let x = 0; x < 7; x++) {
      const li = document.createElement("li");
      li.className = "bg-square"
      li.innerHTML = `x: ${ x }\r\ny: ${ y }`;
      bg.append(li);
    }
  }

});

