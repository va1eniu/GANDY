//Envio Formulario Contacto
    emailjs.init('KEuk_KGY4cjV11-c6')
    const btn = document.getElementById('button-contacto');

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    

    const serviceID = 'service_pcf463g';
    const templateID = 'template_8cdx7zh';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {

            Swal.fire({
                icon: 'success',
                title: 'Se envió el mensaje',
                timer: 2500,
                showConfirmButton: false
              })

        window.location = "contacto.html";

        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });
    });


