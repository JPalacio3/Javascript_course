/*
MEDIATOR :
El patrón de diseño Mediator (mediador) es un patrón de comportamiento que promueve la comunicación indirecta entre componentes de un sistema, en lugar de que los componentes se comuniquen directamente entre sí. En este patrón, se utiliza un objeto mediador que encapsula la lógica de comunicación y coordina las interacciones entre los componentes.
*/

function Vendedor( nombre ) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: ( articulo, precio ) => {
        console.log( `Tenemos el siguiente artículo: ${articulo}, iniciamos con un valor de ${precio}` );
    },
    vendido: comprador => {
        console.log( `Vendido a : ${comprador}` );
    }
}

function Comprador( nombre ) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: ( cantidad, comprador ) => {
        console.log( `${comprador.nombre} : ${cantidad}` );
    }
}

function Subasta() {
    let compradores = {};
    return {
        registrar: usuario => {
            compradores[ usuario.nombre ] = usuario;
            usuario.sala = this;
        }
    }
}

// Crear objetos
const joel = new Comprador( 'Joel' );
const alberto = new Comprador( 'Alberto' );
const vendedor = new Vendedor( 'Vendedor de Autos' )
const subasta = new Subasta();

// Registrar los usuarios en la subasta
subasta.registrar( vendedor );
subasta.registrar( joel );
subasta.registrar( alberto );

// Vendedor
vendedor.oferta( 'Mustang 66', 1500 );
// Comprador
alberto.oferta( 1800, alberto );
joel.oferta( 2200, joel );
alberto.oferta( 2500, alberto );
joel.oferta( 4500, joel );

// Vendedor
vendedor.vendido( 'Joel' );
