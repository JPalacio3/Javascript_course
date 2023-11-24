// OBJETO MATH

let math;

// PI
math = Math.PI; // 3.141592653589793

// Euler
math = Math.E; // 2.718281828459045

// Redondear - Default
math = Math.round(2.222); // 2
math = Math.round(2.5); // 3

// Redondear hacia arriba
math = Math.ceil(2.3); // 3
math = Math.ceil(7.1); // 8

// Redondear hacia abajo
math = Math.floor(2.9); // 2
math = Math.floor(8.8); // 8

// Raíz Cuadrada
math = Math.sqrt(144); //12
math = Math.sqrt(64) // 8

// Valor absoluto
math = Math.abs(-800) // 800
math = Math.abs(-1562); // 1562

// Potencia
math = Math.pow(8,2); // 64
math = Math.pow(5,3); //125

// Minimo
math = Math.min(5,4,3,8,6,1); // 1
math = Math.min(7,8,45,5,-8); // -8

// Máximo
math = Math.max(4,5,7,89,9,2,5,56,2); // 89
math = Math.max(45,56,5,4,54,5,4,8,79,16,4); // 79

// Aleatorio
math = Math.random(); // Numero flotante  aleatorio entre 0 y 1
math = Math.random() * 10; // Numero flotante aleatorio entre 1 y 10
math = Math.random() * 20; // Numero flotante aleatorio entre 1 y 20

// Aleatorio dentro de un rango
math = Math.floor(Math.random() * 30); // Aleatorio entero entre 0 y 30


console.log(math);
