function initializeScrollToTopButton(buttonSelector) {
    const scrollButton = document.querySelector(buttonSelector);
    if (!scrollButton) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 400) {
            scrollButton.classList.remove('opacity-0', 'invisible');
            scrollButton.classList.add('opacity-100', 'visible');
        } else {
            scrollButton.classList.add('opacity-0', 'invisible');
            scrollButton.classList.remove('opacity-100', 'visible');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        });
    });
}

function showProductInformationMessage(event) {
    if (event) event.preventDefault();
    if (typeof swal !== 'undefined') {
        swal(
            "¿Formas de adquirir este modelo?", 
            "Podés consultar mediante el link de whatsapp de esta pagina o bien enviarnos un mensaje desde el formulario de contacto."
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeScrollToTopButton('.scroll-top-button');
    window.showProductInformationMessage = showProductInformationMessage;
});
