const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

// Normalmente, las constantes no se pueden reasignar, pero en los objetos sí se pueden reasignar los valores de las llaves o propiedades

console.table(producto);

producto.disponible = false;

delete producto.precio;

console.table(producto);
