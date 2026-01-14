function handleContactFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            swal({
                title: "Tu mensaje fue enviado!",
                text: "Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.",
                icon: "success",
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#formularioContacto');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

