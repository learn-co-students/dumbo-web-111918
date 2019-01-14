let artId = 1

function renderPixel(pixel, list){
  const li = document.createElement("li")
  li.style.background = pixel.color
  li.style.top = `${ pixel.y }px`
  li.style.left = `${ pixel.x }px`
  list.append(li) // list is defined on line 55
}

function dealWithPictureData(pictureData, list){
  // console.log(pictureData)
  pictureData.pixels.forEach(pixel => renderPixel(pixel, list))
}


document.addEventListener("DOMContentLoaded", function(){
  const list = document.getElementById("art")
  fetchPictures(list);
})


function fetchPictures(list){
  fetch(`http://localhost:3000/pictures/${ artId }`)
    .then(res => res.json())
    .then(data => dealWithPictureData(data, list))
}










