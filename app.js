function initializeScrollToTopButton() {
    const btn = document.querySelector('.scroll-top-button');
    if (!btn) return;

    function updateVisibility() {
        const top = window.pageYOffset ?? document.documentElement.scrollTop;
        if (top > 400) {
            btn.classList.remove('opacity-0', 'invisible');
            btn.classList.add('opacity-100', 'visible');
        } else {
            btn.classList.add('opacity-0', 'invisible');
            btn.classList.remove('opacity-100', 'visible');
        }
    }

    window.addEventListener('scroll', updateVisibility);
    updateVisibility();

    btn.addEventListener('click', () => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    });
}

function initializeMobileMenu() {
    const trigger = document.getElementById('mobileMenuButton');
    const menu = document.getElementById('navbarMenu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

function showProductInformationMessage(event) {
    if (event) event.preventDefault();
    if (typeof swal !== 'undefined') {
        swal(
            '¿Formas de adquirir este modelo?',
            'Podés consultar mediante el link de whatsapp de esta pagina o bien enviarnos un mensaje desde el formulario de contacto.'
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeScrollToTopButton();
    initializeMobileMenu();
    window.showProductInformationMessage = showProductInformationMessage;
});
