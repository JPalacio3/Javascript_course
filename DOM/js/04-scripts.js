// querySelector

const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores específicos en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar el formulario por su id
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacin = document.querySelector('nav');
console.log(navegacin);
