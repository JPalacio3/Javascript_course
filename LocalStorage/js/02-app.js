
const nombre = localStorage.getItem('nombre');
console.log(nombre);

/*
En el caso de obtener objetos o arreglos que fueron almacenados como string,
debemos hacer uso de un método que nos permitirá obtener un string que tenga la
forma necesaria para ser convertido en objeto o en arreglo según sea el caso.
*/
//

const productoObjetc = localStorage.getItem('producto');
console.log(JSON.parse(productoObjetc));
