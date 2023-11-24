
// DESTRUCTURING DE OBJETOS

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    color: 'black',
}

const nombre1 = producto.nombre;
console.log(nombre1); // Monitor de 20 Pulgadas

const { nombre } = producto;
const { precio } = producto;
const { disponible,color } = producto;

console.log(nombre); // Monitor de 20 Pulgadas
console.log(precio); // 300
console.log(disponible,color); //true 'black'

