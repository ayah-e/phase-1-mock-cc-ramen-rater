// write your code here

///when page loads request the data using FETCH////
document.addEventListener("DOMContentLoaded", getRamenData);

////fetch request////

function getRamenData() {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    //.then(ramenData => console.log(ramenData));
    ///got back an array of data so this works! noice
    .then((ramenData) => {
        ramenName.textContent =ramenData[0].name;
        restaurant.textContent = ramenData[0].restaurant;
        detailImage.src = ramenData[0].image;
        rating.textContent = ramenData[0].rating;
        comment.textContent = ramenData[0].comment;
        ramenData.forEach(renderRamenMenu)

    });
}
    const ramenMenu = document.querySelector("#ramen-menu"); //grabbed div

    const ramenName = document.querySelector("#ramen-detail > h2"); 
    
    const restaurant = document.querySelector("#ramen-detail > h3");
    
    const detailImage = document.querySelector("#ramen-detail > img");
    
    const rating = document.querySelector("body > p:nth-child(5)");
    
    const comment = document.querySelector("#comment-display");

////put this stuff into the div #ramen-menu////
function renderRamenMenu(ramen) {

  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image; //dot notation to get the src from the fetched array

  ramenImage.addEventListener("click", (e) => {
    //{console.log("clicked")}
    ramenName.textContent = `${ramen.name}`;
    restaurant.textContent = `${ramen.restaurant}`;
    detailImage.src = `${ramen.image}`;
    rating.textContent = `${ramen.rating} / 10`;
    comment.textContent = `${ramen.comment}`;
  });

  ramenMenu.appendChild(ramenImage); ///YAY it worked!!! shows up on the screen hehe
  ///img elements show up in div in elements on the browser good job
}

//create new ramen POST
function createRamen(newRamen) {
  fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRamen),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

///form stuff///

const form = document.querySelector("#new-ramen");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newRamen = {
    name: e.target["name"].value,
    restaurant: e.target["restaurant"].value,
    image: e.target["image"].value,
    rating: e.target["rating"].value,
    comment: e.target["new-comment"].value,
  };
  renderRamenMenu(newRamen);
  createRamen(newRamen);
});