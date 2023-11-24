// WeakSet
/*
Es una colección para almacenar objetos con referencias débiles, lo que permite que los objetos sean elegibles para la recolección de basura. No es iterable, no admite métodos para recuperar elementos o tamaños, y se utiliza en situaciones donde no deseas impedir la recolección de basura en objetos específicos.
** Solamente se pueden pasar objetos
** No es posible conocer la extensión del weakset
** No son iterables
*/

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    edad: 33,
}

// Agregar un objeto
weakset.add( cliente );
console.log( weakset );

// Comprobar la existencia de un objeto
console.log( weakset.has( cliente ) ); // true

// Eliminar un objeto
console.log( weakset.delete( cliente ) ); // true
