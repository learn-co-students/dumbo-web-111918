/* DOMContentLoaded */

document.addEventListener("DOMContentLoaded", function(){
  const movieList = document.querySelector(".js-movies")
  const detail = document.querySelector(".js-detail")
  const newButton = document.querySelector(".js-add-movie")
  const emptyState = detail.innerHTML
  addMoviesToList(movieList);
  delegateShowClick(movieList, detail);
  delegateDeleteClick(detail, movieList, emptyState);
  delegateFormSubmit(detail, movieList);
  delegateCastClicks(detail);
  delegateEditClick(detail);
  delegateEditFormSubmitClick(detail)
  newButton.addEventListener("click", function(event){ showNewMovieForm(detail) })
})

/* shared between update and delete */

function getMovieLiById(movieId) {
  return document.querySelector(`#movie-${ movieId }`)
}

/* shared between index and new */

function renderMovieListItem(movie, selected) {
  const movieListItem = document.createElement("li")
  movieListItem.id = `movie-${ movie.id }`;
  movieListItem.dataset.id = movie.id;
  movieListItem.className = "movie js-movie";
  movieListItem.innerText = movie.title;
  if (selected === true) selectThisMovie(movieListItem)
  return movieListItem;

  //      <li id="movie-${ movie.id }" data-id="${ movie.id }" class="movie js-movie">
  //        ${ movie.title }
  //      </li>
}


/* shared between new and show */

function deselectAllMovies() {
  const selected = document.querySelector(".selected")
  if (selected) selected.classList.remove("selected");
}

function selectThisMovie(element) {
  element.classList.add("selected")
}


/* shared between new and edit */

function writeCastMemberFormLi(name) {
  return `<li>
    <input type="text" class="js-movie-cast-member" name="movie-cast-member" value="${ name }"/>
    <button class="remove-from-cast">remove</button>
  </li>`
}

function writeForm(formTitle, movie) {
  const castLis = (movie.cast || [ "" ]).map(writeCastMemberFormLi).join("")
  console.log(castLis)
  return `<h2>${ formTitle }</h2>
    <form class="movie-form js-movie-form">
      <input id="movie-id" name="movie-id" type="hidden" value="${ movie.id }"/>
      <ul>
        <li>
          <label for="movie-title">Title</label>
          <input id="movie-title" name="movie-title" type="text" value="${ movie.title }" />
        </li>
        <li>
          <label for="movie-year">Year</label>
          <input id="movie-year" name="movie-year" type="number" value="${ movie.year }" />
        </li>
        <li class="cast-inputs-container">
          <label>Cast</label>
          <ul class="js-cast-inputs cast-inputs">
            ${ castLis }
          </ul>
          <button class="add-to-cast">add</button>
        </li>
      </ul>
      <input type="submit" />
    </form>`
}

function delegateCastClicks(detail) {
  detail.addEventListener("click", function(event){
    if (event.target.classList.contains("remove-from-cast")){
      event.preventDefault()
      event.target.parentNode.remove();
    }
    if (event.target.classList.contains("add-to-cast")){
      event.preventDefault()
      document.querySelector(".js-cast-inputs").innerHTML += writeCastMemberFormLi("")
    }
  })
}

/* shared between create and update */
function delegateFormSubmit(detail, movieList) {
  detail.addEventListener("submit", function(event){
    event.preventDefault();

    const movie = readForm(event.target)
    
    if (movie.id.length)
      5 //updateMovie(movie, detail)
    else
      newMovie(movie, detail, movieList)
  })
}

function readForm(form) {

  const id = form.querySelector("#movie-id").value;
  const title = form.querySelector("#movie-title").value
  const year = form.querySelector("#movie-year").value

  const cast = Array.from(form.querySelectorAll(".js-movie-cast-member")).map(input => input.value)

  return {
    id: id,
    title: title, 
    year: year,
    cast: cast
  }
}

/* index */

function slapMoviesOnTheDom(movies, movieList){
  const listItems = movies.map(renderMovieListItem)
  listItems.forEach(li => movieList.append(li))
}

function addMoviesToList(movieList){
  fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movies => slapMoviesOnTheDom(movies, movieList))
}


/* show */
function delegateShowClick(movieList, detail){
  movieList.addEventListener("click", function(event){
    if (event.target.classList.contains("js-movie")) {
      showMovie(event.target.dataset.id, event.target, detail)
    }
  })
}

function showMovie(movieId, clickedElement, detail) {
  deselectAllMovies()
  selectThisMovie(clickedElement)
  detail.classList.add("loading")

  fetch(`http://localhost:3000/movies/${ movieId }`)
    .then(res => res.json())
    .then(data => slapMovieOnTheDetail(data, detail))
}

function slapMovieOnTheDetail(movie, whereToSlapIt) {
  whereToSlapIt.classList.remove("loading")
  whereToSlapIt.dataset.id = movie.id
  const castLis = movie.cast.map(actor => `<li class="cast-member">${ actor }</li>`).join("")
  whereToSlapIt.innerHTML = `
    <h2><span class="js-title">${ movie.title }</span> (<span class="js-year">${ movie.year }</span>)</h2>
    <ul>
      ${ castLis }
    </ul>
    <button class="js-edit">Edit</button>
    <button data-id="${ movie.id }" class="js-delete danger">Delete</button>
  `
}

/*edit*/

function delegateEditClick(detail) {
  detail.addEventListener("click", function(event) {
    if (event.target.classList.contains("js-edit")) {
      showEditForm(detail)
    }
  })
}

function showEditForm(detail) {
  const title = detail.querySelector(".js-title").innerText
  const year = detail.querySelector(".js-year").innerText
  const id = detail.dataset.id;

  const movie = { 
    id: id, 
    title: title, 
    year: year 
  }
  detail.innerHTML = writeForm("Edit Movie", movie)
}

function delegateEditFormSubmitClick(detail) {
  detail.addEventListener("submit", function(event) {
    if (event.target.classList.contains("js-movie-form")) {
      patchIt(event.target)
    }
  })
}

function patchIt(form) {
  const id = 1;
  fetch(`http://localhost:3000/movies/${ id }`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "title": "Spice Wor",
      "year": 19970
    })
  }).then(res => res.json())
  .then(data => console.log(data))
}


// new

function showNewMovieForm(detail){
  const movie = {
    title: "",
    year: "",
    id: "",
  }
  detail.innerHTML = writeForm("New Movie", movie)
}

function newMovie(movie, detail, movieList) {
  fetch(`http://localhost:3000/movies/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  }).then(res => res.json())
    .then(movie => {
      slapMovieOnTheDetail(movie, detail)
      deselectAllMovies();
      movieList.append(renderMovieListItem(movie, true))
    })
}

/* delete */

function delegateDeleteClick(detail, movieList, emptyState) {
  detail.addEventListener("click", function(event){
    if (event.target.classList.contains("js-delete")) {
      deleteMovie(event.target.dataset.id, detail, emptyState)
    }
  })
}

function deleteMovie(movieId, detail, emptyState){
  fetch(`http://localhost:3000/movies/${ movieId }`, {
    method: "DELETE"
  }).then(() => scapeItOffTheDom(movieId, detail, emptyState))
}

function scapeItOffTheDom(movieId, detail, emptyState) {
  detail.innerHTML = emptyState;
  getMovieLiById(movieId).remove()
}