/*
SELF : Generalmente hace más referencia a la ventana global (window)
En JavaScript, el concepto de `self` generalmente se refiere a una convención de nomenclatura que se utiliza para hacer referencia a la instancia actual de un objeto dentro de su propio contexto. Sin embargo, es importante destacar que en JavaScript, `self` no es una palabra clave reservada y no tiene un significado especial como en algunos otros lenguajes de programación.
La convención de `self` se utiliza comúnmente en el contexto de funciones dentro de objetos o clases.
*/

self.onload = () => {
    console.log( 'VENTANA LISTA' ); // VENTANA LISTA
}

window.nombre = 'Monitor de 20 Pulgadas';
const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function () {
        return `El producto: ${self.nombre}`
    }
}
console.log( producto.mostrarInfo() ); // El producto: Monitor de 20 Pulgadas
