import {getCiclistas, postCiclistas, deleteCiclistas} from "./API.js";


function calcularTotal(datos) {
    let total = 0;
    for (const dato of datos) {
        total += parseInt(dato.cantidad);
    }
    return total;
}

function mostrarSumaTotal(datos) {
    const totalDonado = calcularTotal(datos);
    const sumaTotalElement = document.getElementById("suma-total");
    sumaTotalElement.textContent = totalDonado;
}

document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {
    try {
        const datos = await getCiclistas();
        console.log(datos);
        const tablas = document.querySelector("#insert");
        datos.forEach(element => {
            const { _id, nombre, fundacion, cantidad } = element;
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${_id}</td>
                <td>${nombre}</td>
                <td>${fundacion}</td>
                <td>${cantidad}</td>
                
               
                <th><div class="button-borders">
                <button class="primary-button delete" id="${_id}"> delete
                </button>
              </div></th>
              <style>
            `;
            tablas.appendChild(fila);
        });
        mostrarSumaTotal(datos);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}



//POST
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", datosPOST);

function datosPOST(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const fundacion = document.querySelector("#fundacion").value;
    const cantidad = document.querySelector("#cantidad").value;

    const data = {
        nombre,
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
    // Check if nombre, fundacion, and cantidad are not empty
    return data.nombre.trim() !== "" && data.fundacion.trim() !== "" && data.cantidad.trim() !== "";
}




//DELETE
const laTabla = document.querySelector("#insert");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Ciclistas = e.target.getAttribute("id");
        console.log(id_Ciclistas);
        const confir = confirm("¿Seguro que deseas eliminar el dato?");
        if(confir){
            deleteCiclistas(id_Ciclistas);
        }
    }
 
 }