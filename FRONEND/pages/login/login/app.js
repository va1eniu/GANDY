import { postLogin } from "./API/API.js";

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", validarUsuario);

function validarUsuario(e){
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const datos = {
        email,
        password
    }

    if(validate(datos)){
        postLogin(datos);
    }else{
        alert("Usuario no valido");
    }
}

function validate(objeto){
    return Object.values(objeto).every(element => element !== "");
}