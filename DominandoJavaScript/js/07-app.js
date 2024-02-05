/*
EVENT LOOP : Modelo de Concurrencia y Bucle de eventos
"Event Loop" (Bucle de Eventos). El Event Loop es un concepto fundamental en JavaScript y en otros entornos de programación asíncrona. Aquí hay una explicación breve:
JavaScript se ejecuta en un solo hilo (thread) en el navegador. Esto significa que solo puede realizar una tarea a la vez.
*/

console.log( 'Primero' );

setTimeout( () => {
    console.log( 'Segundo' );
}, 0 );

console.log( 'Tercero' );

setTimeout( () => {
    console.log( 'Cuarto' );
}, 0 );

new Promise( function ( resolve ) {
    resolve( 'Desconocido...' )
} ).then( console.log )
console.log( 'Ultimo' );

function hola() {
    console.log( 'hola' );
}
hola();



/*
Primero
07-app.js:13 Tercero
07-app.js:22 Ultimo
07-app.js:25 hola
Desconocido...
07-app.js:10 Segundo
07-app.js:16 Cuarto
*/

/*
Ejemplos de dónde se ubican las funciones y operaciones:

- **Stack (Pila):**
    - Funciones síncronas, operaciones que no son asíncronas.
    - Ejemplos: llamadas de funciones, operaciones aritméticas, bucles.
- **Heap (Montón):**
    - Objetos, estructuras de datos complejas.
    - Ejemplos: objetos, matrices, funciones almacenadas como variables.
- **Queue (Cola):**
    - Callbacks de operaciones asíncronas.
    - Ejemplos: callbacks de `setTimeout`, respuestas de solicitudes AJAX, eventos de usuario asíncronos.
*/
