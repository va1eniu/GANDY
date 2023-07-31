import { getMicro , getProductos } from "./API.js";

document.addEventListener("DOMContentLoaded", iniciar);
document.addEventListener("DOMContentLoaded", all);
document.addEventListener("DOMContentLoaded", productos);

async function iniciar() {
    const datos = await getMicro();

    /* carrusel */

    // Carrusel1
    const tablas1 = document.getElementById("carousel1");
    if (datos.length > 0) {
        const { nombre, categoria, descripcion, imagen } = datos[0];
        tablas1.innerHTML = `
            <h1 class="h1 text-success"><b>${nombre}</b><img src="${imagen} " alt=""height="100" width="100"  class="rounded-circle"></h1>
            <h2>categoria: ${categoria}</h2>
            <p>${descripcion}</p>
            
        `;
    } else {
        tablas1.innerHTML = `<p>No hay datos disponibles.</p>`;
    }

    // Carrusel2
    const tablas2 = document.getElementById("carousel2");
    if (datos.length > 1) {
        const { nombre, categoria, descripcion, imagen } = datos[1];
        tablas2.innerHTML = `
            <h1 class="h1 text-success"><b>${nombre}</b> <img src="${imagen} " alt=""height="100" width="100"  class="rounded-circle"></h1>
            <h2>categoria: ${categoria}</h2>
            <p>${descripcion}</p>
           
        `;
    } else {
        tablas2.innerHTML = `<p>No hay suficientes datos disponibles.</p>`;
    }


    const tablas3 = document.getElementById("carousel3");
    if (datos.length > 2) {
        const { nombre, categoria, descripcion, imagen } = datos[2];
        tablas3.innerHTML = `
            <h1 class="h1 text-success"><b>${nombre}</b><img src="${imagen} " alt=""height="100" width="100"  class="rounded-circle"></h1>
            <h2>categoria: ${categoria}</h2>
            <p>${descripcion}</p>
        `;
    } else {
        tablas3.innerHTML = `<p>No hay suficientes datos disponibles.</p>`;
    }

/* tiendas */

    const tienda1 = document.getElementById("tienda1");
    if (datos.length > 4) {
        const { categoria, imagen } = datos[4];
        tienda1.innerHTML = `
            <a href="./microempresasALL.html"><img src="${imagen} " class="rounded-circle img-fluid border"></a>
            <h5 class="text-center mt-3 mb-3">${categoria} </h5>
            <p class="text-center"><a href="#" class="btn btn-success">view</a></p>
        `;
    } else {
        tienda1.innerHTML = `<p>No hay suficientes datos disponibles.</p>`;
    }



    const tienda2 = document.getElementById("tienda2");
    if (datos.length > 5) {
        const { categoria, imagen } = datos[5];
        tienda2.innerHTML = `
            <a href="./microempresasALL.html"><img src="${imagen} " class="rounded-circle img-fluid border"></a>
            <h5 class="text-center mt-3 mb-3">${categoria} </h5>
            <p class="text-center"><a href="#" class="btn btn-success">view</a></p>
        `;
    } else {
        tienda2.innerHTML = `<p>No hay suficientes datos disponibles.</p>`;
    }

    const tienda3 = document.getElementById("tienda3");
    if (datos.length > 6) {
        const { categoria, imagen } = datos[6];
        tienda3.innerHTML = `
            <a href="./microempresasALL.html"><img src="${imagen} " class="rounded-circle img-fluid border"></a>
            <h5 class="text-center mt-3 mb-3">${categoria} </h5>
            <p class="text-center"><a href="#" class="btn btn-success">view</a></p>
        `;
    } else {
        tienda3.innerHTML = `<p>No hay suficientes datos disponibles.</p>`;
    }

    
}


async function all() {
    const datos = await getMicro();
    const cardContainer = document.getElementById("card-container");

    datos.forEach((element, index) => {
        const { imagen, nombre, descripcion, categoria } = element;
        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "product-wap", "rounded-0", "small-card");
        card.innerHTML = `
            <div class="card rounded-0">
                <img class="card-img " src="${imagen}" >
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled">
                        <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                    </ul>
                </div>
            </div>
            <a href="shop-single.html" class="h3 text-decoration-none">${nombre}</a>
            <p>${descripcion}</p>
            <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li class="pt-2">
                    <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                    <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                    <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                    <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                    <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                </li>
            </ul>
            <ul class="list-unstyled d-flex justify-content-center mb-1">
                <li>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                </li>
            </ul>
            <p class="text-center mb-0">categoria: ${categoria}</p>
        `;

        cardContainer.appendChild(card);
    });
}


async function productos() {
    try {
        const datos = await getProductos();
        const cardContainer = document.getElementById("card-container");

        // Limpia el contenido del contenedor antes de agregar las tarjetas
        cardContainer.innerHTML = '';

        // Obtiene solo los primeros tres elementos de datos
        const primerosTresElementos = datos.splice(0, 3);
        
        primerosTresElementos.forEach((element, index) => {
            const { imagen, nombre, descripcion, categoria } = element;
            const card = document.createElement("div");
            card.classList.add("card", "mb-4", "product-wap", "rounded-0", "small-card");
            card.innerHTML = `
                <div class="card rounded-0">
                    <img class="card-img " src="${imagen}" >
                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul class="list-unstyled">
                            <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                            <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                            <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <a href="shop-single.html" class="h3 text-decoration-none">${nombre}</a>
                <p>${descripcion}</p>
                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li class="pt-2">
                        <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                        <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                        <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                        <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                        <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                </ul>
                <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-muted fa fa-star"></i>
                        <i class="text-muted fa fa-star"></i>
                    </li>
                </ul>
                <p class="text-center mb-0">categoria: ${categoria}</p>
            `;

            cardContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}







  








