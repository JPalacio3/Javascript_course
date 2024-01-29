// OPERADOR && : El operador && en JavaScript se utiliza como operador lógico "Y" (AND). Se utiliza para combinar dos o más expresiones lógicas y devuelve true si todas las expresiones son verdaderas. Si alguna de las expresiones es falsa, devuelve false.
/*
La tabla de verdad del operador && es la siguiente:
true && true devuelve true.
true && false devuelve false.
false && true devuelve false.
false && false devuelve false.
*/

const usuario = true;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Sí es usuario y puede pagar')
} else if (!usuario) {
    console.log('Usuario NO registrado');
} else if (!puedePagar) {
    console.log('No existen métodos de pago registrados');
} else {
    console.log('No es un usuario registrado, o NO se puede registrar el pago')
}
// Salida: No existen métodos de pago registrados
