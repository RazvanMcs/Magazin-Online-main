const utilizatori=JSON.parse(localStorage.getItem('users'));
const signInButton=document.querySelector('.subBut');
signInButton.addEventListener('click', logIn);
let err=document.querySelector('.errorBox');
function logIn(){
   const logInCredentials= utilizatori && utilizatori.find(utilizator=>utilizator.email===document.querySelector("#formEmail").value && utilizator.password===document.querySelector("#formPassword").value);
//    console.log(logInCredentials+'1');
   if(logInCredentials){
    document.location.href = "landingPage.html";
    localStorage.setItem("curentUser",JSON.stringify(logInCredentials));
   }else{
    console.log("aa")
      err.innerHTML="Invalid User Name or Password"
   }
}
// err.innerHTML="Invalid User Name or Password"