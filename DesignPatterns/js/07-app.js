/*
NAMESPACES ( Espacios de nombres ) :
Los espacios de nombres (namespaces) son una técnica en programación que se utiliza para organizar y agrupar código relacionado en un contexto específico. En JavaScript, debido a su naturaleza flexible, los espacios de nombres se pueden implementar de varias maneras, como objetos, módulos o funciones autoejecutables. La idea principal es evitar conflictos de nombres y mejorar la legibilidad y mantenibilidad del código al organizarlo de manera lógica y estructurada.
*/

const restaurantApp = {};

// Agregar Platillos
restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,
    },
    {
        platillo: 'Hamburguesa',
        precio: 30,
    },
    {
        platillo: 'Hot Dog',
        precio: 20,
    },
];

// Agregar Funciones
restaurantApp.funciones = {
    mostrarMenus: ( platillos ) => {
        console.log( `Bienvenidos a nuestro menú` );
        platillos.forEach( ( platillo, index ) => {
            console.log( `${index}: ${platillo.platillo}, $${platillo.precio}` )
        } );
    },
    ordenar: id => {
        console.log( `Tu platillo: ${restaurantApp.platillos[ id ].platillo} se está preparando` );
    },
    agregarPedido: ( platillo, precio ) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantApp.platillos.push( nuevo );
    }
}

console.log( restaurantApp );
console.log( restaurantApp.platillos );
restaurantApp.funciones.ordenar( 2 );
restaurantApp.funciones.agregarPedido( 'Taco', 20 );

const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenus( platillos );
