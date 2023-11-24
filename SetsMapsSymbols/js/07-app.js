// GENERADORES
/*
Los generadores en JavaScript son funciones especiales definidas con `function*`. Permiten pausar y reanudar la ejecución, lo que es útil para generar secuencias de valores o simplificar la lógica de tareas asincrónicas. Al llamar al método `next()`, el generador produce valores con `yield` y devuelve un objeto con `value` y `done`. Esto facilita la creación de iteradores personalizados, como la generación de secuencias infinitas, mejorando el rendimiento y el control del flujo de ejecución.
** Cuando el generador no está siendo utilizado, pasa a estado suspendido
** Por medio de next() lo despertamos para que haga una iterador, y luego vuelve a su estado suspendido
*/

function* crearGenerador() {
    yield 1;
    yield 'Joel';
    yield 3 + 3;
    yield true;
}

const iterador1 = crearGenerador();

console.log( iterador1 ); // crearGenerador {<suspended>}
console.log( iterador1.next() ); // {value: 1, done: false}
console.log( iterador1.next().value ); // Joel
console.log( iterador1.next().value ); // 6
console.log( iterador1.next().value ); // true
console.log( iterador1.next() ); // {value: undefined, done: true}
console.log( iterador1 ); // crearGenerador {<closed>}


// Generador para carrito de compras
function* generadorCarrito( carrito ) {
    for ( let i = 0; i < carrito.length; i++ ) {
        yield carrito[ i ];
    }
}

const carrito = [ 'Producto1', 'Producto2', 'Producto3' ];

const iterador = generadorCarrito( carrito );
console.log( iterador.next() ) // {value: 'Producto1', done: false}
console.log( iterador.next() ) // {value: 'Producto2', done: false}
console.log( iterador.next() ) // {value: 'Producto3', done: false}
console.log( iterador.next() ) // {value: undefined, done: true}
