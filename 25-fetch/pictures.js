let artId = 2;

let list;

function renderPixel(pixel){
  const li = document.createElement("li")
  li.style.background = pixel.color
  li.style.top = `${ pixel.y }px`
  li.style.left = `${ pixel.x }px`
  list.append(li) // list is defined on line 55
}

function dealWithPictureData(pictureData){
  console.log(pictureData)
  pictureData.pixels.forEach(renderPixel)
}

function formSubmit(e){
  e.preventDefault()
  const color = e.target.querySelector("#color").value;
  const x = e.target.querySelector("#x").value;
  const y = e.target.querySelector("#y").value;

  const pixel = {
    pixel: {
      picture_id: artId,
      x: x,
      y: y,
      color: color
    }
  };

  //optimisitic render here
  // renderPixel(pixel)

  const body = JSON.stringify(pixel);

  fetch(`http://localhost:3000/pixels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
    .then(res => res.json())
    .then(data => {
      // pessimistic rendering
      // this API returns a pixel object, so:
      renderPixel(pixel)
    })
  
}


document.addEventListener("DOMContentLoaded", function(){
  list = document.getElementById("art")
  document.getElementById("new-color-form").addEventListener("submit", formSubmit)
})


fetch(`http://localhost:3000/pictures/${ artId }`)
  .then(res => res.json())
  .then(data => dealWithPictureData(data))









