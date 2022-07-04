const carusel1 = document.querySelector(".containerCarusel1");
const carusel2 = document.querySelector(".containerCarusel2");
fetch("/carusel.html")
  .then((res) => res.text())
  .then((data) => {
    carusel1.innerHTML = data;
    carusel2.innerHTML = data;
  });
setTimeout(() => {
  let caruselTitle = document.getElementsByClassName("title");
  let caruselSubTitle = document.getElementsByClassName("subTitle");
  caruselTitle[0].textContent = "FORD-SINCE 1903";
  caruselTitle[1].textContent = "MAZDA COLECTION";
  caruselSubTitle[0].textContent = "HAVE A LOOK";
  caruselSubTitle[1].textContent = "HAVE A LOOK";
}, 100);
// <-------------------------->
setTimeout(() => {
  const address = "jsFiles/productList.json";
  let moreHeaders = document.querySelectorAll(".clickable");
  let moreCarusel1 = document.querySelectorAll(".caruselA");
  let listaProduse = [];
  let listaProduse1 = [];
  let containerPoza = document.getElementsByClassName("slide");
  let contor = 0;
  let inapoi = document.getElementsByClassName("a");
  let inainte = document.getElementsByClassName("b");
  let carName = document.getElementsByClassName("numeProdus");
  inainte[0].addEventListener("click", buttonInainte);
  inapoi[0].addEventListener("click", buttonInapoi);
  inainte[1].addEventListener("click", buttonInainte1);
  inapoi[1].addEventListener("click", buttonInapoi1);
  function getData() {
    fetch(address)
      .then((raspuns) => {
        return raspuns.json();
      })
      .then((date) => {
        let dataCars = date.cars;
        listaProduse.push(
          dataCars.filter((dataCars) => dataCars.firm === "ford")
        );
        listaProduse1.push(
          dataCars.filter((dataCars) => dataCars.firm === "mazda")
        );
        buttonInainte();
        buttonInapoi();
        containerPoza[0].style.backgroundImage = `url(${listaProduse[0][0].imagineProdus[0]})`;
        carName[0].innerHTML = listaProduse[0][0].productName;
        containerPoza[1].style.backgroundImage = `url(${listaProduse1[0][0].imagineProdus[0]})`;
        carName[1].innerHTML = listaProduse1[0][0].productName;
        moreCarusel1[0].setAttribute(
          "href",
          `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][0].productName}`
        );
        moreCarusel1[1].setAttribute(
          "href",
          `http://127.0.0.1:5501/productPage.html?name=${listaProduse1[0][0].productName}`
        );
        moreHeaders[0].setAttribute(
          "href",
          `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][0].productName}`
        );
        moreHeaders[1].setAttribute(
          "href",
          `http://127.0.0.1:5501/productPage.html?name=${listaProduse1[0][0].productName}`
        );
        console.log(moreHeaders[1])
      });
  }
  function buttonInapoi() {
    if (contor > 0) {
      contor--;
      containerPoza[0].style.backgroundImage = `url(${listaProduse[0][contor].imagineProdus[0]})`;
      carName[0].innerHTML = listaProduse[0][contor].productName;
      moreCarusel1[0].setAttribute(
        "href",
        `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][contor].productName}`
      );
    } else {
      contor = listaProduse[0].length - 1;
      containerPoza[0].style.backgroundImage = `url(${listaProduse[0][contor].imagineProdus[0]})`;
      carName[0].innerHTML = listaProduse[0][contor].productName;
      moreCarusel1[0].setAttribute(
        "href",
        `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][contor].productName}`
      );
    }
  }
  function buttonInainte() {
    if (contor < listaProduse[0].length - 1) {
      contor++;
      containerPoza[0].style.backgroundImage = `url(${listaProduse[0][contor].imagineProdus[0]})`;
      carName[0].innerHTML = listaProduse[0][contor].productName;
      moreCarusel1[0].setAttribute(
        "href",
        `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][contor].productName}`
      );
    } else {
      contor = 0;
      containerPoza[0].style.backgroundImage = `url(${listaProduse[0][contor].imagineProdus[0]})`;
      carName[0].innerHTML = listaProduse[0][contor].productName;
      moreCarusel1[0].setAttribute(
        "href",
        `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][contor].productName}`
      );
    }
  }
  function buttonInapoi1() {
    if (contor > 0) {
      contor--;
      containerPoza[1].style.backgroundImage = `url(${listaProduse1[0][contor].imagineProdus[0]})`;
      carName[1].innerHTML = listaProduse1[0][contor].productName;
      moreCarusel1[1].setAttribute(
        "href",
        `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][contor].productName}`
      );
    } else {
      contor = listaProduse1[0].length - 1;
      containerPoza[1].style.backgroundImage = `url(${listaProduse1[0][contor].imagineProdus[0]})`;
      carName[1].innerHTML = listaProduse1[0][contor].productName;
      moreCarusel1[1].setAttribute(
        "href",
        `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][contor].productName}`
      );
    }
  }
  function buttonInainte1() {
    if (contor < listaProduse[0].length - 1) {
      contor++;
      carName[1].innerHTML = listaProduse1[0][contor].productName;
      containerPoza[1].style.backgroundImage = `url(${listaProduse1[0][contor].imagineProdus[0]})`;
      moreCarusel1[1].setAttribute(
        "href",
        `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][contor].productName}`
      );
    } else {
      contor = 0;
      carName[1].innerHTML = listaProduse1[0][contor].productName;
      containerPoza[1].style.backgroundImage = `url(${listaProduse1[0][contor].imagineProdus[0]})`;
      moreCarusel1[1].setAttribute(
        "href",
        `http://127.0.0.1:5501/productPage.html?name=${listaProduse[0][contor].productName}`
      );
    }
  }
  getData();
}, 200);
