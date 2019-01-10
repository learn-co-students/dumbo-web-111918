
// // one
// let promise = fetch("https://dog.ceo/api/breeds/image/random")


// promise.then(function(response){
//   response.json().then(function(somethingUseful) {
//     console.log(somethingUseful)
//   })
// })


// //two

// function jsonParsingCallback(data) {
//   console.log(data)
// }

// function requestCallback(response){
//   response.json().then(jsonParsingCallback)
// }

// let promise = fetch("https://dog.ceo/api/breeds/image/random")

// promise.then(requestCallback)


// //three

// fetch("https://dog.ceo/api/breeds/image/random").then(function(response){
//   return response.json() // returns a promise
// }).then(function(data){
//   console.log(data)
// })

console.log("asdfasdfasd")


//four
fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => slapDogOnTheDom(data.message))

console.log("hiiiii")

function slapDogOnTheDom(url) {

  let imageThing = document.getElementById("pupper")
  // console.log(imageThing)
  imageThing.src = url

  console.log("slapped on the dom")
  // console.log(url)
}

console.log("hello from whatever")


// console.log("hello from before the fetch")

// //make the fetch
// let promise = fetch("https://dog.ceo/api/breeds/image/random");

// console.log("hello from before we attach a callback to the promise")

// 
// function firstPromiseCallback(somethingUseful){
//   console.log("hello from inside the callback we passed to the promise")

//   console.log(somethingUseful);
// }

// //pass the callback into then
// promise.then(firstPromiseCallback)

// // firstPromiseCallback()

// console.log("hello from after we attach a callback to the promise")


// // we can do other stuff down here!!!!! 
// // while we wait for the shower to get warm

// // let promise = new Promise(function(resolve, reject) {

// // })
