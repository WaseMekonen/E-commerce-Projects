let cardContainer = document.getElementById("cards-container");
console.log(cardContainer);


for(let i=0; i<products.length; i++){
  if(products[i].category=="smartphones & tablets"){
    cardContainer.innerHTML += `<div class="card">
    <div class="image" style="background-image: url(${products[i].image[0]})"></div>
    <div class="details">
      <h4>${products[i].name}</h4>
      <p>${products[i].description}</p>
      <div class="card-bottom">
        <button>add to cart</button>
        <span>${products[i].price}$</span>
      </div>
    </div>
    </div>`;
  }
}
