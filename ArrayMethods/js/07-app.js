// CONCAT : Combina dos o más arreglos creando uno nuevo.

const meses = [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio' ];
const meses2 = [ 'Agosto','Septiembre','Octubre' ];
const meses3 = [ 'Noviembre','Diciembre' ];

// Unir los dos arreglos con .concat()
const año = meses.concat(meses2,meses3);
console.log(año);

// Con el spread operator
const año2 = [ ...meses,...meses2,...meses3 ];
console.log(año2);
