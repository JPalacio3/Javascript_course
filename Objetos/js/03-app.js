// AGREGAR O ELIMINAR PROPIEDADES DE UN OBJETO

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';

// Eliminar propiedades del objeto
delete producto.disponible;

console.table(producto);
