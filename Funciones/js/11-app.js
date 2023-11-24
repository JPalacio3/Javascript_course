// PARÁMETROS Y ARGUMENTOS EN ARROW FUNCTION

// Función declarada de la manera tradicional
const aprendiendo = function (lenguaje,lenguaje2) {
    console.log(`Aprendiendo ${lenguaje} y ${lenguaje2} con una función deeclarada de la manera tradicional`);
}
aprendiendo('Javascript','PHP');

// Arrow function
const aprendiendo2 = (tecnologia,tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2} desde un arrow function`;
console.log(aprendiendo2('Javascript','Node.JS'));

// Cuando el arrow function es de una línea, los corchetes y paréntesis son opcionales
const aprendiendo3 = tecnologia => `Aprendiendo ${tecnologia} desde un arrow function sin corchetes ni paréntesis`;
console.log(aprendiendo3('Javascript'));
