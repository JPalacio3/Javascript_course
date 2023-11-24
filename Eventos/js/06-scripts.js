// EVENT BUBLING
/*
El "event bubbling" (burbujeo de eventos) es un concepto importante en JavaScript que se refiere a cómo los eventos se propagan o "burbujean" desde el elemento objetivo hacia arriba en la jerarquía del DOM (Document Object Model).

Cuando ocurre un evento en un elemento HTML, como hacer clic en un botón, el evento no se queda solo en ese elemento. En cambio, el evento se propaga a través de la jerarquía de elementos padres, desde el elemento más interno hacia el elemento más externo. Esto permite que los elementos padre también respondan al evento si tienen controladores de eventos asociados.
*/

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click',(e) => {
    e.stopPropagation(); // Para detener la propagación, usamos la función e.stopPropagation();
    console.log('Click en card');
});

infoDiv.addEventListener('click',(e) => {
    e.stopPropagation();
    console.log('Click en info');
});

titulo.addEventListener('click',(e) => {
    e.stopPropagation();
    console.log('Click en titulo');
});
