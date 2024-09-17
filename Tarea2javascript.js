//Katherine Cano Bolivar


// Arreglo 1
let numerosEnteros = [1, 2, 3, 4, 5];
console.log("Arreglo 1: Números Enteros", numerosEnteros);

// .reduce
let sumaNumerosEnteros = numerosEnteros.reduce((acumulador, valor) => acumulador + valor);
console.log("Suma de números enteros con reduce:", sumaNumerosEnteros);

// .forEach
let sumaEnterosForEach = 0;
numerosEnteros.forEach((numero) => sumaEnterosForEach += numero);
console.log("Suma de números enteros con forEach:", sumaEnterosForEach);

// .filter
let filtroEnteros = numerosEnteros.filter(numero => numero > 2);
console.log("Números mayores a 2 con filter:", filtroEnteros);

// .map
let mapeoEnteros = numerosEnteros.map(numero => numero * 2);
console.log("Números multiplicados por 2 con map:", mapeoEnteros);




// Arreglo 2
let frutas = ["manzana", "plátano", "naranja", "fresa"];
console.log("\nArreglo 2: Frutas", frutas);

// .reduce
let cadenaFrutas = frutas.reduce((acumulador, fruta) => acumulador + " " + fruta);
console.log("Frutas concatenadas con reduce:", cadenaFrutas);

// .forEach
frutas.forEach(fruta => console.log("Fruta:", fruta));

// .filter
let filtroFrutas = frutas.filter(fruta => fruta.length > 6);
console.log("Frutas con más de 6 letras con filter:", filtroFrutas);

// .map
let mapeoFrutas = frutas.map(fruta => fruta.toUpperCase());
console.log("Frutas en mayúsculas con map:", mapeoFrutas);




// Arreglo 3
let decimales = [1.5, 2.3, 3.7, 4.1];
console.log("\nArreglo 3: Decimales", decimales);

// .reduce
let sumaDecimales = decimales.reduce((acumulador, valor) => acumulador + valor);
console.log("Suma de decimales con reduce:", sumaDecimales);

// .forEach
let sumaDecimalesForEach = 0;
decimales.forEach(decimal => sumaDecimalesForEach += decimal);
console.log("Suma de decimales con forEach:", sumaDecimalesForEach);

// .filter
let filtroDecimales = decimales.filter(decimal => decimal < 3);
console.log("Decimales menores a 3 con filter:", filtroDecimales);

// .map
let mapeoDecimales = decimales.map(decimal => decimal * 10);
console.log("Decimales multiplicados por 10 con map:", mapeoDecimales);




// Arreglo 4
let booleanos = [true, false, true, true];
console.log("\nArreglo 4: Booleanos", booleanos);

// .reduce
let resultadoBooleans = booleanos.reduce((acumulador, valor) => acumulador && valor);
console.log("Resultado de reduce en booleanos (AND lógico):", resultadoBooleans);

// .forEach
booleanos.forEach((valor, indice) => console.log(`Booleano en índice ${indice}:`, valor));

// .filter
let filtroBooleanos = booleanos.filter(valor => valor);
console.log("Valores verdaderos con filter:", filtroBooleanos);

// .map
let mapeoBooleanos = booleanos.map(valor => valor ? "Verdadero" : "Falso");
console.log("Booleanos como cadenas con map:", mapeoBooleanos);




// Arreglo 5
let mixto = [10, "Hola", false, 3.14];
console.log("\nArreglo 5: Mixto", mixto);

// .reduce
let reduccionMixto = mixto.reduce((acumulador, valor) => acumulador + String(valor), "");
console.log("Concatenación de valores mixtos con reduce:", reduccionMixto);

// .forEach
mixto.forEach(valor => console.log("Valor mixto:", valor));

// .filter
let filtroMixto = mixto.filter(valor => typeof valor === "number");
console.log("Solo números del arreglo mixto con filter:", filtroMixto);

// .map
let mapeoMixto = mixto.map(valor => typeof valor);
console.log("Tipos de valores en el arreglo mixto con map:", mapeoMixto);
