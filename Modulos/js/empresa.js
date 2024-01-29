import { Cliente } from "./cliente";

export class Empresa extends Cliente {
    constructor( nombre, ahorro, categoria ) {
        super( nombre, ahorro ); // Heredamos el constructor completo de la clase
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Desde la Herencia -> Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}
