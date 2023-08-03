import { getProductos } from "./API.js";

document.addEventListener("DOMContentLoaded", all);

async function all() {
    const datos = await getProductos();
    
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 

    datos.forEach((element, index) => {
        const { _id, imagen, nombre, descripcion, categoria, precio } = element;
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
            <p class="text-center mb-0 precio">precio: ${precio}</p>
      <a href="#" class="button comprar-producto" data-id="${_id}">Comprar</a>
        `;

        cardContainer.appendChild(card);
    });
}


