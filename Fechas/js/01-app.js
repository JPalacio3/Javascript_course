// Las fechas residen en un objeto llamado Date
const diaHoy = new Date('1-2-2023'); // Se define en el formato mes/dia/año
let valor;

valor = diaHoy; // Muestra la fecha completa
valor = diaHoy.getFullYear(); // Muestra el año actual
valor = diaHoy.getMonth(); // Muestra el mes actual (iniciando desde mes 0)
valor = diaHoy.getMinutes(); // Muestra los minutos actuales
valor = diaHoy.getHours(); // Muestra la hora actual
valor = diaHoy.getTime(); // Muestra los milisegundos desde 1-enero-1970 hasta el momento actual





console.log(valor);
