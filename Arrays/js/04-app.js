
const meses = [ 'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre',];

// Reasignar los elementos dentro del arreglo
meses[ 0 ] = 'ENERO';
meses[ 7 ] = 'AGOSTO';
meses[ 10 ] = 'NOVIEMBRE'; // De esta manera se puede agragr un elemento por medio de un índice aún no existente

console.table(meses);
