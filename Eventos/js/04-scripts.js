// EVENTOS QUE SUCEDEN EN UN FORMULARIO

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();

    console.log('... Buscando');
    console.log(e.target.action);
}



