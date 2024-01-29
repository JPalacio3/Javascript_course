// Funciones puras
/*
Las funciones puras son un concepto fundamental en programación funcional. Una función se considera pura si cumple con dos características principales: inmutabilidad y determinismo.
Inmutabilidad: Una función pura no modifica el estado fuera de la función. No tiene efectos secundarios en el entorno que la rodea. Esto significa que no modifica variables fuera de su alcance ni realiza operaciones que afecten el estado global.
Determinismo: Dada la misma entrada, una función pura siempre devolverá el mismo resultado. No hay aleatoriedad ni dependencia de factores externos. Esto facilita la comprensión y el razonamiento sobre el código.
*/

const duplicar = numero => numero * 2;
const numero1 = 20;
const resultado = duplicar( numero1 );

console.log( resultado ); // La función ejecuta la tarea asignada sin modificar el valor de la variable principal
console.log( numero1 ); // La variable continúa teniendo su valor original sin modificarse
