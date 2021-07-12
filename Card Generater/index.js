var name1 = "";
var course = "";
var author = "";
var arr = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
];
console.log(arr[Math.floor(Math.random() * arr.length)]);
var isLoading = true;
function createCard() {
  console.log("aagya");
  name1 = document.getElementById("name").value;
  course = document.getElementById("course").value;
  author = document.getElementById("author").value;
  if (name1 === "" || course === "" || author === "") {
    alert("Please fill all the fields");
    return;
  }
  document.getElementById("loading").innerHTML =
    '<h1 class="fun">Loading...</h1>';
  document.getElementById("name").value = "";
  document.getElementById("course").value = "";
  document.getElementById("author").value = "";
  const add = setTimeout(() => {
    document.getElementById("cards").innerHTML += `<div class="container">
          <img src=${
            arr[Math.floor(Math.random() * arr.length)]
          } class=cardImage>
          <div class="three">
          <span class="flexi">
            <h4>Name: </h4>
            <p>${name1}</p>
          </span>
          <span class="flexi">
            <h4>Course: </h4>
            <p>${course}</p>
          </span>
          <span class="flexi">
            <h4>Author: </h4>
            <p>${author}</p>
          </span>
          </div>
        </div> 
        `;
    document.getElementById("loading").innerHTML = "";
  }, 1000);
}
