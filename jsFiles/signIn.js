const utilizatori=JSON.parse(localStorage.getItem('users'));
const signInButton=document.querySelector('.logIn');
let signOutButton=document.querySelector(".logOut")
signInButton.addEventListener('click', logIn);
signOutButton.addEventListener('click', logOut);
let err=document.querySelector('.errorBox');
let curentUser=JSON.parse(localStorage.getItem("curentUser"));
let formLogIn=document.getElementsByClassName("form");
if(curentUser){
   formLogIn[0].style="display:none"
   signInButton.style="display:none"
   signOutButton.style="display:block"
}
function logIn(){
   const logInCredentials= utilizatori && utilizatori.find(utilizator=>utilizator.email===document.querySelector("#formEmail").value && utilizator.password===document.querySelector("#formPassword").value);
//    console.log(logInCredentials+'1');
   if(logInCredentials){
    document.location.href = "landingPage.html";
    localStorage.setItem("curentUser",JSON.stringify(logInCredentials));

   }else{
      err.innerHTML="Invalid User Name or Password"
   }
}
function logOut(){
   localStorage.removeItem('curentUser');
   window.location.reload();
}
