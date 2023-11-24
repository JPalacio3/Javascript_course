
// Crear un evento en el documento
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click',mostrarOcultarFooter);

// CADA VEZ QUE SE HAGA CLICK EN EL ELEMENTO, AGREGA O QUITA LA CLASE QUE MUESTRA EL ELEMENTO SEGÚN SEA EL CASO
function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}
