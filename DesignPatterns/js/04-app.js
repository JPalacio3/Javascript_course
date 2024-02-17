/*
FACTORY PATTERN : Crea objetos basados en ciertas condiciones:
El patrón Factory es un patrón de diseño creacional que se utiliza para crear objetos según un tipo especificado durante el tiempo de ejecución. En lugar de crear objetos directamente utilizando el operador new, el patrón Factory utiliza una función o método especializado para crear y devolver instancias de objetos.
*/

class inputHTML {
    constructor( type, nombre ) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput() {
        return `< input type="${this.type}" name="${this.nombre}" id="${this.nombre}" >`;
    }
}

class HTMLFactory {
    crearElemento( tipo, nombre ) {
        switch ( tipo ) {
            case 'text':
                return new inputHTML( 'text', nombre );
            case 'tel':
                return new inputHTML( 'tel', nombre );
            case 'email':
                return new inputHTML( 'email', nombre );
            case 'number':
                return new inputHTML( 'number', nombre );

            default:
                break;
        }
    }
}

// Instancias creadas basadas en condiciones diferentes
const elemento = new HTMLFactory();
const inputText = elemento.crearElemento( 'text', 'nombre-cliente' );
console.log( inputText.crearInput() );

const elemento2 = new HTMLFactory();
const inputText2 = elemento.crearElemento( 'tel', 'telefono-cliente' );
console.log( inputText2.crearInput() );

const elemento3 = new HTMLFactory();
const inputText3 = elemento.crearElemento( 'email', 'email-cliente' );
console.log( inputText3.crearInput() );

const elemento4 = new HTMLFactory();
const inputText4 = elemento.crearElemento( 'number', 'number-cliente' );
console.log( inputText4.crearInput() );
