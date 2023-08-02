
     let imagenes = ["/img/cepiloo.png", "/img/jabon-de-arnica.webp", "/img/galletas.png"];
     let indice = 0;
 
  
     function cambiarImagen() {
   
       var imagenes = document.getElementsByClassName("imagenes");
 
  
       imagenes[indice].classList.remove("imagen-activa");

       indice++;

       if (indice == imagenes.length) {
         indice = 0;
       }
 
 
       imagenes[indice].classList.add("imagen-activa");
     }
 
    
     setInterval(cambiarImagen, 3000);


     const video = document.getElementById('myVideo');


video.addEventListener('click', () => {
  
  if ('pictureInPictureEnabled' in document) {
   
    video.requestPictureInPicture();
  }
});
