// Diferentes Iteradores
const ciudades = [ 'Londres', 'Medellin', 'Guadalajara', 'Tokio', 'New York', 'Bogotá', 'Paris' ];
const ordenes = new Set( [ 123, 456, 789, 1011, 1213, 1415, 1617, 1819, 2021, 2223, 2425 ] );

const datos = new Map();
datos.set( 'nombre', 'Joel' );
datos.set( 'profesión', 'Desarrollador backend' );

// Default Iterador : Iterador por default
for ( let ciudad of ciudades ) {
    console.log( ciudad )

}
for ( let orden of ordenes ) {
    console.log( orden )
}

for ( let dato of datos ) {
    console.log( dato )
}

// entries Iterator : Imprime arreglo llave y valor, si no existe, asigna el mismo valor de llave al valor, o su id si es un string
for ( let entry of ciudades.entries() ) {
    console.log( entry )
}

for ( let entry of ordenes.entries() ) {
    console.log( entry )
}

for ( let entry of datos.entries() ) {
    console.log( entry )
}

// Values iterator : Imprime el valor únicamente, si el objeto tiene llave y valor, solamente imprime el valor
for ( let value of ciudades.values() ) {
    console.log( value );
}

for ( let value of ordenes.values() ) {
    console.log( value );
}

for ( let value of datos.values() ) {
    console.log( value );
}

// Keys Iterator : Imprime solamente las llaves del objeto, si el objeto tiene solamente objetos sin llaves, imprime solamente ese valor
for ( let key of ciudades.keys() ) {
    console.log( key );
}

for ( let key of ordenes.keys() ) {
    console.log( key );
}

for ( let key of datos.keys() ) {
    console.log( key );
}
