document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", datosPOST);
});

function datosPOST(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const fundacion = document.querySelector("#fundacion").value;
    const cantidad = document.querySelector("#cantidad").value;

    const data = {
        nombre,
        email,
        fundacion,
        cantidad
    };

    if (validate(data)) {
        postCiclistas(data);
        alert("Los datos se han ingresado satisfactoriamente");
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function validate(data) {
  
    return data.nombre.trim() !== "" && data.email.trim() !== "" && data.fundacion.trim() !== "" && data.cantidad.trim() !== "";
}
