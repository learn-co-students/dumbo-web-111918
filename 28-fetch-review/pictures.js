let artId = 1;

function setXYAndColorOfPixelLi(li, pixel) {
  li.style.background = pixel.color
  li.style.top = `${ pixel.y }px`
  li.style.left = `${ pixel.x }px`
  li.dataset.x = pixel.x;
  li.dataset.y = pixel.y;
}

function renderPixel(pixel, list){
  const li = document.createElement("li")
  li.id = "pixel-" + pixel.id;
  // li.setAttribute("class", "pixel")
  // li.className = "pixel"
  li.classList.add("pixel")
  li.classList.add("graham")
  setXYAndColorOfPixelLi(li, pixel)
  li.dataset.id = pixel.id;
  list.append(li) // list is defined on line 55
}

function dealWithPictureData(pictureData, list){
  // console.log(pictureData)
  list.innerHTML = ""
  pictureData.pixels.forEach(pixel => renderPixel(pixel, list))
}


function setUpFormPrePopulation(pixelList){
  pixelList.addEventListener("click", function(event){
    if (event.target.classList.contains("pixel")) {
      document.querySelector("#new-color-form").style.display = "block";
      document.querySelector("#color").value = event.target.style.backgroundColor
      // drop downs (both)
      document.querySelector("#id").value = event.target.dataset.id;
      document.querySelector("#x").value = event.target.dataset.x;
      document.querySelector("#y").value = event.target.dataset.y;
    }
  })
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
  setUpFormPrePopulation(pixelList)
  const form = document.getElementById("new-color-form")
  setUpFormSubmit(form)
})

function setUpFormSubmit(form){
  form.addEventListener("submit", function(event){
    event.preventDefault()
    const id = form.querySelector("#id").value
    const x = document.querySelector("#x").value
    const y = document.querySelector("#y").value

    const color = document.querySelector("#color").value

    const pixel = {
      x, y, color: color
    }

    fetch(`http://localhost:3000/pixels/${ id }`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Cookie": "HI MOM"
      },
      body: JSON.stringify(pixel)
    })
    .then(function(res) { 
      return res.json() //a promise
     })
    .then(function(data) {
      const li = document.getElementById("pixel-" + data.id)
      setXYAndColorOfPixelLi(li, data)
      document.querySelector("#new-color-form").style.display = "none"
    })
  })
}

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










