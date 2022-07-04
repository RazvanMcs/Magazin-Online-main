const landingSearch = document.querySelector(".landingSearch");
const landingSearchButton = document.querySelector(".searchBtn");
landingSearchButton.addEventListener("click", getSearchData);
let searchData = "";
let selectedData=[];
function getSearchData() {
  searchData = landingSearch.value;
  localStorage.setItem("userSearch", JSON.stringify(searchData));
}
function dropDown(){
  let target=document.querySelectorAll(".selection");
  for (let iterator = 0; iterator < target.length; iterator++) {
    target.item(iterator).children[0].addEventListener("click", saveToLocal=>{
      localStorage.setItem("selectedDataLocal",target.item(iterator).children[0].text)
    })
  } 
}
setTimeout(() => {
  dropDown();  
}, 100);
setTimeout(() => {
window.localStorage.removeItem('selectedDataLocal');
  
}, 1000);
