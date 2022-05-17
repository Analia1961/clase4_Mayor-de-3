// CLASE 4 - Tarea 1 -Viernes 29 de abril 2022
// Estructura de Control - Selección

// Ejercicio – Mayor de Tres
/*• Desarrolle un algoritmo que dados tres números 
determine cuál es el mayor de los tres*/

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese el primer número: ";
rotulo2.innerHTML = "Ingrese el segundo número: ";
rotulo3.innerHTML = "Ingrese el tercer número: ";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  console.log("el primer número es ", numero1);
  let numero2: number = Number(dato2.value);
  console.log("el segundo número es ", numero2);
  let numero3: number = Number(dato3.value);
  console.log("el tercer número es ", numero3);

  let mayor: number = numero1;
  if (numero2 > mayor) {
    mayor = numero2;
  }
  if (numero3 > mayor) {
    mayor = numero3;
  }

  console.log("El mayor es ", mayor);
});

/*Ejercicio recuperado (visto y leído) en el sitio Web CodeSandbox 
 Repositorio prof. Carlos Daniel Tonelli
https://codesandbox.io/s/github/daniel-tonelli/Repositorio
*/
