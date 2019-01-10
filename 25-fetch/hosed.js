// let art;

// function drawPixel(pixel) {
//   const li = document.createElement("li")
//   li.className = "square";
//   li.dataset.id = pixel.id
//   li.style.background = pixel.color;
//   li.style.top = `${ pixel.y }px`
//   li.style.left = `${ pixel.x }px`
//   art.append(li)
// }

// function drawPicture(pictureData){
//   // console.log(pictureData)
//   pictureData.pixels.forEach(drawPixel)
// }

// document.addEventListener("DOMContentLoaded", function(){
//   art = document.getElementById("art")
//   fetch(`http://localhost:3001/pictures/${ artId }`).then(res => res.json()).then(data => drawPicture(data))

//   document.getElementsByTagName("form")[0].addEventListener("submit", function(e){
//     e.preventDefault();

//     makeNewPixel({ 
//       pixel: {
//         picture_id: artId,
//         color: e.target.querySelector("#color").value,
//         x: e.target.querySelector("#x").value,
//         y: e.target.querySelector("#y").value
//       }
//     }, drawPixel)
//   })

//   document.getElementById("art").addEventListener("click", function(e){
//     if (e.target.className === "square")
//       destroyPixel(e.target.dataset.id, function(){
//         e.target.remove();
//       })
//   })


// });


// function makeNewPixel(pixel, callback){
//   fetch("http://localhost:3001/pixels", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//       // "Accept: application/json"
//     },
//     body: JSON.stringify(pixel)
//   }).then(res => res.json()).then(data => callback(data))
// }

// function destroyPixel(id, callback){
//   fetch(`http://localhost:3000/pixels/${ id }`, {
//     method: "DELETE"
//   }).then(data => callback())
// }
