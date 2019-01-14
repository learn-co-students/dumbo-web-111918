let artId = 1;

function renderPixel(pixel, list){
  const li = document.createElement("li")
  li.style.background = pixel.color
  li.style.top = `${ pixel.y }px`
  li.style.left = `${ pixel.x }px`
  list.append(li) // list is defined on line 55
}

function dealWithPictureData(pictureData, list){
  // console.log(pictureData)
  list.innerHTML = ""
  pictureData.pixels.forEach(pixel => renderPixel(pixel, list))
}


document.addEventListener("DOMContentLoaded", function(){
  const pixelList = document.getElementById("art")
  const artsList = document.getElementById("arts")
  fetchPicture(pixelList, artId);
  fetchPictures(artsList);
  artsList.addEventListener("click", function(){
    if (event.target.classList.contains("art")) {
      fetchPicture(pixelList, event.target.dataset.id)
    }
  })
})

function fetchPictures(artsList) {
  fetch(`http://localhost:3000/pictures/`)
    .then(res => res.json())
    .then(data => {
      artsList.innerHTML = data.map(pic => `<li class="art" data-id="${ pic.id }">${ pic.id }</li>`).join("")
    })
}


function fetchPicture(list, artId){
  fetch(`http://localhost:3000/pictures/${ artId }`)
    .then(res => res.json())
    .then(data => dealWithPictureData(data, list))
}










