const header=document.querySelector("header");
const footer=document.querySelector("footer");
fetch("/header.html").then(res=>res.text()).then(data=>{
    header.innerHTML=data;
})
fetch("/footer.html").then(res=>res.text()).then(data=>{
    footer.innerHTML=data;
})