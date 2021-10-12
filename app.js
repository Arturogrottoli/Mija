//Funcion del scrolltop

scrollTopButton('.scroll-top-btn');

function scrollTopButton(btn){
    const $ScrollBtn = $(btn);
    
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        //Operador ternario sustituyendo al if{} else{} 
        scrollTop > 400 ? $ScrollBtn.removeClass('hidden') : $ScrollBtn.addClass('hidden');
    })

    $ScrollBtn.click(function(){
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    })
}




/*Funcion Formulario*/
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })

  if(response.ok){
    this.reset()
    swal({
      title: "Tu mensaje fue enviado!",
      text: "Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.",
      icon: "success",
    });
    
  }
}


