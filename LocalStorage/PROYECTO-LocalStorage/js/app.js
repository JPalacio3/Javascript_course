// Variables
const formulario = document.querySelector('#formulario');
const listatweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded',() => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML()
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value.trim();

    // VALIDACIÓN
    if (tweet == '') {
        mostrarError('Un mensaje no puede ir vacío');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet, // (Si la llave y el valor se llaman igual, se puede poner salomente uno y eso lo toma para ambos)
    }


    // Añadir el texto ingresado al arreglo de tweets
    tweets = [ ...tweets,tweetObj ];

    // Una vez agregado, se puede crear el el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar un mensaje de error cuando el usuario intente agregar un texto vacío
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar el mensaje en el documento
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Definir un intervalo de tiempo para que el mensaje de error se remueva
    setTimeout(() => {
        mensajeError.remove();
    },1000);
}

// Muestra un listado de los tweets
function crearHTML() {
    // Limpiar el HTML para que no se repitan los registros
    limpiarHTML();
    if (tweets.length > 0) {

        tweets.forEach(tweet => {
            // Agregar un botón de eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.classList = 'borrar-tweet';
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear todo el HTML
            const li = document.createElement('LI');

            // Añadir el texto
            li.innerText = tweet.tweet;
            //Asignar el botón de eliminar
            li.appendChild(btnEliminar);

            // Insertar el texto al div que está en el documento
            listatweets.appendChild(li);
        });
    }
    // Agrega los registros actuales a LocalStorage para que no se borren al recargar la página
    sincronizarStorage();
}

// Agrega los registros a LocalStorage
function sincronizarStorage() {
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

// Limpiar el HTML para que no se repita cuando insertemos un nuevo registro
function limpiarHTML() {
    while (listatweets.firstChild) {
        listatweets.removeChild(listatweets.firstChild);
    }
}
