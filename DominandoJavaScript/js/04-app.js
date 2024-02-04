/*
IMPLICIT BINDING :
Implicit Binding es un concepto en JavaScript relacionado con la asignación implícita de un objeto como contexto (o this) dentro de una función, basándose en cómo se invoca esa función. En términos más simples, cuando una función es llamada como un método de un objeto, el objeto se convierte en el contexto (this) de esa función.
*/

const usuario = {
    nombre: 'Joel',
    edad: 33,
    informacion() {
        console.log( `Mi nombre es ${this.nombre} y mi edad es ${this.edad}` );
    },
    mascota: {
        nombre: 'Hook',
        edad: 2,
        informacion() {
            console.log( `Mi nombre es ${this.nombre} y mi edad es ${this.edad}` );
        },
    }
}
usuario.informacion(); // Mi nombre es Joel y mi edad es 33
usuario.mascota.informacion(); // Mi nombre es Hook y mi edad es 2
