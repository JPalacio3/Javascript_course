/*
NEW BINDING
Se refiere a uno de los cuatro principios de enlace (binding) en JavaScript, específicamente asociado con el uso del operador new. Estos principios son parte de cómo funciona el sistema de objetos y el contexto en JavaScript.
Ocurre cuando una función es invocada con el operador new. Dentro de la función, this se refiere a una nueva instancia del objeto que está siendo creado.
*/

function Auto( modelo, color ) {
    this.modelo = modelo;
    this.color = color;
}
const auto = new Auto( 'Camaro', 'negro' );
console.log( auto );

// WINDOW BINDING
window.color = 'Blanco';
function hola() {
    console.log( color );
}
hola();
