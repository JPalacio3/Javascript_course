/*
COERCIÓN :
La coerción en JavaScript se refiere a la conversión automática de un tipo de dato a otro. Esto puede ocurrir de manera implícita (automática) o explícita (mediante código). La coerción implícita sucede automáticamente durante las operaciones, mientras que la coerción explícita ocurre cuando deliberadamente convertimos un tipo de dato a otro.
*/

const numero1 = 20;
const numero2 = '40';

// Coerción implícita
console.log( numero1 + numero2 ); // "2024"

// Coerción explícita
console.log( numero1 + Number( numero2 ) ); // 60

const pedido = [ 1, 2, 3 ];
console.log( pedido );
console.log( pedido.toString() );
console.log( JSON.stringify( pedido ) );

// Se puede aplicar coerción también para valores booleanos
// Coerción Implícita : Javascript asigna automaticamente su valor
const valor = !"Hola";
if ( valor ) {
    console.log( "El valor es verdadero" );
} else {
    console.log( "El valor es falso" );
}

// Coerción Explícita : Asignamos su valor
const valor2 = false;

if ( valor2 ) {
    console.log( "El valor es verdadero" );
} else {
    console.log( "El valor es falso" );
}
