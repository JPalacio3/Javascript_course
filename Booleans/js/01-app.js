// BOOLEANS

// Creación de valores booleanos

const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

console.log(boolean1); // true
console.log(boolean2); // false
console.log(boolean3); // "true"
console.log(typeof boolean1); // boolean
console.log(typeof boolean3); // string
console.log(boolean1 == boolean3); // false

const boolean4 = new Boolean(true);
console.log(boolean4); // {true}
console.log(typeof boolean4); // object
