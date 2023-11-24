// OBJETOS DENTRO DE OBJETOS

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    color: 'black',

    informacion: {
        peso: '1kg',
        medida: '1m',

        fabricacion: {
            pais: 'Mexico',
            año: '2023',
        }

    }
}


console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion.pais);;

