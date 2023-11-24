// FUNCIONES QUE RETORNAN VALORES : las funciones pueden devolver valores utilizando la palabra clave return. Estas funciones se conocen como "funciones que retornan valores". Cuando una función retorna un valor, ese valor se puede utilizar en otros lugares de tu código siendo asignada a variabkes para poder invocar sus valores en otras partes.

function sumar(a,b) {
    return a + b; // Retorna la operación que se le asigna
}

const resultado = sumar(2,3); // Se asigna a una variable cuando se pasan los argumentos
console.log(resultado); // Se invoca mediante el nombre de la variable que contiene el valor retornado

// Ejemplo más avanzado

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(800);
total = agregarCarrito(400);
console.log(`El total antes de impuestos es de : $ ${total}`);

const totalPagar = calcularImpuesto(total);
console.log(` Pago + Impuesto :  $ ${totalPagar}`);
