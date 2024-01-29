// OPERADOR TERNARIO :
/*
Los operadores ternarios son una forma concisa de escribir declaraciones if en una sola línea. Se utilizan para tomar decisiones basadas en una condición y devolver un valor si la condición es verdadera y otro valor si es falsa.

Sintaxis:
condición ? valor_si_verdadero : valor_si_falso;
*/

const autenticado = false;
const puedePagar = true;

// Revisar una sola condición
console.log(autenticado ? 'El usuario está autenticado' : 'Usuario No autenticado');

// Revisar múltiples condiciones AND
console.log(autenticado && puedePagar ? 'Usuario autenticado y puede pagar' : 'No autenticado o métodos de pago no registrados')

// Revisar múltiples condiciones OR
console.log(autenticado || puedePagar ? 'Usuario puede pagar' : 'No autenticado o métodos de pago no registrados')

// Usando un ternario anidado
console.log(autenticado ? puedePagar ? 'Sí está autenticado y puede pagar' : 'No puede pagar' : 'Usuario NO autenticado');
