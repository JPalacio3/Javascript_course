/*
La API de notificaciones en JavaScript permite mostrar mensajes emergentes al usuario en el navegador. Los pasos básicos incluyen verificar el soporte del navegador, solicitar permisos, y crear y mostrar notificaciones. Se pueden personalizar con títulos, contenido y opciones visuales. Además, se pueden agregar acciones al hacer clic en la notificación. La disponibilidad y el comportamiento pueden variar según el navegador, y la API proporciona eventos para manejar interacciones del usuario. Es esencial respetar las políticas de permisos y diseño de notificaciones para una experiencia del usuario coherente.
*/

// Primero hay que pedir el permiso para mostrarle al usuario notificaciones
const notificarBtn = document.querySelector( '#notificar' );
notificarBtn.addEventListener( 'click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log( 'El resultado es ', resultado );
        } )
} );

// Una vez que el usuario acepte las notificaciones, se le puede mostrar
const verNotification = document.querySelector( '#verNotificacion' );
verNotification.addEventListener( 'click', () => {
    if ( Notification.permission === 'granted' ) {
        const notification = new Notification( 'Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Desarrollo de software - JPalacio'
        } );

        notification.onclick = function () {
            window.open( 'https://github.com/JPalacio3' );
        }
    }
} )

