// Seleccionar elementos según su clase

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen más de una vez, aparecen todos en la selección
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe, devuelve un arrego vacío
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);
