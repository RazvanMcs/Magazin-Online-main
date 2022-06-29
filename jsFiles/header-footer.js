const header = document.querySelector("header");
const footer = document.querySelector("footer");
fetch("/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
  });
fetch("/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

const credidentials = localStorage.getItem("curentUser");
setTimeout(() => {
const hideItems=document.getElementsByClassName("hide");
const showItems=document.getElementsByClassName("show");
function logOut(){
    localStorage.removeItem('curentUser');
    window.location.reload();
    credidentials='';
 }
// showItems.addEventListener("click", logOut);
showItems[0].addEventListener("click",logOut)
showItems[1].addEventListener("click",logOut)
  if (credidentials) {
    hideItems[0].style="display:none";
    hideItems[1].style="display:none";
    hideItems[2].style="display:none";
    hideItems[3].style="display:none";
    showItems[0].style="display:flex; cursor:pointer";
    showItems[1].style="display";
  }
}, 100);
