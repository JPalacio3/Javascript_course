// TRAVERSING THE DOM : Es la froma en que nos movemos por el DOM, establecido en forma de arbol

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes); // Los espacios en blacno son considerados elementos
console.log(navegacion.children); // Solamente enlista los elementos HTML reales escritos

// Enlistar un elemento en especifico
console.log(navegacion.children[ 1 ].nodeName);
console.log(navegacion.children[ 1 ].nodeType);

const card = document.querySelector('.card');
card.children[ 1 ].children[ 1 ].textContent = 'Nuevo Heading desde traversing the DOM';
console.log(card.children[ 1 ].children[ 1 ].textContent);

// Modificar una imagen desde traversing the DOM
card.children[ 0 ].src = 'img/hacer3.jpg';
console.log(card.children[ 0 ]);

// Traversing del Hijo al Padre
console.log(card.parentNode); // Busca al padre del elemento especificado, trae también los elementos vacíos
console.log(card.parentElement); // Trae solamente los elementos verificados
console.log(card.parentElement.parentElement); // Se puede subir cuantos elementos que quiera agregando más parenElement

// Traversing de hermano a hermano siguiente
console.log(card);
console.log(card.nextElementSibling); // Selecciona el siguiente elementos que sea su hermano
console.log(card.nextElementSibling.nextElementSibling); // Selecciona más hermanos delante de él

// Traversing de hermano a hermano anterior
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling); // Tre el elememto anterior dentro de su mismo div (hermnano)


// Selecciona elemento en posiciones preimera y última hijos del div
console.log(navegacion.firstElementChild); // Trae el primer elemento hijo del div
console.log(navegacion.lastElementChild); // Trae el último elemento hijo del div

