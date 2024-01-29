// IMPORTACIÓN DE LOS MÓDULOS
import nuevaFuncion, { ahorro, nombreCliente, mostrarInformacion, saldo, Cliente } from "./cliente.js"; // Importamos el módulo donde está la variable de otro archivo
import { Empresa } from "./empresa.js"; // Importamos la clase herdada desde otro archivo

// INSTANCIAS DE LOS OBJETOS IMPORTADOS

nuevaFuncion();

console.log( nombreCliente );
console.log( ahorro );

console.log( mostrarInformacion( nombreCliente, ahorro ) );
saldo( ahorro );

const cliente = new Cliente( nombreCliente, ahorro );
console.log( cliente );
console.log( cliente.mostrarInformacion( nombreCliente, ahorro ) );

// Importar empresa
const empresa = new Empresa( nombreCliente, ahorro, 'Desarrolladores' );
console.log( empresa.mostrarInformacion() );
