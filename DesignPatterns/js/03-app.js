/*
SINGLETON :
El patrón Singleton es un patrón de diseño que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia. Esto significa que cada vez que se solicite una instancia de esa clase, se devolverá la misma instancia en lugar de crear una nueva.
*/

let instancia = null;

class Persona {
    constructor( nombre, email ) {
        if ( !instancia ) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }
        return instancia;
    }
}

// La clase no puede ser instanciada más de un vez, por lo que el segundo objeto instanciado no se creará
const persona = new Persona( 'Joel', 'joelpalacio@gmail.com' );
const persona2 = new Persona( 'Alberto', 'alberto@gmail.com' );

console.log( persona )
console.log( persona2 )
