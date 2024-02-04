/* ESCOPE - Alcance de las variables :
El "scope" en JavaScript se refiere al contexto en el cual las variables y funciones son accesibles. Define el alcance o rango en el cual un identificador (nombre de variable o función) puede ser referenciado y utilizado en el código. Hay dos tipos principales de "scope" en JavaScript: "scope local" y "scope global".
*/

// Scope global : Alcance global de una variable
const nombre = 'Joel ';
function mostrarNombre() {
    console.log( nombre );
}
mostrarNombre(); // Joel -> Imprime la variable que fue declarada fuera de la función


// Scope Local : Alcance local de una variable
function mostrarNombre2() {
    const nombre2 = 'Alberto';
    console.log( nombre2 );
}
mostrarNombre2();
// console.log( nombre2 ) // Error -> Imprime error porque
//la variable no puede ser accesada desde el exterior de la función que la contiene

