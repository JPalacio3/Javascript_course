// Constructores
function Seguro(marca,year,tipo) {
     this.marca = marca;
     this.year = year;
     this.tipo = tipo;
}

// Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function () {
     /*
     1 = Americano : + 1.15
     2 = Asiatico : + 1.05
     3 = Europeo : + 1.45
     */

     let cantidad;
     let base = 2000;

     switch (this.marca) {
          case '1':
               cantidad = base * 1.15;
               break;

          case '2':
               cantidad = base * 1.05;
               break;

          case '3':
               cantidad = base * 1.45;
               break;

          default:
               break;
     }

     // Leer el año
     const diferencia = new Date().getFullYear() - this.year;

     // Cada año que la diferencia es mayor, el costo va a reducirse un 3%
     cantidad -= ((diferencia * 3) * cantidad) / 100;

     /*
     Si el seguro es básico la cantidad se multiplica un 30%
     Si el seguro es completo la cantidad se multiplica un 50%
     */
     if (this.tipo === 'basico') {
          cantidad *= 1.30;
     } else {
          cantidad *= 1.50
     }
     return cantidad;
}

function UI() {};

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
     const max = new Date().getFullYear();
     min = max - 20;

     const selectYear = document.querySelector('#year');

     for (let i = max;i > min;i--) {
          let option = document.createElement('OPTION');
          option.value = i;
          option.textContent = i;
          selectYear.appendChild(option);
     }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje,tipo) => {
     const div = document.createElement('DIV');
     div.classList.add('mensaje','mt-10');
     div.textContent = mensaje;

     if (tipo === 'error') {
          div.classList.add('error');
     } else {
          div.classList.add('correcto');
     }

     // Insertar en el HTML
     const formulario = document.querySelector('#cotizar-seguro');
     formulario.insertBefore(div,document.querySelector('#resultado'));

     setTimeout(() => {
          div.remove();
     },1500);
}

// Función para mostrar el resultado
UI.prototype.mostrarResultado = (total,seguro) => {

     const { marca,year,tipo } = seguro;

     // Evaluar la marca
     let textoMarca;

     switch (marca) {
          case '1':
               textoMarca = 'Americano'
               break;
          case '2':
               textoMarca = 'Asiatico';
               break;
          case '3':
               textoMarca = 'Europeo';
               break;
          default:
               break;
     }

     // Crear el resultado
     const div = document.createElement('DIV');
     div.classList.add('mt-10');

     div.innerHTML = `
     <p class="header">TU RESUMEN</p>
     <p class="font-bold"> Marca: <span class="font-normal">  ${textoMarca}</span> </p>
     <p class="font-bold"> Año: <span class="font-normal">  ${year}</span> </p>
     <p class="font-bold"> Seguro: <span class="font-normal capitalize">  ${tipo}</span> </p>
     <p class="font-bold"> Total: $ ${total} </p>
     `;

     // Insertar el resultado en el documento
     const resultadoDiv = document.querySelector('#resultado');

     // Mostrar el Spinner
     const spinner = document.querySelector('#cargando');
     spinner.style.display = 'block';
     setTimeout(() => {
          spinner.style.display = 'none'; // Se borra el spinner
          resultadoDiv.appendChild(div); // Se muestra el resultado
     },1500);
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded',() => {
     ui.llenarOpciones(); // Llena el select con los años
});

eventListeners();
function eventListeners() {
     const formulario = document.querySelector('#cotizar-seguro');
     formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e) {
     e.preventDefault();

     // Leer la marca seleccionada
     const marca = document.querySelector('#marca').value;

     // Leer el año seleccionado
     const year = document.querySelector('#year').value;

     // Leer el tipo seleccionado
     const tipo = document.querySelector('input[name = "tipo"]:checked').value;

     // Validar que no haya campos vacíos
     if (marca === '' || year === '' || tipo === '') {
          ui.mostrarMensaje('Todos los campos son obligatorios','error');
          return;
     }

     ui.mostrarMensaje('Cotizando . . .','exito');

     // Ocultar las cotizaciones previas
     const resultados = document.querySelector('#resultado div');
     if (resultados != null) {
          resultados.remove();
     }

     // Instanciar el seguro
     const seguro = new Seguro(marca,year,tipo);
     const total = seguro.cotizarSeguro();

     // Utilizar el prototype que va a cotizar
     ui.mostrarResultado(total,seguro);
}
