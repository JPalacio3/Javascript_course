// OBJECT CONSTRUCTOR : puedes crear objetos utilizando funciones constructoras. Una función constructora es simplemente una función que se utiliza para crear objetos con propiedades y métodos específicos

//Object literal
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

// Object constructor
function Producto(nombre,precio)
{
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 20 Pulgadas',5000);
console.log(producto2);

const producto3 = new Producto('Televisión de 50 Pulgadas',8000);
console.log(producto3);
