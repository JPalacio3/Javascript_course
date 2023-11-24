// Uso de This para hacer referencia a las funciones en los objetos y acceder a sus valores

const nombre = ' Celular';
const precio = 5000;

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function ()
    {
        console.log(`El producto ${nombre}tiene un precio de ${precio}`);
        console.log(`El producto ${this.nombre}tiene un precio de ${this.precio}`);
    }
}

const producto2 = {
    nombre: 'tablet',
    precio: 3000,
    disponible: true,
    mostrarInfo: function ()
    {
        console.log(`Nombre : ${this.nombre} y tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo(); // De esta manera obtenemos de las variables que están externas al objeto
// En el caso de uso de this, se accede a los valores dentro del objeto, se refiere al objeto en sí mismo

producto2.mostrarInfo();
