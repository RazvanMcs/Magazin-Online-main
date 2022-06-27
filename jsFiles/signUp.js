const arrayUsers = [];
const signUpButton = document.querySelector(".subBut");
let contor=0;
signUpButton.addEventListener("click", addUsers);
function addUsers(){
    contor++;
    arrayUsers.push({
        id:contor,
        firstName:document.querySelector("#formFirstName").value,
        lastName:document.querySelector("#formLastName").value,
        email:document.querySelector("#formEmail").value,
        password:document.querySelector("#formPassword").value,
        city:document.querySelector("#formCity").value,
        country:document.querySelector("#formCountry").value
    })
    localStorage.setItem("users", JSON.stringify(arrayUsers));
}

