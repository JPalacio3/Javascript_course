class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log( `Nombre Persona: ${this.nombre} Email: ${this.email}` );
    },
    mostrarNombre() {
        console.log( `Mi nombre es ${this.nombre}` );
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign( Persona.prototype, funcionesPersona );
// Añadir funcionesPersona a la clase de Cliente
Object.assign( Cliente.prototype, funcionesPersona );

// Instanciando la primer clase ( Persona )
const persona = new Persona( 'Joel', 'Joel@correo.com' );
console.log( persona );
persona.mostrarInformacion();
persona.mostrarNombre();

// Instanciando la segunda clase ( Cliente )
const cliente = new Cliente( 'Joel', 'Joel@correo.com' );
console.log( cliente );
cliente.mostrarInformacion();
cliente.mostrarNombre();
