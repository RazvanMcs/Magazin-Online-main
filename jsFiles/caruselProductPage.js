const carusel1 = document.querySelector(".containerCarusel1");
fetch("/carusel.html")
  .then((res) => res.text())
  .then((data) => {
    carusel1.innerHTML = data;
  });
setTimeout(() => {
  let caruselTitle = document.getElementsByClassName("title");
  let caruselSubTitle = document.getElementsByClassName("subTitle");
  caruselTitle[0].innerHTML = "FORD-SINCE 1903";
  caruselSubTitle[0].innerHTML = "HAVE A LOOK";
}, 100);
// <-------------------------->
setTimeout(() => {
  const address = "jsFiles/productList.json";
  let listaProduse = [];
  let containerPoza = document.getElementsByClassName("slide");
  let contor = 0;
  let inapoi = document.getElementsByClassName("a");
  let inainte = document.getElementsByClassName("b");
  let carName = document.getElementsByClassName("numeProdus");
  inainte[0].addEventListener("click", buttonInainte);
  inapoi[0].addEventListener("click", buttonInapoi);
  function getData() {
    fetch(address)
      .then((raspuns) => {
        return raspuns.json();
      })
      .then((date) => {
        let dataCars=date.cars;
        listaProduse.push(dataCars.filter(dataCars=>dataCars.firm==='dacia'));
        buttonInainte();
        buttonInapoi();
        containerPoza[0].style.backgroundImage = `url(${listaProduse[0][0].imagineProdus[0]})`;
        carName[0].innerHTML = listaProduse[0][0].productName;
      });
  }
  function buttonInapoi() {
    if (contor > 0) {
      contor--;
      containerPoza[0].style.backgroundImage = `url(${listaProduse[0][contor].imagineProdus[0]})`;
      carName[0].innerHTML = listaProduse[0][contor].productName;
    } else {
      contor = listaProduse[0].length - 1;
      containerPoza[0].style.backgroundImage = `url(${listaProduse[0][contor].imagineProdus[0]})`;
      carName[0].innerHTML = listaProduse[0][contor].productName;
    }
  }
  function buttonInainte() {
    if (contor < listaProduse[0].length - 1) {
      contor++;
      containerPoza[0].style.backgroundImage = `url(${listaProduse[0][contor].imagineProdus[0]})`;
      carName[0].innerHTML = listaProduse[0][contor].productName;
    } else {
      contor = 0;
      containerPoza[0].style.backgroundImage = `url(${listaProduse[0][contor].imagineProdus[0]})`;
      carName[0].innerHTML = listaProduse[0][contor].productName;
    }
  }
  getData();
}, 200);
