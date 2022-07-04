// document.addEventListener("DOMContentLoaded",()=>{
// define(function (require) {
//     const bcrypt = require('name');
// });
// require('dotenv').config();
// import bcryptjs, { genSalt, hash as _hash } from "bcryptjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// const yourData = require("./your.json");
const bcrypt = require("bcryptjs");

// let password="1234";
console.log(bcrypt);
// genSalt(10,(err,salt)=>{
//     _hash(password,salt,function(err,hash){
// // localStorage.setItem("Password",)
// console.log(password);
//     });
// })
// })
