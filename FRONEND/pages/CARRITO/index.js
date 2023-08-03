import { getProductos } from "../productos/API.js";

document.addEventListener("DOMContentLoaded", all);

async function all() {
  const datos = await getProductos();
  const cardContainer = document.getElementById("lista-productos"); 
  cardContainer.innerHTML = ""; 

  datos.forEach((element, index) => {
    const { _id, imagen, nombre, descripcion, categoria, precio } = element;
    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "product-wap", "rounded-0", "small-card");
    card.innerHTML = `
      <img src="${imagen}" class="card-img">
      <h5>${nombre}</h5>
      <p>${descripcion}</p>
      <p>categoria:${categoria}</p>
      <p>$<small class="precio">${precio}</small></p>
      <a href="#" class="button agregar-carrito" data-id="${_id}">Comprar</a>
    `;

    cardContainer.appendChild(card);
  });
}
