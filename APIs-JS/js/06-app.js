/*
SPEECH RECOGNITION
La API de Speech Recognition es una interfaz web que permite a los navegadores interpretar y procesar el habla del usuario. Permite la transcripción de voz a texto, con eventos para gestionar resultados y errores. Requiere permisos de micrófono y es útil para aplicaciones de voz interactivas y accesibilidad web. Es implementada mediante la clase SpeechRecognition, que se inicia para escuchar y procesar la entrada de voz del usuario.
*/

const salida = document.querySelector( '#salida' );
const microfono = document.querySelector( '#microfono' );

microfono.addEventListener( 'click', ejecutarSpeechAPI );

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-MX';

    // Iniciar la funcionalidad de la API
    recognition.start();
    recognition.onstart = function () {
        salida.classList.add( 'mostrar' );
        salida.textContent = 'Escuchando';
    };

    recognition.onspeechend = function () {
        salida.textContent = 'Se dejó de hablar';
        recognition.stop();
    };

    recognition.onresult = function ( e ) {
        console.log( e.results[ 0 ][ 0 ] );

        const { confidence, transcript } = e.results[ 0 ][ 0 ];

        const speech = document.createElement( 'P' );
        speech.innerHTML = `Grabado : ${transcript}`;

        const seguridad = document.createElement( 'P' );
        seguridad.innerHTML = `Seguridad de transcripción : ${parseInt( confidence * 100 )} %`;

        salida.appendChild( speech );
        salida.appendChild( seguridad );

    }
}
