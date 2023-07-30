     // Definir un arreglo de las imágenes a mostrar
     let imagenes = ["/img/cepiloo.png", "/img/jabon-de-arnica.webp", "/img/galletas.png"];
     let indice = 0;
 
     // Función para cambiar la imagen
     function cambiarImagen() {
       // Obtener los elementos de imagen por su clase
       var imagenes = document.getElementsByClassName("imagenes");
 
       // Ocultar la imagen actual
       imagenes[indice].classList.remove("imagen-activa");
 
       // Incrementar el índice para la siguiente imagen en el arreglo
       indice++;
 
       // Si el índice está fuera de los límites del arreglo, reiniciarlo
       if (indice == imagenes.length) {
         indice = 0;
       }
 
       // Mostrar la siguiente imagen con una transición de desvanecimiento suave
       imagenes[indice].classList.add("imagen-activa");
     }
 
     // Llamar a la función cambiarImagen() cada 3 segundos
     setInterval(cambiarImagen, 3000);


     const video = document.getElementById('myVideo');

// Agrega un evento de click al video
video.addEventListener('click', () => {
  // Verifica si la vista PiP es compatible con el navegador
  if ('pictureInPictureEnabled' in document) {
    // Solicita la vista PiP para el video
    video.requestPictureInPicture();
  }
});
