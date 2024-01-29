// Agregar elementos al LocalStorage

localStorage.setItem('nombre','Joel');
/*
Esto almacena de manera local la información indicada, el primer valor será la llave y el segundo
corrsponde al valor, siempre se almacena como llave-valor. LocalStorage solamente almacena datos de tipo string, por lo que no se pueden guardar arreglos, objetos o valores numéricos.
*/

// Para guardar objetos en el localStorage se deben convertir a string mediante el métdo JSOIN.stringify
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
}
const productoString = JSON.stringify(producto);
localStorage.setItem('producto',productoString); // Se va a almacenar todo el objeto como si fuera string
console.log(productoString);


// Para guardar en el localStorage un arreglo se hace de la misma manera.
const meses = [ 'enero','febrero','marzo' ];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses',mesesString); // Se almacena el arreglo completo como si fuera string.
console.log(mesesString);

// ALAMACENAMIENTO EN LA SESIÓN LOCAL
sessionStorage.setItem('nombre','Joel');
/*
Esto almacena de manera local la informacióm indicada en la sesión local del navegador.
También funciona de la misma manera que el almacenamiento local, pero en este caso se
hace referencia únicamente a la información que se quiere almacenar en la sesión actual.
*/
