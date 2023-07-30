import { getMicro } from "./API.js";

document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {
    const datos = await getMicro();

    // Carrusel1
    const tablas1 = document.getElementById("carousel1");
    if (datos.length > 0) {
        const { nombre, categoria, descripcion } = datos[0];
        tablas1.innerHTML = `
            <h1 class="h1 text-success"><b>${nombre}</b></h1>
            <h2>categoria: ${categoria}</h2>
            <p>${descripcion}</p>
        `;
    } else {
        tablas1.innerHTML = `<p>No hay datos disponibles.</p>`;
    }

    // Carrusel2
    const tablas2 = document.getElementById("carousel2");
    if (datos.length > 1) {
        const { nombre, categoria, descripcion } = datos[1];
        tablas2.innerHTML = `
            <h1 class="h1 text-success"><b>${nombre}</b></h1>
            <h2>categoria: ${categoria}</h2>
            <p>${descripcion}</p>
        `;
    } else {
        tablas2.innerHTML = `<p>No hay suficientes datos disponibles.</p>`;
    }


    const tablas3 = document.getElementById("carousel3");
    if (datos.length > 2) {
        const { nombre, categoria, descripcion } = datos[2];
        tablas3.innerHTML = `
            <h1 class="h1 text-success"><b>${nombre}</b></h1>
            <h2>categoria: ${categoria}</h2>
            <p>${descripcion}</p>
        `;
    } else {
        tablas3.innerHTML = `<p>No hay suficientes datos disponibles.</p>`;
    }
}

