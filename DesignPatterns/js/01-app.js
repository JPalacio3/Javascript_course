/* DESINGN PATTERNS :
Los patrones de diseño en JavaScript son soluciones reutilizables para problemas comunes de diseño en el desarrollo de software. Estos patrones ofrecen una guía sobre cómo organizar y estructurar el código para lograr un código más mantenible, escalable y eficiente. Algunos ejemplos de patrones de diseño incluyen el patrón de módulo, el patrón de constructor, el patrón de fábrica, el patrón de observador, entre otros. Cada patrón tiene un propósito específico y proporciona una forma estandarizada de abordar problemas recurrentes en el desarrollo de aplicaciones JavaScript.
*/

// Class Pattern : Se consigue mediante el uso de clases para la creación de objetos

class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona( 'Joel', 'joelpalacio630@gmail.com' );
console.log( persona );
