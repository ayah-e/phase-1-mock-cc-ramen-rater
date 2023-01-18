function getRamenData() {
fetch(" http://localhost:3000/ramens")
  .then(response => response.json())
  //.then(data =>console.log(data))
  .then(data => renderRamens(data))
}

const ramenMenu = document.querySelector("#ramen-menu");

//ramen details////
const ramenImage = document.querySelector("#ramen-detail > img")
const ramenName = document.querySelector("#ramen-detail > h2")
const ramenRestaurant = document.querySelector("#ramen-detail > h3")
const ramenRating = document.querySelector("#rating-display")
const ramenComment = document.querySelector("#comment-display")


function renderRamens(ramens) {
  ramens.forEach(ramen => {
    const menuImage = document.createElement("img"); 
    menuImage.src = ramen.image;
    ramenMenu.appendChild(menuImage); 
    menuImage.addEventListener("click", (e) => {
      ramenImage.src = ramen.image
      ramenName.textContent = ramen.name
      ramenRestaurant.textContent = ramen.restaurant
      ramenRating.textContent = ramen.rating
      ramenComment.textContent = ramen.comment
    })
  }
)}

function postRamen(){
  const ramenForm = document.querySelector("#new-ramen");
  ramenForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newRamen = {
      image: e.target.image.value, //targets the input and gets value from it
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      rating: e.target.rating.value,
      comment: e.target["new-comment"].value,
    }
    // console.log(newRamen);
    renderRamens([newRamen]) //put newRamen in brackets because .forEach takes an array
  })
}

postRamen();


getRamenData();




