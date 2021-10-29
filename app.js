//Funcion del scrolltop

scrollTopButton('.scroll-top-btn');

function scrollTopButton(btn){
    const $ScrollBtn = $(btn);
    
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        
                scrollTop > 400 ? $ScrollBtn.removeClass('hidden') : $ScrollBtn.addClass('hidden');
    })

    $ScrollBtn.click(function(){
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    })
}


//Funcion mostrar mensaje



let mostrarMensaje = () =>{
   event.preventDefault()
   swal("¿Formas de adquirir este modelo?", "Podés consultar mediante el link de whatsapp de esta pagina o bien enviarnos un mensaje desde el formulario de contacto.");
}


