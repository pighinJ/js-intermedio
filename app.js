//Que determine si un número es primo o no

function esPrimo(numero) {
    
    if (numero <= 1) {
      return false;
    }
    
    if (numero === 2) {
      return true;
    }
    
    if (numero % 2 === 0) {
      return false;
    }
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  // Ejemplo de uso
  const numero = 17;
  if (esPrimo(numero)) {
    console.log(numero + " es primo.");
  } else {
    console.log(numero + " no es primo.");
  }

//Operacion de matriz

function sumaMatrices(matrizA, matrizB) {
    if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
      return null; 
    }
  
    const resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matrizA[0].length; j++) {
        resultado[i][j] = matrizA[i][j] + matrizB[i][j];
      }
    }
    return resultado;
  }
  
  function restaMatrices(matrizA, matrizB) {
    if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
      return null; 
    }
  
    const resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matrizA[0].length; j++) {
        resultado[i][j] = matrizA[i][j] - matrizB[i][j];
      }
    }
    return resultado;
  }
  
  function multiplicaMatrices(matrizA, matrizB) {
    if (matrizA[0].length !== matrizB.length) {
      return null; 
    }
  
    const resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matrizB[0].length; j++) {
        resultado[i][j] = 0;
        for (let k = 0; k < matrizA[0].length; k++) {
          resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
    return resultado;
  }
  
  // Ejemplos de uso
  const matrizA = [[1, 2, 3], [4, 5, 6]];
  const matrizB = [[7, 8, 9], [10, 11, 12]];
  
  const suma = sumaMatrices(matrizA, matrizB);
  const resta = restaMatrices(matrizA, matrizB);
  const multiplicacion = multiplicaMatrices(matrizA, matrizB);
  
  console.log("Matriz A:");
  console.log(matrizA);
  console.log("Matriz B:");
  console.log(matrizB);
  
  console.log("Suma de matrices:");
  console.log(suma);
  console.log("Resta de matrices:");
  console.log(resta);
  console.log("Multiplicación de matrices:");
  console.log(multiplicacion);

  // Suma de numeros en un rango

  function sumaEnRango(a, b) {
    let suma = 0;
    if (a <= b) {
      for (let i = a; i <= b; i++) {
        suma += i;
      }
    } else {
      for (let i = b; i <= a; i++) {
        suma += i;
      }
    }
    return suma;
  }
  
  // Ejemplo de uso
  const a = 1;
  const b = 5;
  const resultado = sumaEnRango(a, b);
  console.log(`La suma de los números en el rango de ${a} a ${b} es: ${resultado}`);

// Contar vocales 

function contarVocales(cadena) {
    
    cadena = cadena.toLowerCase();
    
    let conteo = 0;
    const vocales = "aeiou"; 
    
    for (let i = 0; i < cadena.length; i++) {
      if (vocales.includes(cadena[i])) {
        conteo++;
      }
    }
    
    return conteo;
  }
  
  // Ejemplo de uso
  const texto = "Hola, este es un ejemplo de conteo de vocales en una cadena de texto.";
  const numeroDeVocales = contarVocales(texto);
  console.log(`El número de vocales en la cadena es: ${numeroDeVocales}`);

  //Devuelve sin duplicados

  function elementosUnicos(matriz) {
    const unicos = [];
    
    for (let i = 0; i < matriz.length; i++) {
      if (!unicos.includes(matriz[i])) {
        unicos.push(matriz[i]);
      }
    }
    
    return unicos;
  }
  
  // Ejemplo de uso
  const matriz = ["Sofia", "Maria", "Pedro", "Sofia"];
  const matrizUnica = elementosUnicos(matriz);
  console.log("Matriz original:");
  console.log(matriz);
  console.log("Matriz con elementos únicos:");
  console.log(matrizUnica);

//Invierte sin reverse

function invertirCadena(cadena) {
    let cadenaInvertida = '';
    
    for (let i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
    }
    
    return cadenaInvertida;
  }
  
  // Ejemplo de uso
  const text = "Hola, este es un ejemplo de inversión de cadena.";
  const textoInvertido = invertirCadena(texto);
  console.log("Texto original:");
  console.log(texto);
  console.log("Texto invertido:");
  console.log(textoInvertido);

 // Carrusel de Imágenes
 
 const imagenes = document.querySelectorAll('#carrusel img');
let indiceActual = 0;

function mostrarImagen(indice) {
  imagenes.forEach((imagen, i) => {
    if (i === indice) {
      imagen.style.display = 'block';
    } else {
      imagen.style.display = 'none';
    }
  });
}

document.getElementById('siguiente').addEventListener('click', () => {
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen(indiceActual);
});

document.getElementById('anterior').addEventListener('click', () => {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indiceActual);
});

mostrarImagen(indiceActual);

// Texto agrandable
const textoElemento = document.getElementById('texto');

document.getElementById('aumentar').addEventListener('click', () => {
  const tamañoActual = window.getComputedStyle(textoElemento, null).getPropertyValue('font-size');
  const nuevoTamaño = (parseFloat(tamañoActual) * 1.2) + 'px';
  textoElemento.style.fontSize = nuevoTamaño;
});

document.getElementById('disminuir').addEventListener('click', () => {
  const tamañoActual = window.getComputedStyle(textoElemento, null).getPropertyValue('font-size');
  const nuevoTamaño = (parseFloat(tamañoActual) / 1.2) + 'px';
  textoElemento.style.fontSize = nuevoTamaño;
});

//tarjetas-js
const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener('click', () => {
    const detalles = tarjeta.querySelector('.detalles');
    detalles.style.display = detalles.style.display === 'none' ? 'block' : 'none';
  });
});
