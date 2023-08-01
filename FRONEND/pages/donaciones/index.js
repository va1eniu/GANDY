
import {getCiclistas, postCiclistas, deleteCiclistas, getCiclistasOne, updCiclistasOne} from "./API.js";


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

// GET Ciclistas
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
                <td>
                    <button class="btn btn-danger delete" id="${_id}">ELIMINAR</button>
                </td>
                <td>
                    <button class="btn btn-warning editar" data-bs-toggle="modal" data-bs-target="#staticBackdropEDIT" id="${_id}">EDITAR</button>
                </td>
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

function datosPOST(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const fundacion = document.querySelector("#fundacion").value;
    const cantidad = document.querySelector("#cantidad").value;

    console.log(nombre);

    const data = {
        nombre,
        fundacion,
        cantidad
     
    }
    console.log(data);

    if(validate(data)){
        postCiclistas(data);
        alert("Los datos se han ingresado satisfactoriamente");
    }else {
        alert("no pasa");
    }
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
 
    /// patch

    if(e.target.classList.contains("editar")){
        e.preventDefault();
        const id_Ciclistas = e.target.getAttribute("id");
        console.log(id_Ciclistas);
        const datos = await getCiclistasOne(id_Ciclistas);
        const nombre = document.querySelector("#nombre2");
        const nombre2 = document.querySelector("#nombre3");
        const nombre3 = document.querySelector("#nombre4");
      
        nombre.value = datos.nombre;
      

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updCiclistas);
        function updCiclistas(e){
            e.preventDefault();
            const nombre = document.querySelector("#nombre2").value;
            const nombre2 = document.querySelector("#nombre3").value;
            const nombre3 = document.querySelector("#nombre4").value;
         
            
            const datosUpd = {
                nombre,
                nombre2,
                nombre3
               
            }

            if(validate(datosUpd)){
                updCiclistasOne(datosUpd, id_Ciclistas);
            }
        }
    }
}

function validate(objeto){
    return Object.values(objeto).every(element => element != "");
}
