// ELIMINAR ELEMENTOS DEL DOM

const primerElemento = document.querySelector('a');
primerElemento.remove(); // Remove el elemento de manera directa

// Eliminar desde el elemento padre
const navegacion = document.querySelector('.navegacion');
navegacion.removeChild(navegacion.children[ 2 ]); // Identifica el elemento por su índice y lo elimina
