// FUNCIONES IIFE
/*
Las funciones IIFE (Immediately Invoked Function Expressions) son funciones anónimas que se ejecutan automáticamente después de su definición. Se utilizan comúnmente para encapsular código y evitar conflictos de nombres en el ámbito global. Se definen dentro de paréntesis y se invocan de inmediato con otros paréntesis, lo que las hace autoejecutables. Este patrón es útil para modularizar código, crear ámbitos locales y gestionar dependencias. IIFE es una técnica común en JavaScript para controlar el alcance de las variables y evitar problemas de colisión de nombres.
*/

( function () {
    console.log( 'Desde un IIFE' );

    const nombreCliente = 'Joel'; // No se podrá acceder a esta variable desde otras partes

    window.nombreCliente = 'Joel'; // Agrega esta variable al objeto global y será accesible desde otras partes
} )();

export const nombreCliente = 'Joel';
export const ahorro = 500;
// De esta manera podemos exportar una variable a otras partes
/* Para que funcione debemos agregar en la importación del archivo js en html el type="module":
<script src="js/cliente.js" type="module"></script>
*/

// Crear una función para exportar
export function mostrarInformacion( nombre, ahorro ) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function saldo( ahorro ) {
    if ( ahorro > 0 ) {
        console.log( `Desde la función -> El cliente tiene un saldo de : $${ahorro}` )
    } else {
        console.log( 'No tiene saldo' );
    }
}

// Crear una clase para exportar
export class Cliente {
    constructor( nombre, ahorro ) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Desde la clase -> Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

// Función export default : Importante recordar que solamente puede existir un export default por archivo
export default function nuevaFuncion() {
    console.log( 'Este es el export default' );
}

