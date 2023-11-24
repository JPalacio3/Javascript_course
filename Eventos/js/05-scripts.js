// Eventos que suceden con el Scroll del mouse
window.addEventListener('scroll',() => {
    console.log('Scrolling ...');

    const scrollPX = window.scrollY;
    console.log(scrollPX); // Detectar los pixeles que se dan en vertical

    const scrollHPX = window.scrollX;
    console.log(scrollHPX); // Detectar el scroll en pixeles de manera horizontal

    // Ubicar la posición excata de un elemento del documento

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if (ubicacion.top < 784) {
        console.log('El elemento ya está visible');
    } else {
        console.log('Aún no, da más scroll');
    }

})
