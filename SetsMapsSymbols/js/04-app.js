// WEAKMAP
/*
Los `WeakMap` en JavaScript son estructuras de datos que permiten asociar datos con objetos sin prevenir que estos objetos sean eliminados por el recolector de basura cuando ya no se utilizan en el código. Son útiles para gestionar información relacionada con objetos, como metadatos, sin retenerlos artificialmente en memoria. Los objetos clave en un `WeakMap` son "referencias débiles", lo que significa que no evitan su eliminación. A diferencia de los `Map`, los `WeakMap` no son iterables y tienen un conjunto limitado de métodos. Se utilizan en situaciones donde el control de la liberación de memoria es importante y no se desea retener objetos innecesariamente.
** No son iterables
** No se puede conocer la extensión
** Solamente acepta objetos
*/

const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();
weakmap.set( producto, 'momitor' );
console.log( weakmap );

console.log( weakmap.has( producto ) ); // true
console.log( weakmap.get( producto ) ); // monitor
console.log( weakmap.delete( producto ) ); // Elimina el objeto
