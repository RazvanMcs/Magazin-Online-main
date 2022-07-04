let containerProducts = document.querySelector(".productsListing");
const address = "jsFiles/productList.json";
let arrProduse = [];
let button = document.querySelector(".searchBtn");
let searchField=document.querySelector(".searchField")
button.addEventListener('click', sortByName)
let asc=document.querySelector(".asc")
let desc=document.querySelector(".desc")
asc.addEventListener("click", sortAsc);
desc.addEventListener("click", sortDesc);
if(localStorage.getItem('userSearch')){
searchField.value=JSON.parse(localStorage.getItem('userSearch'))
localStorage.removeItem("userSearch")
}
fetch(address)
  .then((raspuns) => {
    return raspuns.json();
  })
  .then((date) => {
    arrProduse.push(date);
    printToPage(arrProduse[0].cars);
    console.log(arrProduse[0].cars)
  });
  function sortByName(){
    containerProducts.innerHTML="";
    let arrByName=arrProduse[0].cars.filter(produs=>produs.productName===searchField.value)
    console.log(searchField.value)
    printToPage(arrByName)
  }
  function sortAsc() {
    containerProducts.innerHTML = "";
    arrProduse[0].cars.sort((a, b) => {
      return a.price - b.price;
    });
    printToPage(arrProduse[0].cars);
  }
  function sortDesc() {
    containerProducts.innerHTML = "";
    arrProduse[0].cars.sort((b, a) => {
      return a.price - b.price;
    });
    printToPage(arrProduse[0].cars);
  }
function printToPage(array) {
    for (let i = 0; i < array.length; i++) {
      let containerElement = document.createElement("div");
      let namePrice = document.createElement("div");
      let cartMore = document.createElement("div");
      containerElement.classList.add("background");
      cartMore.classList.add("cartnmore");
      namePrice.classList.add("namenprice");
      containerElement.style.backgroundImage = `url('${array[i].imagineProdus[0]}')`;
      let productName = document.createElement("p");
      let productPrice = document.createElement("p");
      let showMore = document.createElement("a");
      let addToCart = document.createElement("button");
      showMore.setAttribute(
        "href",
        "http://127.0.0.1:5501/productPage.html?name=" +
        array[i].productName +
          ""
      );
      showMore.textContent = "Show More";
      addToCart.textContent = "Add to cart";
      productName.textContent = array[i].productName;
      productPrice.textContent = array[i].price;
      cartMore.appendChild(showMore);
      cartMore.appendChild(addToCart);
      namePrice.appendChild(productName);
      namePrice.appendChild(productPrice);
      containerProducts.appendChild(containerElement);
      containerElement.appendChild(cartMore);
      containerElement.appendChild(namePrice);
    }
  }

