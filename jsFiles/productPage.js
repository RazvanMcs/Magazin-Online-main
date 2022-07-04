const searchBar = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");
let urlString = window.location;
let url = new URL(urlString);
let urlName = url.searchParams.get("name");
searchBar.value = urlName;
const address = "jsFiles/productList.json";
let selectedProduct = [];
let bigImg = document.querySelector(".bigImg");
let smallImg = document.querySelector(".smallImg");
let imgArray;
let details = document.querySelector("#details");
let info = document.querySelector("#infoStats");
let tabelBody=document.querySelector("#infoStats")
function getData() {
  fetch(address)
    .then((raspuns) => {
      return raspuns.json();
    })
    .then((date) => {
      let dataCars = date.cars;
      selectedProduct.push(
        dataCars.filter((dataCars) => dataCars.productName === urlName)
      );
      imgArray = selectedProduct[0][0].imagineProdus;
      //   console.log(imgArray);
      console.log(selectedProduct);
      printData();
    });
}
getData();
function printData() {
  for (let i = 0; i <= imgArray.length; i++) {
    if (i === 0) {
      let imgCreate = document.createElement("img");
      imgCreate.setAttribute("src", imgArray[i]);
      bigImg.appendChild(imgCreate);
    } else {
      let imgCreate = document.createElement("img");
      imgCreate.setAttribute("src", imgArray[i - 1]);
      imgCreate.setAttribute("alt", "carPic");
      smallImg.appendChild(imgCreate);
      imgCreate.style.cursor = "pointer";
      imgCreate.addEventListener("click", () => {
        bigImg.innerHTML = "";
        let imgCreate = document.createElement("img");
        imgCreate.setAttribute("src", imgArray[i - 1]);
        bigImg.appendChild(imgCreate);
      });
    }
  }
  let productName = document.querySelector(".titleProduct");
  productName.textContent = urlName;
  let productPrice = document.querySelector(".price");
  productPrice.textContent = selectedProduct[0][0].price + " Euro";
  details.textContent=selectedProduct[0][0].details
  let arrInfo=selectedProduct[0][0].infoStats.split("/")
  for (let i = 0; i < arrInfo.length; i+=2) {
    let tableRow=document.createElement('tr')
    let th=document.createElement('th')
    let td=document.createElement('td');
    th.textContent=arrInfo[i];
    td.textContent=arrInfo[i+1];
    tabelBody.appendChild(tableRow);
    tableRow.appendChild(th)
    tableRow.appendChild(td)
    tableRow.style.border="1px solid"
  }
}
