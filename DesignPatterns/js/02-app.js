/*
CONSTRUCTOR PATTERN :
El patrón Constructor Pattern es un enfoque común en JavaScript para crear objetos utilizando funciones constructoras.
*/

class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor( nombre, email, telefono, empresa ) {
        super( nombre, email ); // Hace referencia a los atributos de la clase padre
        this.telefono = telefono;// Se agregan los nuevos atributos que no son hereddos de la clase padre
        this.empresa = empresa;
    }
}

const persona = new Persona( 'Joel Palacio', 'joelpalacio@gmail.com' );
console.log( persona ); // Instanciamos la clase padre

const cliente = new Cliente( 'Joel', 'joel@correo.com', '3339980089', 'MegaDC' );
console.log( cliente ) // Instanciamos el objeto cliente, heredando las propiedades de persona
