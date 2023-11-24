// GENERAR HTML DE MANERA DINAMICA DESDE JAVASCRIPT
/*
Se debe tomar en cuenta que se deben seguir los siguientes pasos:

1) Crear un nuevo elemento <p>
const nuevoParrafo = document.createElement("p");

2) Crear contenido para el párrafo
const texto = document.createTextNode("Este es un nuevo párrafo.");

3) Asignar el contenido al párrafo
nuevoParrafo.appendChild(texto);

4) Obtener un elemento existente en el DOM donde deseas agregar el párrafo
const contenedor = document.getElementById("miContenedor");

5) Agregar el nuevo párrafo al contenedor
contenedor.appendChild(nuevoParrafo);
*/

const enlace = document.createElement('A');

// Agregando tecto al elemento
enlace.textContent = 'Nuevo enlace';
// Añadiendo en href
enlace.href = '/#';
// Agregar una clase al elemento
enlace.classList.add('clase');
// Añadiendo otro tipo de atributos
enlace.setAttribute('data-enlace','nuevo-enlace');
// Asignar una función
enlace.onclick = mi_funcion

console.log(enlace);

// Seleccionar la nevrgación
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
// insertar el elemento creado dentro del div seleccionado
// navegacion.appendChild(enlace); // Lo inserta al final del div

// Insertar el elemento creado en una posición específica dentro del div
navegacion.insertBefore(enlace,navegacion.children[ 1 ]); // Despues del posicion 1

// Creación de la funcion que le fue asignado al elemento
function mi_funcion() {
    alert('Hola mundo');
}

// Crear un card
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$1,000 por persona';
parrafo3.classList.add('precio');

// Crear DIV para asignar los elementos creados
const info = document.createElement('DIV');
info.classList.add('info');

//Asignamos los elemetos en el orden que se requiere
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';

// Crear el card (div padre)
const card = document.createElement('DIV');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);
// Asingar la info
card.appendChild(info);

// Insertar en el html
contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card,contenedor.children[ 0 ]);
