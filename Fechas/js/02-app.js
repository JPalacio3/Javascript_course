// Una librería especializada para trabajar con fechas en JavaScript es momentJS

const diaHoy = new Date('1-2-2023'); // Se define en el formato mes/dia/año

moment.locale('es');
console.log(moment().format('DD / MMMM / YYYY - HH : mm : ss ')); // 24 / octubre / 2023 - 16 : 54 : 14
console.log(moment().format('llll',diaHoy)); // mar., 24 de oct. de 2023 16:56
console.log(moment().add(3,'days',diaHoy).calendar()); // viernes a las 16:57
