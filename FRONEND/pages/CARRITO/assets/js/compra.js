const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito2 = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    carrito2.addEventListener('click', (e)=>{compra.eliminarProducto(e)});
    compra.calcularTotal();
    procesarCompraBtn.addEventListener('click', procesarCompra);
}

emailjs.init('KEuk_KGY4cjV11-c6');

cargarEventos();

function cargarEventos() {
  document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
  carrito2.addEventListener('click', (e) => { compra.eliminarProducto(e) });
  compra.calcularTotal();
  procesarCompraBtn.addEventListener('click', procesarCompra);
}

function procesarCompra(e) {
  e.preventDefault();
  if (compra.obtenerProductosLocalStorage().length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No hay productos, selecciona alguno',
      timer: 2500,
      showConfirmButton: false
    }).then(function () {
      window.location = "productos.html";
    });
  } else if (cliente.value === '' || correo.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese todos los campos requeridos',
      timer: 2500,
      showConfirmButton: false
    });
  } else {
    const serviceID = 'service_pcf463g'; 
    const templateID = 'template_n43nm9h'; 

    emailjs.sendForm(serviceID, templateID, 'procesar-pago')
      .then(() => {
        const cargandoGif = document.querySelector('#cargando');
        const enviado = document.createElement('img');
        enviado.src = 'assets/img/mail.gif';
        enviado.style.display = 'block';
        enviado.width = '150';

        cargandoGif.style.display = 'block';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(() => {
          cargandoGif.style.display = 'none';
          enviado.remove();
          compra.vaciarLocalStorage();
          window.location = "productos.html";
        }, 2500);

      })
      .catch((err) => {
        btn.value = 'Realizar compra';
        alert(JSON.stringify(err));
      });
  }
}

