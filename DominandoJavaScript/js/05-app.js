/*
EXPLICIT BINDING :
    Explicit Binding es otra forma de controlar el valor de `this` en JavaScript al llamar una función. A diferencia de Implicit Binding, donde el valor de `this` se determina automáticamente, Explicit Binding nos permite especificar explícitamente el objeto al cual queremos vincular `this` utilizando métodos proporcionados por el lenguaje.
*/

function persona( el1, el2 ) {
    console.log( `Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}` );
}
const informacion = {
    nombre: 'Joel'
}
const musicaFavorita = [ 'Rap', 'Rock' ];

// Call() : Hay que pasarle los objetos de forma individual
persona.call( informacion, musicaFavorita[ 0 ], musicaFavorita[ 1 ] ); // Mi nombre es Joel y escucho Rap y Rock

// Apply() : Toma un arreglo completo
persona.apply( informacion, musicaFavorita ); // Mi nombre es Joel y escucho Rap y Rock

// Bind() : Crea una nueva función y también hay que pasarle los objetos de forma individual
nuevaFn = persona.bind( informacion, musicaFavorita[ 0 ], musicaFavorita[ 1 ] )
nuevaFn(); // Mi nombre es Joel y escucho Rap y Rock
