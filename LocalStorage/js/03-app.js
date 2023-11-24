// ELIMINAR ELEMENTOS DEL LOCALSTORAGE
localStorage.removeItem('nombre');

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

// Agregar un elemento al arreglo
mesesArray.push('Abril');
console.log(mesesArray);

// Una vez que se haya realizado la modificación requerida, se debe volver a guardar
localStorage.setItem('meses',JSON.stringify(mesesArray));

// Limpiar toda la información almacenada en el localStorage
localStorage.clear();
